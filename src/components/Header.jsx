import React from 'react'

const Header = ({count}) => {
  return (
    <header className='items-center mx-10 my-5 md:hidden text-2xl'>
        <div className=' py-5 px-10 rounded-xl bg-black/45 z-50 flex flex-col items-center gap-5'>
            <h2 className='text-blue-300  font-black'>USD Balance:</h2>
         <p className="text-5xl
         font-bold text-amber-400">${count}</p>
        {
            count >= 10 && <button
            className="group relative bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold px-8 py-3 rounded-xl shadow-2xl shadow-blue-900/50 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">Withdraw earnings</button>
        }
        </div>
    </header>
  )
}

export default Header