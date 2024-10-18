import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import LandingHome from './pages/Landing/LandingHome'


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="getting-started" />} />
          <Route path="/getting-started" element={<LandingHome />} />


          

        </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

