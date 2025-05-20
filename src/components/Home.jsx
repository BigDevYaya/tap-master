import { useEffect, useState } from 'react'
import heads from '../assets/resources/heads.svg'
import shadow from '../assets/resources/shadow.svg'
import tail from '../assets/resources/tails.svg'
import Modal from './Modal'

const Home = () => {
    const coin = [heads, tail]
    const [count, setCount] = useState(0);
    const [image, setImage] = useState(0)
    const [modal, showModal] = useState(false);
    const [dollarCount, setDollarCount] = useState(0);

    function setDollar(count) {
      count >= 100 ? setDollarCount(prev => prev + 1) : setDollarCount(prev => prev)
    }

    useEffect(() => setDollar(count), [count])

    function getRandomImage() {
        return Math.floor(Math.random() * 2)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white flex flex-col items-center justify-center px-4 py-8 gap-8">
            <h1 className="font-extrabold text-4xl sm:text-5xl text-center">Flip the Coin</h1>
            <p className="text-center max-w-md text-sm sm:text-base font-medium">
                Press the coin or the button to flip the coin to earn money
            </p>

            <div className="relative flex flex-col items-center cursor-pointer group transition-all duration-300"
                onClick={() => {
                    setCount(prev => prev + 1)
                }}>
                <img 
                    className="w-40 h-40 sm:w-56 sm:h-56 transition-transform duration-500 group-hover:scale-110 drop-shadow-lg" 
                    src={coin.at(image)} 
                    alt="Coin" 
                />
                <img 
                    className="w-32 sm:w-48 mt-[-1.5rem] opacity-80" 
                    src={shadow} 
                    alt="Coin shadow" 
                />
            </div>

            <p className="text-3xl font-black text-green-400">${count}</p>
            <p className="text-lg sm:text-xl font-semibold text-yellow-300">
                You currently have ${dollarCount}
            </p>

            <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition duration-300"
                onClick={() => {
                    showModal(prev => !prev)
                }}>
                Buy More Coin
            </button>

            {modal && <Modal setCount={setCount} showModal={showModal} />}
        </div>
    )
}

export default Home
