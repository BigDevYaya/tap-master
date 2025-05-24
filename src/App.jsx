import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import { use, useState } from "react"




function App() {
  
  return (
    <>
      <Routes>
        <Route index element={<Login onChange={(e) => setName(e.target.value)} />} />
        <Route path="/:name" element={<Home />} />      
      </Routes>
    </>
  )
}

export default App
