import { BackgroundLines } from "@/components/aceternity/background-lines"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import IconCloud from "@/components/ui/icon-cloud"
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
    <>
        
        {/* AcernityUI Setup Showcase */}
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                DevDialogue<br />
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                This is the background-lines component from ui.aceternity.com
            </p>
        </BackgroundLines>


        {/* MagicUI */}
        <div className="h-screen flex flex-col items-center justify-center">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                MagicUI Icon cloud<br />
            </h2>
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
            </div>
        
        </div> 
        



        {/* ShadCN Setup Showcase */}
        <div className='h-screen flex flex-col items-center justify-center '>
            <p className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                ShadCN + ReactRouterDOM
            </p>
            <Button className="my-4" onClick={()=>navigate('/home')}>Open Dummy Landing Page<ArrowUpRight className="w-2 h-2"/></Button>
            <ModeToggle/>
        </div>


    </>
  )
}

export default GettingStarted
