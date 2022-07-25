import React, {useState, useEffect} from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Pokemon from "./components/Pokemon"
import Recomendaciones from "./components/Recomendaciones"
import EjercicioHtmlCss from "./components/EjercicioHtmlCss";

 const  App = ()  => {
  return (
        <Routes>
          <Route path='/' element={<Pokemon/>} />
          <Route path='/pokedex' element={<Pokemon/>}/>
            <Route path='/recomienda' element={<Recomendaciones/>} />
            <Route path='/ejercicio1' element ={<EjercicioHtmlCss/>} />
        </Routes>
  );
}

export default App;


