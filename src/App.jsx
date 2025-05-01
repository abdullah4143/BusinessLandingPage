import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PurposeSection from './components/PurposeSection';
import Companylogo from './components/Companylogo';
import './App.css'



const App = () => {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-25 -left-28 h-[400px] w-[400px] bg-gradient-to-tr from-indigo-500/20 to-pink-400/20 rounded-full -z-10 blur-[80px]'>
      </div>
      <div className='overflow-hidden'>
          <Navbar />
          <Hero />
          <Companylogo />
          <PurposeSection />
      </div>
    </main>
  )
}


export default App