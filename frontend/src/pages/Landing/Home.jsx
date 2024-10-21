"use client";
// Generated using V0.dev
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Code } from "lucide-react";

export function Home() {
    return (
        // Placeholder UI generated for Home
        // scope of breaking this down into smaller components and layouts (if this example is considered)
        <div className="flex flex-col min-h-screen ">
            <header className="sticky top-0 z-50 px-4 lg:px-10 py-2 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center">
                    {/* logo */}
                    <div className="flex items-center space-x-4 md:space-x-1 mx-2 mr-4 md:mr-6 lg:mr-10">
                        <a className="flex items-center space-x-2" href="#">
                            <Code className="h-6 w-6 text-primary" />
                            <span className="font-bold hidden md:block">
                                Brogram
                            </span>
                        </a>
                    </div>

                    <div className="flex flex-1 items-center justify-end space-x-2">
                        <div className="w-full flex-1 mx-2">
                            <form>
                                <div className="relative">
                                    <Search className="absolute lg:left-3 lg:top-3 left-2.5 top-2.5 h-4 w-4 text-muted-foreground " />
                                    <Input
                                        type="search"
                                        placeholder="Search Brogram"
                                        className="w-full pl-8 lg:pl-10 md:w-[300px] lg:w-[325px] "
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex gap-4">
                            <Button className="hidden sm:flex">Log In</Button>
                            <Button
                                variant="secondary"
                                className="hidden sm:flex"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
                <nav className="flex items-center space-x-6 overflow-x-auto px-4 sm:px-6 text-sm font-medium h-9 border-t md:hidden">
                    <a
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                        href="#"
                    >
                        Popular
                    </a>
                    <a
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                        href="#"
                    >
                        Hot
                    </a>
                    <a
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                        href="#"
                    >
                        Rising
                    </a>
                    <a
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                        href="#"
                    >
                        Controversial
                    </a>
                </nav>
            </header>
            <main className="flex-1 px-4 lg:px-10">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32 lg:min-h-[85vh] ">
                    <div className="container px-4 md:px-6 ">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Welcome to Brogram
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Dive into developer discussions, share
                                        your code insights, and connect with
                                        fellow programmers who share your
                                        passion for technology.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button className="inline-flex items-center justify-center">
                                        Join Brogram
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                            <img
                                alt="Hero"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="550"
                                src="/placeholder.svg?height=550&width=800"
                                width="800"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full pb-12 pt-8 md:py-24 lg:py-20 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <div className="container px-4 md:px-6 lg:pl-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 lg:mb-20">
                            Popular Dev Communities 🔥
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    name: "r/ExperiencedDevs",
                                    icon: "💡",
                                    members: "856K",
                                },
                                {
                                    name: "r/CodeReviews",
                                    icon: "🧐",
                                    members: "980K",
                                },
                                {
                                    name: "r/WebDev",
                                    icon: "🌐",
                                    members: "2.3M",
                                },
                                {
                                    name: "r/AIandML",
                                    icon: "🤖",
                                    members: "1.5M",
                                },
                                {
                                    name: "r/OpenSource",
                                    icon: "🔓",
                                    members: "890K",
                                },
                                {
                                    name: "r/ProgrammingHumor",
                                    icon: "😂",
                                    members: "1.8M",
                                },
                            ].map((community) => (
                                <div
                                    key={community.name}
                                    className="flex items-center space-x-4 rounded-lg border p-4"
                                >
                                    <div className="text-4xl">
                                        {community.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold">
                                            {community.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {community.members} members
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2 mb-4">
                                <h2 className="text-3xl font-bold tracking-tighter mb-8 sm:text-5xl">
                                    Join the Dev Conversation
                                </h2>
                                <p className="max-w-[900px]  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Sign up now to be part of the Brogram
                                    community. Share your code snippets, discuss
                                    the latest tech trends, and engage in
                                    discussions on topics youre passionate about
                                    in the world of development.
                                </p>
                            </div>
                            <Button
                                className="inline-flex items-center justify-center"
                                size="lg"
                            >
                                Create an Account
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 DevDialogue, Inc. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <a
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Terms of Service
                    </a>
                    <a
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Privacy
                    </a>
                    <a
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Content Policy
                    </a>
                </nav>
            </footer>
        </div>
    );
}
