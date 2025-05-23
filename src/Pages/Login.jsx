import { LogIn } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Spinner } from "flowbite-react"
import { AppContext } from '../utils/AppContext'

const Login = () => {
    const {
      name,
      isLoading,
      setLoading,
      setName
    } = useContext(AppContext)
    const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-800 z-50"
    >
  <form 
  className="bg-[#131949] p-6 rounded-2xl space-y-4 w-full max-w-md"
  onSubmit={(e) => {
    e.preventDefault()
    setLoading(prev => !prev)
    setTimeout(() => {
        setLoading(prev => !prev)
        navigate(`/${name}`)
    }, 2000)
  }}>
    <label className="block text-gray-200 uppercase">Enter your name</label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full bg-transparent border border-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full flex items-center justify-center gap-5 mt-4 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-2xl transition-transform transform hover:scale-105"
    >
      {
       isLoading ? <span class="loader" ></span> : <p className='flex items-center justify-center gap-3'>Login <LogIn /></p>
      }
    </button>
  </form>
  
</div>
  )
}

export default Login