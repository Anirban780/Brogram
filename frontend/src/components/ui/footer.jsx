import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6 lg:px-10">
            <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2024 DevDialogue, Inc. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                <Link
                    className="text-xs underline-offset-4 hover:underline"
                    to={"/terms-of-service"}
                >
                    Terms of Service
                </Link>
                <Link
                    className="text-xs underline-offset-4 hover:underline"
                    to={"/privacy-policy"}
                >
                    Privacy Policy
                </Link>
                <Link
                    className="text-xs underline-offset-4 hover:underline"
                    to={"/content-policy"}
                >
                    Content Policy
                </Link>
            </nav>
        </footer>
    );
}
