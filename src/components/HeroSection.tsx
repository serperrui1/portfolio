// import { useState } from 'react'
import './HeroSection.css'
import avatar from '../assets/avatar.jpg';

function HeroSection() {
//   const [count, setCount] = useState(0)


  return (
    <>
      <img src={avatar} alt="avatar" className='avatar' />
      <h1>Buenas, soy Sergio Perea</h1>
        <p><strong className='important'>+3 años de experiencia</strong> como ingeniero informático y desarrollador Frontend.  </p>
        <p>Especializado en aplicaciones web con <strong className='important'>Angular y React</strong>.</p>
        <div className="contacto">
          <button>
            <a href="#" className="contact">Contáctame</a>
          </button>
        </div>
      
    </>
  )
}

export default HeroSection