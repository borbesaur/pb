import logo from "./logo.svg";
import "./App.css";
import Home from "./components/homepage/Home";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
