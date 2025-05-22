import { ShoppingBag, X } from 'lucide-react'
import React, { useState } from 'react'

const Modal = ({setCount, showModal, modal}) => {
    const [isLoading, setIsLoading] = useState(false);
  return (
    <div 
    className='fixed inset-0 grid place-items-center bg-black/50'
    >
        <div 
        className='absolute h-full w-full'
        onClick={() => {
        showModal(prev => !prev)
        console.log(modal)
    }}>
        </div>
        <div
        className='bg-[#131949] text-white px-6 py-5 rounded-sm z-50'>
        <X 
        className='relative -right-11/12'
        onClick={() => showModal(prev => !prev)} />
        <div className='z-50'>
            <h1>Buy More Coins to increase your earnings</h1>
            <button
            className="w-full flex items-center justify-center gap-5 mt-4 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-2xl transition-transform transform hover:scale-105"
            onClick={(e)=> {
                e.preventDefault();
                setIsLoading(prev => !prev)
                setTimeout(() => 
                    {
                        setIsLoading(prev => !prev)
                        setCount(prev => prev + 100000)
                        showModal(prev => !prev)
                    }, 2000),
                console.log(modal)
            }}>
                {
                    isLoading ? <span class="loader" ></span> : <p className='flex items-center justify-center gap-3'>Buy <ShoppingBag /> </p>
                }
            </button>
        </div>
        </div>
    </div>
  )
}

export default Modal