import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import PasswordInput from "./ui/PasswordInput";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3000/auth/login", {
                username,
                password,
            });

            localStorage.setItem("token", response.data.token);
            toast.success("Logged in successfully");
            navigate("/home");
        } catch (error) {
            toast.error(error.response?.data?.error || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-background/95 dark:bg-background/60 p-4 text-xl">
            <div className="flex h-full w-full items-center justify-center md:w-1/2">
                <div className="flex h-full w-full items-center justify-center sm:w-0 md:w-full">
                    {/* Optionally add icon cloud if consistent */}
                </div>
            </div>
            <form
                className="flex w-full max-w-sm flex-col space-y-4 rounded-lg bg-background/95 p-6 shadow-lg md:max-w-lg md:p-8"
                onSubmit={handleSubmit}
            >
                <h1 className="text-center font-mono text-lg font-medium md:text-xl">
                    Welcome Back!
                </h1>
                <div className="flex items-center justify-center space-x-2 text-center text-sm md:text-base">
                    <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 py-2 hover:bg-gray-200 text-sm">
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </div>
                <div>
                    <label className="block text-gray-600 font-medium mb-2">Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        className="w-full rounded-full border border-gray-300 p-2 hover:border-green-400 dark:bg-gray-800 dark:border-gray-700 text-sm"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-600 font-medium mb-2">Password</label>
                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="rounded-full bg-blue-500 p-2 text-white transition-all hover:bg-opacity-90"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
                <span className="text-center text-sm">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-violet-700">
                        Sign Up
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
