import React from 'react'
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";

const BuyBots = () => {
  const {
    isLoading,
    updateCoin,
    setMax,
    bot,
    setBot,
  } = useContext(AppContext);

  return (
<div className='hidden md:flex gap-5 flex-col items-center justify-center my-7 h-full flex-1/2 w-full'>
          
            {/* Buy bots card */}
            <div className='bg-[#131949] rounded-3xl py-6 px-6 shadow-2xl flex flex-col gap-5 w-full border border-blue-700'>
              <p className='text-2xl font-bold text-white border-b-4 border-blue-500 pb-4 text-center'>
              Get Boosts at Discount Prices Now!
              </p>

              <div className='flex items-center justify-between bg-[#0b1033] p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:bg-[#151c4e]'>
                <p className='text-white text-lg'>
                  Get Random amount of coins at <span className='text-green-400 font-bold text-xl'>$0.8</span>!
                </p>
                <button
                  className={
                    `bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold px-3 py-2 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${isLoading &&'bg-none flex items-center justify-end ml-3'}`
                  }
                  onClick={(e)=>{
                    e.preventDefault()
                    updateCoin()
                  }}
                >
                  {
                    isLoading ? <span class="loader" ></span> : 'Buy'
                  }
                </button>
              </div>

              <div className='flex items-center justify-between bg-[#0b1033] p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:bg-[#151c4e]'>
                <p className='text-white text-lg'>
                  Increase Tap Limit at <span className='text-green-400 font-bold text-xl'>$0.8</span>!
                </p>
                <button
                  className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold px-3 py-2 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
                  onClick={() =>{
                    setMax(prev => prev + 100)
                  } }
                >
                  Buy
                </button>
              </div>

              <div className='flex items-center justify-between bg-[#0b1033] p-4 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:bg-[#151c4e]'>
                <p className='text-white text-lg'>
                  Activate bot at <span className='text-green-400 font-bold text-xl'>$12</span>!
                </p>
                <button
                  className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-bold px-3 py-2 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setBot(prev => !prev)}
                  disabled={bot}
                >
                  {
                    bot ? 'Acitivated' : 'Buy'
                  }
                </button>
              </div>
            </div>
        </div>
  )
}

export default BuyBots