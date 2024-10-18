import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"



function LandingHome() {
  return (
    <>
        <div className='flex flex-col min-h-screen items-center justify-center'>
            <p className="text-2xl py-4 text-center">ShadCN + ReactRouterDOM Setup Complete</p>
            <Button className="my-4">Button</Button>
            <ModeToggle/>
        </div>
    </>
  )
}

export default LandingHome
