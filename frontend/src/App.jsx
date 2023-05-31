import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

// components
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route
              path="/signup"
              element={<Signup/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
