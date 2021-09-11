import "./App.css";
import Home from "./components/RAMMM/Home";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Lore from "./components/Lore/Lore";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/lore" component={Lore} />
    </div>
  );
}

export default App;
