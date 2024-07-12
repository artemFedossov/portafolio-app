import React from 'react'
import { LogoAnimation } from './LogoAnimation'

export const Home = () => {
  return (
    <>
      <div className='containerInicio'>
        <div>
          <div className='textName'>Hola, soy Artem</div>
          <div className='containerText'>
            <p className='text'>Un estudiante entusiasta de desarrollo de software con un enfoque en tecnologías web
              y un amor por la creación de soluciones interactivas y estéticamente agradables.
              Actualmente estoy explorando y aprendiendo diversas herramientas
              y lenguajes de programación que me permiten expandir mi conocimiento y habilidades
              en el campo de la tecnología.
            </p>
            <p className='text'>Mi experiencia incluye el desarrollo básico en React, donde he comenzado a
              construir aplicaciones web dinámicas y responsivas. Además, estoy familiarizado con el uso de Sass
              para mejorar la estructura y el diseño de mis proyectos, así como con bibliotecas como Bootstrap
              y Material-UI para acelerar el desarrollo y mejorar la experiencia del usuario.
            </p>
            <p className='text'>Además, estoy en proceso de aprender Python, un lenguaje versátil que estoy
              descubriendo a través de proyectos personales y tutoriales. Mi curiosidad y dedicación me han
              llevado a explorar cómo estos conocimientos pueden integrarse y aplicarse de manera creativa en mis
              futuros proyectos. Este portafolio es una muestra de mis primeros pasos y experimentos en el desarrollo
              de software. Aquí podrás encontrar algunos de mis proyectos, desde pequeñas aplicaciones React hasta
              exploraciones en Python y aplicaciones mejoradas con Sass y librerías como Bootstrap y Material-UI.
            </p>
          </div>
        </div>
        <div className='containerCenter'>
        <LogoAnimation/>

        </div>
      </div>
      
      

    </>
  )
}
