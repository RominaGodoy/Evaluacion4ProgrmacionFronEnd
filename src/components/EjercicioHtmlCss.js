import React, {useState, useEffect} from 'react'
import Ejercicio1Fragments from "./Fragments/Ejercicio1Fragments"

const EjercicioHtmlCss = () => {
    return(
        <>
            <h1>¡Lista de pokemones?</h1>
            <br/>
            <div className="list-group">
                <Ejercicio1Fragments
            lista1="Descripción Nidoqueen"
            lista2="Descripción Raichu"
            lista3="Descripción Sandslash"
            lista4="Descripción Clefable"
            lista5="Descripción Mewtwo"
            lista6="Descripción Lapras"
            lista7="Descripción Mienfoo"
            lista8="Descripción Cubchoo"
            />
            </div>
        </>
    )
}

 export default EjercicioHtmlCss

