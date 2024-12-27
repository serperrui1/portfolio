// import { useState } from 'react'
import "./Experiencia.css";
function Experiencia() {
  //   const [count, setCount] = useState(0)
  const experiencia = [
    {
      title: "Practicas de empresa",
      company: "Babel Sistemas de Información",
      description:
        "Practicas de empresa en un proyecto interno de Enel. Desarrollé una aplicación web con Angular 8 y un backend en Java con Spring Boot.",
      date: "2021",
    },
    {
      title: "Frontend Engineer",
      company: "Babel Sistemas de Información",
      description:
        "Desarrollo de aplicaciones internas y externas para entidades públicas y privadas, como Enel, Enaire y la Junta de Andalucía. \n Uso de tecnologías como Angular (versiones 8 a 19), React y Spring Boot para crear soluciones escalables y eficientes.",
      date: "2021 - Presente",
    },
  ];

  return (
    <>
      <div>
        <h2>Experiencia laboral</h2>
        {experiencia.map((exp) => (
          <div className="experience">
            <span className="dot-title">&bull;</span>
            <div className="title">
              <h3 className="job">{exp.title}</h3>
              <h3 className="company">{exp.company}</h3>
              <p className="date">{exp.date}</p>
            </div>
            <div className="description">
            {exp.description.split("\n").map((line, i) => (
              <span key={i}>{line}<br /><br /></span>
            ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experiencia;
