import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className='min-h-screen'>
            <Button>ShadCN Button</Button>
            <ModeToggle/>  
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
