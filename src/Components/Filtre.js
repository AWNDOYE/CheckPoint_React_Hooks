import React from 'react';
//la fonction Filtre reçoit en props les 2 fonctions qui sont éxécutées uniquement lors de l'évzénement change
const Filtre = ({ onTitreChange, onTauxChange  }) => {
  return (
    <div className="filter" style={{margin:'20px'}}>
      <input
        type="text"
        placeholder="Trier par Titre"
        // le changement de la valeur du champ fait appel à la fonction titreChange est appellée et exécutée
        onChange={onTitreChange}
      />
      <input
        type="number"
        placeholder="Trier par Note"
        // le changement de la valeur du champ fait appel à la fonction tauxChange est appellée et exécutée
        onChange={onTauxChange}
      />
    </div>
  );
};

export default Filtre;