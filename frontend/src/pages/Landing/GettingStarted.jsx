import { BackgroundLines } from "@/components/aceternity/background-lines";
import { Button } from "@/components/ui/button";
import IconCloud from "@/components/ui/icon-cloud";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function GettingStarted() {
    const navigate = useNavigate();
    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "java",
        "react",
        "flutter",
        "android",
        "html5",
        "css3",
        "nodedotjs",
        "express",
        "nextdotjs",
        "prisma",
        "amazonaws",
        "postgresql",
        "firebase",
        "nginx",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma",
    ];

    return (
        <main>
            {/* AcernityUI Setup Showcase */}
            <BackgroundLines className="mb-20 flex h-[20rem] w-full flex-col items-center justify-center px-8 md:h-[75vh]">
                <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent md:py-10 md:text-4xl lg:text-7xl dark:from-neutral-600 dark:to-white">
                    Brogram
                    <br />
                </h2>
                <p className="mx-auto max-w-xl text-center text-neutral-700 md:text-lg lg:text-2xl dark:text-neutral-400">
                    A social platform built by developers, for
                    developers—connect, collaborate, share insights, and grow
                    together in an ecosystem that celebrates code and
                    creativity.
                </p>
            </BackgroundLines>

            {/* MagicUI */}
            <section className="mx-auto mb-20 flex h-screen max-w-[95rem] flex-col items-center justify-center px-8 pt-12">
                <div className="mb-12 lg:mb-24">
                    <h2 className="relative z-20 mb-6 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 font-sans text-2xl font-bold tracking-tight text-transparent md:pt-10 md:text-4xl lg:text-5xl dark:from-neutral-600 dark:to-white">
                        Supporting Innovation Across Multiple Tools and
                        Languages
                        <br />
                    </h2>
                    <p className="md:text-lg">
                        At Brogram, we believe innovation thrives through
                        diversity. That’s why we support discussions across a
                        wide range of tools, frameworks, and programming
                        languages. Whether you’re diving into the latest
                        JavaScript libraries, exploring Rust, mastering DevOps
                        with Docker, or anything in between, our community is
                        here to help you grow. Join us to share knowledge, solve
                        challenges, and stay ahead in the ever-evolving tech
                        landscape.
                    </p>
                </div>

                <div className="bg-background relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border px-20 pb-20 pt-8">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </section>

            {/* ShadCN Setup Showcase */}
            <section className="flex h-[25rem] flex-col items-center justify-center px-8 lg:h-[40rem]">
                <Button className="mb-8 mt-4" onClick={() => navigate("/home")}>
                    Open Dummy Landing Page
                    <ArrowUpRight className="h-2 w-2" />
                </Button>

                <p className="mt-32 self-center text-gray-500 lg:mt-44">
                    Built with ❤️ using ShadCn and React Router
                </p>
            </section>
        </main>
    );
}

export default GettingStarted;
