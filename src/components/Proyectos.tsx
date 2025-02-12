import './Proyectos.css'
import stackTowerImage from '../assets/stack-tower.png'
import tiendaReactImage from '../assets/tienda-react.png'
import toprecetasImage from '../assets/toprecetas.png'
import angularSVG from '../assets/angular.svg'
import reactSVG from '../assets/react.svg'

function Proyectos() {
const proyectos = [
    {
      title: "TopRecetasWeb.com",
      description: "Web de recetas de cocina desarrollada con Angular 17",
      image: toprecetasImage,
      url: "https://toprecetasweb.com",
      icono:angularSVG,
      tecnologia:"Angular"

    },    {
      title: "Stack Tower Game",
      description: "Juego de construccion de torres desarrollado en JS",
      code: "https://github.com/serperrui1/js_proyects/tree/master/Stack-Tower-2D",
      image: stackTowerImage,
      url: "https://serperrui1.github.io/js_proyects/Stack-Tower-2D/",

    },
    {
      title: "Tienda online (React)",
      description: "Tienda online desarrollada en React con carrito de compra",
      code: "https://github.com/serperrui1/react-tienda",
      image: tiendaReactImage,
      url: "https://serperrui1.github.io/react-tienda",
      icono:reactSVG,
      tecnologia:"React"

    }

  ]

  return (
    <>
    <h2>Proyectos personales</h2>
      <div className="proyectos-container">
        {
      proyectos.map((p) => (
        <div className="proyecto">
          <img src={p.image} alt="stack-tower"/>
          <h3>{p.title} <span className='icono'><img src={p.icono}></img>&nbsp; {p.tecnologia}</span></h3>
          <p className='descripcion'>{p.description}</p>
          <div className="proyecto-buttons">
            {p.code!=null?
            <button>
              <a href={p.code} target="_blank">Ver código</a>
            </button>
            :''}
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