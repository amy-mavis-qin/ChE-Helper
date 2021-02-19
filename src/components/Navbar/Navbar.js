import React, { Component } from 'react';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { MenuItems } from "./MenuItems";
import "./Navbar.css"
import { Button } from "../Button"
import { Link } from "react-router-dom";

class Navbar extends Component {    
    state = { active: false }
    handleClick = () => {
        this.setState({ active: !this.state.active})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">ChE Helper<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key = {index}>
                                <a className={item.cName} href={item.url} style={item.url==window.location.pathname ? { borderBottom: "2px solid #ae9dcf" } : { textDecoration: "none" }}>
                                    {item.title}
                               </a>
    
                            </li>
                        )
                    })}
                </ul>
                <Link to="/Problem_Report">
                <Button>Report a Problem</Button>
                </Link>
            </nav>
        )
    }
}

export default Navbar