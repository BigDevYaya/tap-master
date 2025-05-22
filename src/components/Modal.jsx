import { X } from 'lucide-react'
import React from 'react'

const Modal = ({setCount, showModal, modal}) => {
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
            className='bg-blue-400 px-7  rounded uppercase py-1.5'
            onClick={()=> {
                // setTimeout(() => setCount(prev => prev + 100000), 2000),
                showModal(prev => !prev)
                console.log(modal)
            }}>Buy</button>
        </div>
        </div>
    </div>
  )
}

export default Modal