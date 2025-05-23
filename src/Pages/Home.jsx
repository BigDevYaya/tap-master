import Header from '../components/Header'
import Main from '../components/Main'
import MobileNav from '../components/MobileNav'
import Modals from '../components/Modals'

const Home = () => {
  
  return (
    <div className=' bg-gradient-to-br from-[#001133] via-[#002255] to-[#001144] text-white min-h-screen relative overflow-x-hidden md:grid md:place-items-center select-none'>
      {/* Header */}
      <Header />

      <Main />


      {/* Mobile Nav */}
      <MobileNav />

      {/* Modals */}
      <Modals />
    </div>
  )
}

export default Home