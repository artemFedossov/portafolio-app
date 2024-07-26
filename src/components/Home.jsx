import React from "react";
import { LogoAnimation } from "./LogoAnimation";

export const Home = () => {
  return (
    <>
      <div className="containerInicio">
        <div>
          <div className="textName">Hola, soy Artem</div>
          <div className="containerText">
            <p className="text">
              Soy un estudiante de desarrollo de software enfocado en
              tecnologías web y la creación de soluciones interactivas y
              estéticas. Tengo experiencia básica en React, Sass, Bootstrap y
              Material-UI, y actualmente estoy aprendiendo Python. Mi portafolio
              incluye proyectos que demuestran mis habilidades y mi dedicación
              al aprendizaje continuo en el campo de la tecnología.
            </p>
          </div>
          <div className="containerBtn">
            <a
              href="/cv/cv.pdf"
              download="Artem-Fedossov-CV.pdf"
              className="btnHome"
            >
              <p className="btnDesc">Descargar CV</p>
            </a>

            <a
              target="_blank"
              href="https://github.com/artemFedossov"
              className="btnHome"
            >
              <p className="btnDesc">Repositorio GitHub</p>
            </a>
          </div>
        </div>
        <div className="containerCenter">
          <LogoAnimation />
        </div>
      </div>
    </>
  );
};
