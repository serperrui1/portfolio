import './Proyectos.css'
import stackTowerImage from '../assets/stack-tower.png'

function Proyectos() {
const proyectos = [
    {
      title: "Stack Tower Game",
      description: "Juego de construccion de torres desarrollado en JS",
      code: "https://github.com/serperrui1/js_proyects/tree/master/Stack-Tower-2D",
      image: stackTowerImage,
      url: "https://serperrui1.github.io/js_proyects/Stack-Tower-2D/",

    },
    {
      title: "Stack Tower Game",
      description: "Juego de construccion de torres desarrollado en JS",
      code: "https://github.com/serperrui1/js_proyects/tree/master/Stack-Tower-2D",
      image: stackTowerImage,
      url: "https://serperrui1.github.io/js_proyects/Stack-Tower-2D/",

    },
    {
      title: "Stack Tower Game",
      description: "Juego de construccion de torres desarrollado en JS",
      code: "https://github.com/serperrui1/js_proyects/tree/master/Stack-Tower-2D",
      image: stackTowerImage,
      url: "https://serperrui1.github.io/js_proyects/Stack-Tower-2D/",

    },
    {
      title: "Stack Tower Game",
      description: "Juego de construccion de torres desarrollado en JS",
      code: "https://github.com/serperrui1/js_proyects/tree/master/Stack-Tower-2D",
      image: stackTowerImage,
      url: "https://serperrui1.github.io/js_proyects/Stack-Tower-2D/",

    },

  ]

  return (
    <>
    <h2>Proyectos personales</h2>
      <div className="proyectos-container">
        {
      proyectos.map((p) => (
        <div className="proyecto">
          <img src={p.image} alt="stack-tower"/>
          <h3>{p.title}</h3>
          <p className='descripcion'>{p.description}</p>
          <div className="proyecto-buttons">
            <button>
              <a href={p.code} target="_blank">Ver código</a>
            </button>
            <button>
              <a href={p.url} target="_blank">Ver página</a>
            </button>
          </div>
        </div>
      ))
    }
      </div>
    </>
  )
}

export default Proyectos