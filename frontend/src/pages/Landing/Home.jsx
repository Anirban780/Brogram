"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        // Placeholder UI generated for Home
        // scope of breaking this down into smaller components and layouts (if this example is considered)
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 px-4 lg:px-10">
                <section className="mx-auto mb-8 w-full py-12 md:py-24 lg:min-h-[85vh] lg:max-w-[97.5%] lg:py-32 xl:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="mb-4 flex flex-col justify-center space-y-4">
                                <div className="mb-2 space-y-2">
                                    <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Welcome to Brogram
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Dive into developer discussions, share
                                        your code insights, and connect with
                                        fellow programmers who share your
                                        passion for technology.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                                    <Button className="inline-flex items-center justify-center">
                                        Join Brogram
                                        <ArrowRight className="ml-2 size-4" />
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
                <section className="mx-auto mb-8 w-full max-w-[95%] rounded-lg bg-gray-100 pb-12 pt-8 md:py-24 lg:py-20 dark:bg-gray-800">
                    <div className="container px-4 md:px-6 lg:pl-12">
                        <h2 className="mb-12 break-words text-center text-3xl font-bold tracking-tighter sm:text-5xl lg:mb-20">
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
                <section className="mb-12 w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="mb-4 space-y-2">
                                <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-5xl">
                                    Join the Dev Conversation
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Sign up now to be part of the Brogram
                                    community. Share your code snippets, discuss
                                    the latest tech trends, and engage in
                                    discussions on topics youre passionate about
                                    in the world of development.
                                </p>
                            </div>
                            <Link to={"/signup"}>
                                <Button
                                    className="inline-flex items-center justify-center"
                                    size="lg"
                                >
                                    Create an Account
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
