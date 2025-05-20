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
    useEffect(()=> setDollar(count), [count])
    function getRandomImage(){
        return Math.floor(Math.random() * 2)
    }
  return (
    <div className='h-full text-white flex flex-col items-center gap-5 justify-center mt-5'>
        <h1 className='font-extrabold text-5xl'>Flip the coin</h1>
        <p className='font-bold'>Press the coin or the button to flip the coin to earn money</p>
        <div>
            <img 
            className="w-64 h-60 tr" 
            onClick={
              ()=> {
            setCount(prev => prev + 1)
            }
            } src={coin.at(image)} alt="" />
            <img className='w-64 h-20' src={shadow} alt="Coin" />
        </div>
        <p className='text-2xl font-extrabold'>{count}</p>
        <p>You currently have ${dollarCount}</p>
        <button 
        className='bg-blue-400 px-7  rounded uppercase py-1.5'
        onClick={
          ()=>{
          showModal(prev => !prev)
          }}>Buy More Coin</button>
        {
          modal ? <Modal setCount={setCount} showModal={showModal}/> : null
        }
    </div>
  )
}

export default Home