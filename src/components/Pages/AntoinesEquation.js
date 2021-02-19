import React, { Component } from 'react';
import SelectSearch from 'react-select-search';
import { fuzzysearch } from 'fuzzysearch';
import { antoine_constants } from './antoine_constants.js'
import { antoineCalculations } from "../../scripts/scripts.js"

class AntoinesEquation extends Component{
    state = {
        value: "",
        a:"",
        b:"",
        c:"",
        constants:[],
    }
    handleInputChange = (param, e) => {
        this.setState({ [param]: e.target.value })
     }


    render() {
        return(
            <div>
                <div className='div-container'>
                    <div className="container-left">
                        Definition
                    </div>
                    <div className="container-right">
                        The Antoine equation is a class of semi-empirical correlations describing the relation between vapor pressure and temperature for pure substances. The Antoine equation is derived from the Clausius–Clapeyron relation. The equation was presented in 1888 by the French engineer Louis Charles Antoine (1825–1897).
                    </div>
                </div>
                <div className='div-container'>
                    <div className="container-left">
                        Formulas
                    </div>
                    <div className="container-right">
                        <img className='equation' src="/images/antoineConstant.svg" alt="antoineConstant"/>
                    </div>
                </div>
                <div className='div-container'>
                    <div className="container-left">
                        Calculator
                    </div>
                    <div className="container-right">
                        <div className='first-input'>
                            <input className='variable-input' placeholder="Temperature or Pressure (Ex. 760mmhg)" onChange={e => this.setState({value: e.target.value})}/>
                            {this.state.value}
                        </div>
                        <div className='constant-selection'>
                            <div className='custom-input'>
                                <p className='antoines-constants'>Antoine's Constants</p>
                                <input className='single-input' placeholder="A" 
                                    value={this.state.a}
                                    onChange={this.handleInputChange.bind(this, "a")}/>
                                <input className='single-input' placeholder="B"
                                    value={this.state.b}
                                    onChange={this.handleInputChange.bind(this, "b")}/>
                                <input className='single-input' placeholder="C"
                                    value={this.state.c}
                                    onChange={this.handleInputChange.bind(this, "c")}/>
                            </div>
                            <div className='select-input'>
                                <SelectSearch
                                    options={antoine_constants}
                                    emptyMessage="Not found"
                                    placeholder="Or Select a Compound"
                                    onChange={(value) => this.handleInputChange.bind(value,"compound")}/>
                            </div>
                            {console.log(this.state.compound)}
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
}
 
export default AntoinesEquation;