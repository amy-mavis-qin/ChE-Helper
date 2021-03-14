import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class Navigationbar extends Component {    
    state = { active: false }
    handleClick = () => {
        this.setState({ active: !this.state.active})
    }
    render(){
        return(
            <nav className="navbar">
                <Navbar bg="light" expand="lg">
                <Navbar.Text>ChE Helper</Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavDropdown title="General Calculations" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/Antoines_Equation">Antoine's Equation</NavDropdown.Item>
                        <NavDropdown.Item href="/Molar_Chemistry">Molar Chemistry</NavDropdown.Item>
                        <NavDropdown.Item href="/Unit_Conversion">Unit Conversion</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Thermodynamics" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/FirstLaw">First Law</NavDropdown.Item>
                        <NavDropdown.Item href="/SecondLaw">Second Law</NavDropdown.Item>
                        <NavDropdown.Item href="/Unit_Conversion">Unit Conversion</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </nav>
        )
    }
}

export default Navigationbar