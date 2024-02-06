import React from "react";
import { Card, CardBody } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// Destructuration du props et encapsulation dans une balise Card pour l'affichage
const MoviesCard = (props) => {
    const {imgFilm = "image", titre = "titre film", description = "Commentaires", note = "0" } = props
    return (
        <div >
            <Card style={{width:'25rem', backgroundColor:'#00153e', color :'white'}}>
                <img style={{width:'25rem', height:'28rem'}} src = {imgFilm} alt="Echec"/> 
                <CardBody>
                    <h2>{titre}</h2>
                    <p>{description}</p>
                    <p>Note : {note}</p>
                </CardBody>
            </Card>
        </div>
    )

};
export default MoviesCard