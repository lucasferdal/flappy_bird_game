import { useState, useRef, useEffect } from "react";
import Pajarito from "./componentes/Pajarito";
import Terreno from "./componentes/Terreno";
import './app.css'
import { render } from "@testing-library/react";

function App() {
  let numero = useRef(0)
  let cielo = useRef() 

  useEffect(() => {
    let cuanto = setInterval(() => {
      // console.log(numero.current)
      numero.current++
      
      render(<Terreno/>)
    }, 3000); 

    return () => clearInterval(cuanto)
  }, [numero]);

  return (
    <div>
      <div id='cielo' ref={cielo}>
        <Pajarito />
        <Terreno />
      </div>
      <div id='pasto'>

      </div>

    </div>
  );
}

export default App;
