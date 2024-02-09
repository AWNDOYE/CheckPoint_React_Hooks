
import { useState } from 'react';
import MoviesList from './MoviesList';
import NewMovie from './NewMovie';
import Filtre from './Filtre';
import movies from '../movies';//Tableau contenant la liste des movies


const Home = () => {

    //Déclaration d'un useState et initialisation avec le tableau movies importés
    const [listOfMovies, setListOfMovies] = useState(movies)
    console.log('Movies Data:', movies);

    //Déclaration des etats et initialisation de ces derniers à vide puis stockage de la valeur dans les variables filtreTitre et filtreTaux
    const [filtreTitre, setFilterTitle] = useState('');
    const [filtreTaux, setFilterRating] = useState('');

    //Déclaration d'un useState, initialiser avec les attributs d'un movie à vide puis stockés dans une variable newMovie et modifiable via le setteur setNewMovie
    const [currentMovie, setcurrentMovie] = useState({
        imgFilm: '',
        titre: '',
        description: '',
        note: 0,
    });
    //Récupére le dernier ID du tableau pour l'ajout du suivant
    const lastId = listOfMovies.length + 1


    //Fonction qui récupére et return la valeur actuelle du titre ou du taux
    const changefiltreTitre = (e) => {
        // { console.log("titre actuel", filtreTitre, e.target.value) }
        setFilterTitle(e.target.value)
    }
    const changefiltreTaux = (e) => {
        // { console.log("taux actuel", filtreTaux, e.target.value) }
        setFilterRating(e.target.value)
    }

    //Fonction pour ajouter un nouveau movie
    const addMovie = () => {
        setListOfMovies([...movies, currentMovie]);
        // Clear the form after adding a new movie
        setcurrentMovie({ imgFilm: "", titre: '', description: '', note: 0 });

    };


    //Flitrage de la liste de fimls
    const filteredFilms = listOfMovies.filter((film) =>
        film.titre.toLowerCase().includes(filtreTitre.toLowerCase()) &&
        (filtreTaux === '' || film.note.toString() === filtreTaux)
    );
    return (
        <div>
            {/*Nous passons au composant Filtre la fonction en props*/}
            <Filtre onTitreChange={changefiltreTitre} onTauxChange={changefiltreTaux} />

            {/*Nous passons au composant NewMovie la fonction en props*/}
            <NewMovie ajoutFilm={addMovie} lastID={lastId} />
            <MoviesList list={filteredFilms} />

        </div>
    );
}

export default Home;
