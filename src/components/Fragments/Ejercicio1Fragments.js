import React, {useState, useEffect} from 'react'

const Ejercicio1Fragments =({lista1, lista2, lista3, lista4, lista5 ,lista6, lista7,lista8 }) =>{
    return(
        <>
            <div className="list-group">
                <a href="https://pokemondb.net/pokedex/nidoqueen" className="list-group-item list-group-item-action list-group-item-primary">{lista1}</a>
                <a href="https://pokemondb.net/pokedex/raichu" className="list-group-item list-group-item-action list-group-item-secondary">{lista2}</a>
                <a href="https://pokemondb.net/pokedex/sandslash" className="list-group-item list-group-item-action list-group-item-success">{lista3}</a>
                <a href="https://pokemondb.net/pokedex/clefable" className="list-group-item list-group-item-action list-group-item-danger">{lista4}</a>
                <a href="https://pokemondb.net/pokedex/mewtwo" className="list-group-item list-group-item-action list-group-item-warning">{lista5}</a>
                <a href="https://pokemondb.net/pokedex/lapras" className="list-group-item list-group-item-action list-group-item-info">{lista6}</a>
                <a href="https://pokemondb.net/pokedex/mienfoo" className="list-group-item list-group-item-action list-group-item-light">{lista7}</a>
                <a href="https://pokemondb.net/pokedex/cubchoo" className="list-group-item list-group-item-action list-group-item-dark">{lista8}</a>
            </div>
        </>
    )
}
export default Ejercicio1Fragments
