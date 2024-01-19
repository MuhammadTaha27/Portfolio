import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Services from './components/Services'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Abc from './components/Abc'
import Projects from './components/Projects'




export default function Home() {
  
  return(

    <main>
      <div className="bg-gradient-to-t from-blue-950 to-yellow-300 h-full ">
        <Navbar/>
        
        <Hero />
        <Skills/>
        <Services/>
        <Reviews/>
        <Footer/>
      </div>
    </main>
  )
}
