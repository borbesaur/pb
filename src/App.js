import "./App.css";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Lore from "./components/Lore/Lore";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="full-body">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/lore" component={Lore} />
      <Route exact path="/theTeam" component={Team} />
    </div>
  );
}

export default App;
