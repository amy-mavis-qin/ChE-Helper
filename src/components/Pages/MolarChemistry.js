import React, { Component } from 'react';
import SelectSearch from 'react-select-search';
import { elements } from '../../definitions/element_mass_properties.js'
import { calculateMoles, calculateMass, calculateMolarMass } from '../../scripts/molar_calculations.js';
import './Pages.css'

class MolarChemistry extends Component{
    constructor(props){
        super(props)
        this.state = {
            mole:"",
            molarMass:"",
            mass:"",
            element:"",
            calculatedDisabled:true,
            result:"",
        }
        this.handleCalculate=this.handleCalculate.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.checkIfReady=this.checkIfReady.bind(this)
    }
    handleInputChange = (param, e) => {
        this.setState({ [param]: e.target.value })
        if(this.checkIfReady()){
            this.setState({calculatedDisabled:false})
        }
    }     
    checkIfReady = () => {
        if((this.state.a !== "A" && this.state.b !== "B" && this.state.c !== "C") || this.state.selectedConstant !== ""){
            return true;
        } else {
            return false;
        }
    }
    handleCalculate = () => {
        if (this.state.mass !== "" && this.state.molarmass !== "" && this.state.mole !== ""){
            this.setState({result:"Too many inputs!"})
        } else if (this.state.mole !== "" && this.state.molarMass !== ""){
           console.log(this.state.molarMass, this.state.mole)
            this.setState({result:calculateMass(this.state.molarMass, this.state.mole)})
        } else if (this.state.mole !== "" && this.state.mass !=="") {
         this.setState({result:calculateMolarMass(this.state.mole, this.state.mass)})
        } else if (this.state.mass !== "" && this.state.molarmass !== ""){
         this.setState({result:calculateMoles(this.state.molarMass, this.state.mass)})
        }
    }

    render() {
        return(
            <div>
                <div className='div-container'>
                    <div className="container-left">
                        Molar Calculator
                    </div>
                    <div className="container-right">
                        <div className='constant-selection'>
                            <div className='custom-input'>
                                <p className='antoines-constants'>Input Molar Quantities</p>
                                <input className='single-input' placeholder="Moles" 
                                    onChange={this.handleInputChange.bind(this, "mole")}/>
                                <input className='single-input' placeholder="Molar Mass (g/mol)"
                                    onChange={this.handleInputChange.bind(this, "molarMass")}/>
                                <input className='single-input' placeholder="Mass (g)"
                                    onChange={this.handleInputChange.bind(this, "mass")}/>
                            </div>
                            <div className="molar-mass-calculation">
                            <p className='antoines-constants'>Molar Mass Calculator</p>
                                <input className='single-input' placeholder="Ex.(NaOH)" 
                                    onChange={this.handleInputChange.bind(this, "element")}/>
                            </div>
                            <button className="submit-button" onClick={this.handleCalculate} disabled={this.state.calculatedDisabled}>Calculate</button>
                        </div>
                        {this.state.result}
                    </div>
                </div>
            </div>
        )    
    }
}
 
export default MolarChemistry;