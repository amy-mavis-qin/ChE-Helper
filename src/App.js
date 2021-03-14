import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navigationbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import UnitConversion from "./components/Pages/General/UnitConversion";
import AntoinesEquation from "./components/Pages/General/AntoinesEquation";
import MolarChemistry from "./components/Pages/General/MolarChemistry";
import Contact from "./components/Pages/Contact";
import FirstLaw from "./components/Pages/Thermodynamics/FirstLaw";
import SecondLaw from "./components/Pages/Thermodynamics/SecondLaw";
import ProblemReport from "./components/Pages/ProblemReport";
import Footer from './components/footer'


function App() {
  return (
    <>
    <Router>
      <Navigationbar />
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Unit_Conversion" component={UnitConversion}/>
          <Route path="/Antoines_Equation" component={AntoinesEquation}/>
          <Route path="/Molar_Chemistry" component={MolarChemistry}/>
          <Route path="/SecondLaw" component={SecondLaw}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/FirstLaw" component={FirstLaw}/>
          <Route path="/Problem_Report" component={ProblemReport}/>
        </Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
      </Route>
    </Router>
    <div>
    <Footer />
    </div>
    </>
  );
}

export default App;
