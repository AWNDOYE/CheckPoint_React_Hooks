
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const NewMovie = (addMovie,lastId) => {

    // Déclaration du state
    const [currentMovie, setCurrentMovie] = useState({
        imgFilm: '',
        titre: '',
        description: '',
        note: 0,
    })


    //render
    return (
        <div className='NewMovies'>
            <h4>Nouveau Film</h4>
            <form className='newForm'>

                <label className='lab'>Titre</label>
                <input
                    type="text"
                    value={currentMovie.titre}
                    onChange={(e) => setCurrentMovie({ ...currentMovie, titre: e.target.value, id: lastId })}
                    required
                />
                <label className='lab'>Description </label>
                <input
                    type="text"
                    value={currentMovie.description}
                    onChange={(e) => setCurrentMovie({ ...currentMovie, description: e.target.value })}
                    required
                />
                <label className='lab'>Image:</label>
                <input
                    type="text"
                    value={currentMovie.image}

                    onChange={(e) => setCurrentMovie({ ...currentMovie, imgFilm: e.target.value })}
                    required
                />
                <label className='lab'>Note</label>
                <input
                    type="number"
                    style={{ width: "50px" }}
                    value={currentMovie.note}
                    onChange={(e) => setCurrentMovie({ ...currentMovie, note: parseFloat(e.target.value) })}
                    required
                />
                <Button type="button" onClick={addMovie}>
                    Ajouter Movie
                </Button>
            </form>
        </div>
    );
}

export default NewMovie;
