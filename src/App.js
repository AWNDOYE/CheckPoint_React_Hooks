import './App.css';
import { Routes, Route} from 'react-router-dom';
import Annonce from './Components/Annonce';
import Home from './Components/Home';

function App() {

  //***************************RENDER / RENDU****************************
  return (
    <div className="App" style={{}}>
      <h1 style={{ marginBottom: '20px', fontSize:'500%' }}>MOVIES ON LINE</h1>
    {/* 1ere Route par défaut - 2eme Route affiche le composant annonce avec l'id du flm en parametre */}
      <Routes>
        <Route path="/"  exact element={<Home/>} />  
        <Route path="/annonce/:id" element={<Annonce />} />
      </Routes>
    </div>
  );
}
export default App;
