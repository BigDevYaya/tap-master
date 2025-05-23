import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./components/Home"
import Login from "./Pages/Login"
import { use, useState } from "react"



function App() {
  
  return (
    <>
      <Routes>
        <Route index element={<Login name={name} onChange={(e) => setName(e.target.value)} />} />
        <Route path="/home" element={<Home name={name} />} />      
      </Routes>
    </>
  )
}

export default App
