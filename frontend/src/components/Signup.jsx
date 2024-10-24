import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import IconCloud from "./ui/icon-cloud";
import { slugs } from "@/constants/data";

const Signup = () => {
    const navigate = useNavigate();
    const [logged, setlogged] = useState(false);
    const [userdata, setUserdata] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handle = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        console.log(name, value);

        setUserdata((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
    };

    const submit = async (e) => {
        e.preventDefault();
        const { name, username, email, password, confirmPassword } = userdata;
        try {
            const response = await axios.post(
                "http://localhost:3000/auth/signup",
                {
                    name,
                    username,
                    email,
                    password,
                    confirmPassword,
                    profilePic: null,
                },
            );
            if (response) {
                navigate("/signin");
                toast.success("signed up sucessfully");
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };
    // if(!logged){
    //   return < div className='flex text-center items-center'>Loading...</div>
    // }
    // else
    return (
        <div className="flex h-screen items-center justify-center bg-background/95 dark:bg-background/60 p-4 text-xl">
            <div className="flex h-full w-full items-center justify-center md:w-1/2">
                <div className="flex h-full w-full items-center justify-center sm:w-0 md:w-full">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
            <form
                className="flex w-full max-w-sm flex-col space-y-4 rounded-lg bg-background/95 p-6 shadow-lg md:max-w-lg md:p-8"
                onSubmit={submit}
            >
                <h1 className="text-center font-mono text-lg font-medium md:text-xl">
                    Create Account!
                </h1>
                <div className="flex items-center justify-center space-x-2 text-center text-sm md:text-base">
                    <button className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 py-2 hover:bg-gray-200 text-sm">
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-full border border-gray-300 p-2 hover:border-green-400 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    name="name"
                    value={userdata.name}
                    onChange={handle}
                />
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full rounded-full border border-gray-300 p-2 hover:border-green-400 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    name="username"
                    value={userdata.username}
                    onChange={handle}
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="w-full rounded-full border border-gray-300 p-2 hover:border-green-400 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    name="email"
                    value={userdata.email}
                    onChange={handle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full rounded-full border border-gray-300 p-2 hover:border-green-400 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    name="password"
                    autoComplete="off"
                    value={userdata.password}
                    onChange={handle}
                />
                <input
                    type="password"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    className="w-full rounded-full border border-gray-300 p-2 hover:border-green-400 dark:bg-gray-800 dark:border-gray-700 text-sm"
                    name="confirmPassword"
                    value={userdata.confirmPassword}
                    onChange={handle}
                />
                <button
                    type="submit"
                    className="rounded-full bg-blue-500 p-2 text-white transition-all hover:bg-opacity-90"
                >
                    {logged ? "Submitting" : "Sign Up"}
                </button>
                <span className="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-violet-700">
                        Sign In
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default Signup;
