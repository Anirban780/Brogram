import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import GettingStarted from './pages/Landing/GettingStarted'
import { Home } from './pages/Landing/Home'
import Signup from './components/Signup'
import { ToastContainer } from 'react-toast'
import Signin from './components/Signin'

function App() {
  return (
    <>
     
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ToastContainer/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="getting-started" />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin/>}/>
              <Route path="*" element={<Navigate to="/" />} />

            </Routes>
          </BrowserRouter>
        </ThemeProvider>
     

    </>
  )
}

export default App

