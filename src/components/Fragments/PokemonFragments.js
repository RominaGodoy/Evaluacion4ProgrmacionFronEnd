import React,{useState, useEffect} from 'react'
import Articuno from "../../assets/images/Pokemon1_articulo.jpg";


const PokemonFragments =({imagen, titulo, textoDescripcion, href, href2}) =>{
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text"> {textoDescripcion}</p>
                    <br/> <a href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_legendario" class="btn btn-primary">{href}</a> <br/>
                    <br/> <a href="https://www.youtube.com/watch?v=W6lhndyBLgQ" class="btn btn-primary">{href2}</a><br/>
                </div>
            </div>

        </>
    )
}

export default PokemonFragments