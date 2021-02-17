import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import UnitConversion from "./components/Pages/UnitConversion";
import AntoinesEquation from "./components/Pages/AntoinesEquation";
import MolarChemistry from "./components/Pages/MolarChemistry";
import Contact from "./components/Pages/Contact";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/Unit_Conversion" component={UnitConversion}/>
        <Route path="/Antoines_Equation" component={AntoinesEquation}/>
        <Route path="/Molar_Chemistry" component={MolarChemistry}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
