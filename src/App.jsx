import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./components/Home"
import Login from "./Pages/Login"



function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />      
      </Routes>
    </>
  )
}

export default App
