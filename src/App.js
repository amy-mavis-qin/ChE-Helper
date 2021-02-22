import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import UnitConversion from "./components/Pages/UnitConversion";
import AntoinesEquation from "./components/Pages/AntoinesEquation";
import MolarChemistry from "./components/Pages/MolarChemistry";
import Contact from "./components/Pages/Contact";
import ProblemReport from "./components/Pages/ProblemReport";
import Footer from './components/footer'


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
