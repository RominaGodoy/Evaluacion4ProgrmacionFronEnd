import React, {useState, useEffect} from 'react'
import RecomendacionFragments from "./Fragments/RecomendacionFragments"
import Mascarilla from "../assets/images/mascarilla.png"
const Recomendaciones = () => {
  return(
      <>
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h1>Recomendaciones</h1>
                  </div>
              </div>
              <div className="row">
                  <div className="col-6">
                      <RecomendacionFragments
                          titulo="Mascarilla 1"
                          tipoAlerta="alert-danger">
                          Contenido 1
                          <br/>
                          <img src={Mascarilla} alt="Mascarilla" />
                      </RecomendacionFragments>
                  </div>
                  <div className="col-6">
                      <RecomendacionFragments
                          titulo="Mascarilla 2"
                          tipoAlerta="alert-success">
                          Contenido 2
                          <br/>
                          <img src={Mascarilla} alt="Mascarilla" />
                      </RecomendacionFragments>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Recomendaciones