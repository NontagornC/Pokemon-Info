import "./App.css";
import { Button, Image } from "antd";
import pokemonLogoS from "./assets/images/pokedex.png";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Image width={200} src={pokemonLogoS} />
      <Button type="primary">Click me</Button>
    </div>
  );
}

export default App;
