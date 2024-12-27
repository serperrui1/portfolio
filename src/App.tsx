// import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Experiencia from './components/Experiencia'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Proyectos from './components/Proyectos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <section className='hero' id="hero">
      <HeroSection/>
    </section>
    <section className='experiencia' id="experiencia">
    <Experiencia/>
    </section>
    <section className='proyectos' id="proyectos">
    <Proyectos/>
    </section>
    <section className='about' id="sobre-mi">
      <AboutMe/>
      </section>
    
    </>
  )
}


export default App
