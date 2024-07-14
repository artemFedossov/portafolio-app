import React from "react";
import proyectos from "../data/proyectos.json";

export const Proyects = () => {
  return (
    <>
    <p className='titleContacts'>proyectos</p>
      {proyectos.map((proyecto) => {
        return (
          <div key={proyecto.id} className="cardProyects">
            <img className="cardImg" src={proyecto.img} alt={proyecto.name} />
            <div className="cardDescription">
              <p className="cardTitle">{proyecto.name}</p>
              <p className="cardSubTitle">{proyecto.description}</p>
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

              <button className="btnCards">
                <a
                  target="_blank"
                  href="https://react-proyecto-nine.vercel.app/"
                >
                  <img className="btnLogo" src="/img/web.png" alt="url" />
                  <p className="btnDesc">web</p>
                </a>
              </button>

              <button className="btnCards">
                <a
                  target="_blank"
                  href="https://github.com/artemFedossov/react-proyecto"
                >
                  <img className="btnLogo" src="/img/gitHub.png" alt="gitHub" />
                  <p className="btnDesc">repo</p>
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
