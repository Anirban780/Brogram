import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import GettingStarted from "./pages/Landing/GettingStarted";
import { Home } from "./pages/Landing/Home";
import Navigation from "./components/ui/navigation";
import Footer from "./components/ui/footer";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toast";
import Signin from "./components/Signin";
import ToS from "./pages/Landing/Terms-of-serivce";
import PrivacyPolicy from "./pages/Landing/Privacy-policy";
import ContentPolicy from "./pages/Landing/Content-policy";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ToastContainer />
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<Layout childern={<Home />} />}
                        />
                        <Route
                            path="/getting-started"
                            element={<Layout childern={<GettingStarted />} />}
                        />
                        <Route
                            path="/signup"
                            element={<Layout childern={<Signup />} />}
                        />

                        <Route
                            path="/signin"
                            element={<Layout childern={<Signin />} />}
                        />
                        <Route
                            path="/terms-of-service"
                            element={<Layout childern={<ToS />} />}
                        />
                        <Route
                            path="/privacy-policy"
                            element={<Layout childern={<PrivacyPolicy />} />}
                        />
                        <Route
                            path="/content-policy"
                            element={<Layout childern={<ContentPolicy />} />}
                        />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

function Layout({ childern }) {
    return (
        <>
            <Navigation />
            {childern}
            <Footer />
        </>
    );
}

export default App;
