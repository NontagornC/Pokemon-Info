import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PokemonInfoPage, SearchPage } from '@main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="pokemon" element={<PokemonInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
