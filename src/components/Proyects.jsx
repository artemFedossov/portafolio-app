import React from "react";
import proyectos from "../data/proyectos.json";

export const Proyects = () => {
  return (
    <>
      <p className="titleContacts">proyectos</p>
      <div className="containerProyect">
        {proyectos.map((proyecto) => {
          return (
            <div key={proyecto.id} className="cardProyects">

              {/* Imagen del proyecto */}
              <img className="cardImg" src={proyecto.img} alt={proyecto.name} />
              <div className="cardDescription">

                {/* Descripción del proyecto */}
                <p className="cardTitle">{proyecto.name}</p>
                <p className="cardSubTitle">{proyecto.description}</p>

                {/* Logos de tecnologías utilizadas */}
                <div className="containerSkills">
                  {proyecto.logos.map((logo) => {
                    return (
                      <img
                        key={logo.name}
                        className="cardLogo"
                        src={logo.img}
                        alt={logo.name}
                      />
                    );
                  })}
                </div>

                {/* Enlace al sitio web del proyecto */}
                <a className="btnCards" target="_blank" rel="noopener noreferrer" href={proyecto.web}>
                  <img className="btnLogo" src="/img/web.png" alt="web" />
                  <p className="btnDesc">web</p>
                </a>

                {/* Enlace al repositorio del proyecto */}
                <a className="btnCards" target="_blank" rel="noopener noreferrer" href={proyecto.repo}>
                  <img className="btnLogo" src="/img/gitHub.png" alt="gitHub" />
                  <p className="btnDesc">repo</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
