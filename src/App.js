import './App.css';
import { useState } from 'react';
import movies from './movies'; //Tableau contenant la liste des movies
import MoviesList from './Components/MoviesList';
import Filtre from './Components/Filtre';
import { Button } from 'react-bootstrap';


function App() {
  /************déclaration des states****************** */

  //Déclaration d'un useState et initialisation avec le tableau movies importés
  const [listOfMovies, setListOfMovies] = useState(movies)
  console.log('Movies Data:', movies);
  //Déclaration des etats et initialisation de ces derniers à vide puis stockage de la valeur dans les variables filtreTitre et filtreTaux
  const [filtreTitre, setFilterTitle] = useState('');
  const [filtreTaux, setFilterRating] = useState('');
  console.log("vale", filtreTitre, filtreTaux);
  //Déclaration d'un useState, initialiser avec les attributs d'un movie à vide puis stockés dans une variable newMovie et modifiable via le setteur setNewMovie
  const [newMovie, setNewMovie] = useState({
    imgFilm: '',
    titre: '',
    description: '',
    note: 0,
  });
  //Récupére le dernier ID du tableau pour l'ajout du suivant
  const lastId = listOfMovies.length + 1

  /*********************Méthodes à appliquer************ */

  //Flitrage de la liste de fimls
  const filteredFilms = listOfMovies.filter((film) =>
    film.titre.toLowerCase().includes(filtreTitre.toLowerCase()) &&
    (filtreTaux === '' || film.note.toString() === filtreTaux)
  );

  //Fonction qui récupére et return la valeur actuelle du titre ou du taux
  const changefiltreTitre = (e) => {
    { console.log("titre actuel", filtreTitre, e.target.value) }
    setFilterTitle(e.target.value)
  }
  const changefiltreTaux = (e) => {
    { console.log("taux actuel", filtreTaux, e.target.value) }
    setFilterRating(e.target.value)
  }

  //Fonction pour ajouter un nouveau movie
  const addMovie = () => {
    setListOfMovies([...movies, newMovie]);
    console.log(<img src={newMovie.image} />)
    // Clear the form after adding a new movie
    setNewMovie({ imgFilm: '', titre: '', description: '', note: 0 });

  };




  //***************************RENDER / RENDU****************************
  return (
    <div className="App" style={{}}>
      <h1 style={{marginBottom: '20px'} }>MOVIES ON LINE</h1>


      {/*Nous passons au composant Filtre la fonction en props*/}
      <Filtre onTitreChange={changefiltreTitre} onTauxChange={changefiltreTaux} />


      {/*Ajout d'un nouveau movie via un formulaire*/}
      <div className='NewMovies'>
        <h4>Nouveau Film</h4>
        {/**Formulaire de saisie pour l'ajout des infos */}
        <form className='newForm'>
          
          <label className='lab'>Titre</label>
          <input
            type="text"
            value={newMovie.titre}
            onChange={(e) => setNewMovie({ ...newMovie, titre: e.target.value,id: lastId })}
            // onChange={(e) => setNewMovie({ ...newMovie, id: lastId})}
            required
          />
          <label className='lab'>Description </label>
          <input
            type="text"
            value={newMovie.description}
            onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
            required
          />
          <label className='lab'>Image:</label>
          <input
            type="text"
            value={newMovie.image}
            
            onChange={(e) => setNewMovie({ ...newMovie, imgFilm: e.target.value })}
            required
          />

          <label className='lab'>Note</label>
          <input
            type="number"
            style={{ width: "50px" }}
            value={newMovie.note}
            onChange={(e) => setNewMovie({ ...newMovie, note: parseFloat(e.target.value) })}
            required
          />

          <Button variant="primary"  type="button" onClick={addMovie}>
            Ajouter Movie
          </Button>
        </form>
      </div>


      {/* Appel du composant MoviesList avec comme props le tableau de movies filtrés */}
      <MoviesList list={filteredFilms} />
      {<img src="" />}

    </div>
  );
}
export default App;
