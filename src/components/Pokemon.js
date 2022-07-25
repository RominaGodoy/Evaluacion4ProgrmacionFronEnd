 import React, {useState, useEffect} from 'react'
 import Articuno from '../assets/images/Pokemon1_articulo.jpg'
 import Kabutops from '../assets/images/Pokemon2_kabutops.jpg'
 import Flaaffy from '../assets/images/Pokemon3_articulo.jpg'
 import PokemonFragments from "./Fragments/PokemonFragments"

 const Pokemon = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Pokedex!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <PokemonFragments
                            textoDescripcion={"When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep."}
                            imagen={Articuno}
                            titulo="Articuno"
                            href="PokemonEnlazado"
                            href2="VideoPokemon"
                            />
                    </div>
                    <div className="col-4">
                        <PokemonFragments
                            textoDescripcion={"Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."}
                            imagen={Kabutops}
                            titulo="Kabutop"
                            href="PokemonEnlazado"
                            href2="VideoPokemon"
                            />
                    </div>
                    <div className="col-4">
                        <PokemonFragments
                            textoDescripcion={"Its fleece quality changes to generate strong static electricity with a small amount of wool. The bare, slick parts of its hide are shielded against electricity."}
                            imagen={Flaaffy}
                            titulo="Flaaffy"
                            href="PokemonEnlazado"
                            href2="VideoPokemon"
                        />
                    </div>
                </div>
            </div>
        </>

    )
 }

 export default Pokemon