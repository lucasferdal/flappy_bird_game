import React, { useRef, useEffect } from 'react';
import '../styles/Terreno.css';

const Terreno = () => {
    let tuboSuperior = useRef()
    let tuboInferior = useRef()

    let contador = useRef(0.1)

    let contadorPosicion = useRef()

    useEffect(() => {
        let generarTubos = setInterval(() => {

            tuboSuperior.current.style.height = Math.floor(Math.random() * (250 - 40) + 40) + 'px'
            tuboInferior.current.style.height = Math.floor(Math.random() * (250 - 40) + 40) + 'px'

        }, 1000);
        
        return () => clearInterval(generarTubos)
    });

    useEffect(() => {
        let cambiarPosicion = setInterval(() => {
            // if (contador.current <= 70) { 
            contadorPosicion.current++
            contador.current++

            tuboSuperior.current.style.right = contador.current + 'rem'
            tuboInferior.current.style.right = contador.current + 'rem'
            // }
        }, 100);
        
        return () => clearInterval(cambiarPosicion)
    });


    return (
        <div>
            <div className='tubos' id='tuboSuperior' ref={tuboSuperior}>
            </div>
            <div className='tubos' id='tuboInferior' ref={tuboInferior}>
            </div>
        </div>
    );
}

export default Terreno;