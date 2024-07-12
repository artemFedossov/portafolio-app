import React, { useEffect, useState } from 'react'
import data from '../data/logos.json'

export const LogoAnimation = () => {

    const [ logos, setLogos ] = useState([]);


    useEffect(() => {
        const createLogos = () => {
          const newLogos = [];
    
          // Recorrer los datos de logos y crear objetos de logo
          data.forEach(logo => {
            const newLogo = {
              x: Math.random() * (500 - 70),
              y: Math.random() * (500 - 70), 
              dx: (Math.random() - 0.5) * 10,
              dy: (Math.random() - 0.5) * 10, 
              size: 70,
              image: logo.img,
              id: logo.id,
              name: logo.name
            };
            newLogos.push(newLogo);
          });
    
          setLogos(newLogos); // Añade los nuevos logos al estado
        };
    
        // Crear inicialmente los logos
        createLogos();
    
        // Mover los logos cada 30ms
        const interval = setInterval(() => {
          setLogos(prevLogos =>
            prevLogos.map(logo => {
              let newX = logo.x + logo.dx;
              let newY = logo.y + logo.dy;
              let newDx = logo.dx;
              let newDy = logo.dy;
    
              // Verifica los bordes derecho e izquierdo
              if (newX < 0 || newX + logo.size > 500) {
                newDx = -newDx;
              }
              // Verifica los bordes superior e inferior
              if (newY < 0 || newY + logo.size > 500) {
                newDy = -newDy;
              }
    
              // Limitar posición X dentro del contenedor
              newX = Math.max(0, Math.min(newX, window.innerWidth - logo.size));
    
              // Limitar posición Y dentro del contenedor
              newY = Math.max(0, Math.min(newY, window.innerHeight - logo.size));
    
              return {
                ...logo,
                x: newX,
                y: newY,
                dx: newDx,
                dy: newDy
              };
            })
          );
        }, 30);
    
        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
      }, []);
    return (
        <div className="conteinerAnimation">
      {logos.map(logo => (
        <img
          key={logo.id} // Usar el id único como clave
          src={logo.image} // Fuente del logo desde los datos del JSON
          alt="Logo" // Texto alternativo para accesibilidad
          className="logoAnimation" // Clase para aplicar estilos a cada logo
          style={{
            width: logo.size,
            height: logo.size,
            left: logo.x,
            top: logo.y,
            position: 'absolute' // Asegura que el logo se posicione correctamente
          }}
        />
      ))}
    </div>
      );
}
