import './App.css';
import { Image } from 'antd';
import pokemonLogoS from './assets/images/pokedex.png';
import { Button } from '@main';
import { log } from './utils';

function App() {
  log('Hello');
  return (
    <div className="App">
      <h1>Hello</h1>
      <Image width={200} src={pokemonLogoS} />
      <Button type="primary">Click me</Button>
    </div>
  );
}

export default App;
