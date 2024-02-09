import React from "react";
import { useParams } from "react-router-dom";
import Navigation from './Navigation';
import movies from "../movies";

const Annonce = () => {
    //On récpére l'id passé en paramètre dans le movieCard.js
    let { id } = useParams()
    //On teste si l'id reçu en paramétre est présent dans les objects stockés
    const movie = movies.find((f) => f.id === parseInt(id, 10));


    return (
        <div className="annonce">
            <Navigation />
            <div className="annonce2" >
                  <h1 className="anonceH1" > <strong>{movie.titre}</strong></h1>
            <h4 className="anonceH4" >Détails du Film : {id}</h4>
            <div className="boxVideo" >
                <p className="anonceP" ><strong>DESCRIPTION :</strong> {movie.description}</p>
                <div className="video">{movie.video}</div>
            </div>
            </div>
          
        </div>
    )
}
export default Annonce