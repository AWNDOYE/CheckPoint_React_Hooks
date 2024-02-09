import React from "react";
import { Card, CardBody } from "react-bootstrap";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// Destructuration du props et encapsulation dans une balise Card pour l'affichage
const MoviesCard = (props) => {
    const { imgFilm = "image", titre = "titre film", note = 0 } = props
    //alert(id)
    return (
        <>
            <Card style={{ width: '25rem', backgroundColor: '#00153e', color: 'white' }}>
                <img style={{ width: '25rem', height: '28rem' }} src={imgFilm} alt="Echec" />
                <CardBody>
                    <h3>{titre}</h3>
                    {/* <p>{description}</p> */}
                    <div style={{display:'flex', justifyContent:'space-between', width:'100%', padding:'5%'}}>
                        <p ><strong>Note : {note}</strong></p> 
                        {/* On récupére l'ID du film pour lequel on souhaite visualiser l'annonce, 
                    puis on ajoute cet ID à l'url qui est linké au composant Annonce */}
                        <Link to={`/Annonce/${props.id}`} style={{ color: 'gold'}} ><strong>Voir l'Annonce</strong></Link>
                    </div>

                </CardBody>
            </Card>
        </>
    )

};
export default MoviesCard