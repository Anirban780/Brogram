"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { Search, Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
    const currentPage = useLocation();
    const postFilterStyles = currentPage.pathname === "/home" ? "" : "!hidden";

    return (
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 ml-auto w-full border-b backdrop-blur">
            <div className="flex h-14 w-full items-center px-4 py-8 lg:px-10">
                {/* logo */}
                <div className="mx-2 mr-4 flex items-center space-x-4 md:mr-6 md:space-x-1 lg:mr-10">
                    <Link className="flex items-center space-x-2" to="/">
                        <Code className="text-primary h-6 w-6" />
                        <span className="hidden font-bold md:block">
                            Brogram
                        </span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="mx-2 w-full flex-1">
                        <form>
                            <div className="relative">
                                <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4 lg:left-3 lg:top-3" />
                                <Input
                                    type="search"
                                    placeholder="Search Brogram"
                                    className="w-full max-w-[275px] pl-8 md:w-[300px] md:max-w-full lg:w-[325px] lg:pl-10"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center sm:gap-4">
                        <Button className="hidden sm:flex">Log In</Button>
                        <Link to={"/signup"}>
                            <Button
                                variant="secondary"
                                className="hidden sm:flex"
                            >
                                Sign Up
                            </Button>
                        </Link>
                        <ModeToggle className="size-10 border" />
                    </div>
                </div>
            </div>
            <nav
                className={`flex h-9 items-center space-x-6 overflow-x-auto border-t px-6 py-6 text-sm font-medium sm:px-6 md:hidden lg:px-10 ${postFilterStyles}`}
            >
                <a
                    className="hover:text-foreground/80 text-foreground/60 transition-colors"
                    href="#"
                >
                    Popular
                </a>
                <a
                    className="hover:text-foreground/80 text-foreground/60 transition-colors"
                    href="#"
                >
                    Hot
                </a>
                <a
                    className="hover:text-foreground/80 text-foreground/60 transition-colors"
                    href="#"
                >
                    Rising
                </a>
                <a
                    className="hover:text-foreground/80 text-foreground/60 transition-colors"
                    href="#"
                >
                    Controversial
                </a>
            </nav>
        </header>
    );
}
