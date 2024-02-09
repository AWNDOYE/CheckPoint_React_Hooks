import React from "react";
import MoviesCard from "./MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
// Déclaration de la fonction fléchée MoviesList qui reçoit en props la liste des movies
const MoviesList = ({list}) => {
    console.log("list:", list)
    return (
        <div style={{backgroundColor:'white', display: "flex",justifyContent: "space-between", flexWrap: "wrap", padding:'20px', margin: "50px", rowGap: "15px",columnGap:"10px", alignItems:'center' }} >
            {list.map((movie) =>
                <MoviesCard key={movie.id} {...movie}/> //Spreading ou <MoviesCard key={movie.id} id={movie.id} titre={movie.titre} description={movie.description} posterURL={movie.posterURL} note={movie.note} />
      
            )};
        </div>
    )
}
export default MoviesList