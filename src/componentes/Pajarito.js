import React, { useRef, useEffect, useState } from 'react';
import '../styles/Pajarito.css'

const Pajarito = () => {
    let jugador = useRef()

    let refX = useRef(1)
    let refY = useRef(1)

    window.addEventListener("keydown", (e) => {
        console.log(e.key)

        switch (e.key) {
            case "ArrowRight":
                refX.current++
                jugador.current.style.left = refX.current + 'rem'
                break
            case "ArrowLeft":
                refX.current--
                jugador.current.style.left = refX.current + 'rem'
                break
            case "ArrowUp":
                refY.current = refY.current - 7
                jugador.current.style.top = refY.current + 'rem'
                break
            case "ArrowDown":
                refY.current = refY.current + 2
                jugador.current.style.top = refY.current + 'rem'
                break
        }
    })
    
    useEffect(() => {
        let intervalo = setInterval(() => {
            if (refY.current <= 35) {
                refY.current++
                jugador.current.style.top = refY.current + 'rem'
            }
        }, 40)
        
        return () => clearInterval(intervalo)
    }, [refY]);

    return (
        <div>
            <div className="jugador" id='jugador' ref={jugador}>
            </div>
        </div>
    );
}

export default Pajarito;