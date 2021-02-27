import React, { Component } from 'react';
import SelectSearch from 'react-select-search';
import { elements } from '../../definitions/element_mass_properties.js'
import { calculateMoles, calculateMass, calculateMolarMass, IUPACMolarMass } from '../../scripts/molar_calculations.js';
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
            elementDisabled:true,
            result:"",
            resultMolarMass:"",
        }
        this.handleCalculate=this.handleCalculate.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.checkIfReady=this.checkIfReady.bind(this)
        this.checkIfElementReady=this.checkIfElementReady.bind(this)
        this.handleFormula=this.handleFormula.bind(this)
    }
    handleInputChange = (param, e) => {
        this.setState({ [param]: e.target.value })
        if(this.checkIfReady()){
            this.setState({calculatedDisabled:false})
        } else if (this.checkIfElementReady()){
            this.setState({elementDisabled:false})
        }
    }     
    checkIfReady = () => {
        if((this.state.mass !== "" && this.state.molarMass !== "")||(this.state.mole !== "" && this.state.molarMass !== "") || (this.state.mole !== "" && this.state.mass !=="")){
            return true;
        } else {
            return false;
        }
    }

    checkIfElementReady = () => {
        if(this.state.element !== ""){
            return true;
        } else {
            return false;
        }
    }

    handleCalculate = () => {
        if (this.state.mass !== "" && this.state.molarMass !== "" && this.state.mole !== ""){
            this.setState({result:"Too many inputs!"})
        } else if (this.state.mole !== "" && this.state.molarMass !== ""){
           console.log(this.state.molarMass, this.state.mole)
            this.setState({result:calculateMass(this.state.molarMass, this.state.mole)})
        } else if (this.state.mole !== "" && this.state.mass !=="") {
         this.setState({result:calculateMolarMass(this.state.mole, this.state.mass)})
        } else if (this.state.mass !== "" && this.state.molarMass !== ""){
         this.setState({result:calculateMoles(this.state.molarMass, this.state.mass)})
        }
    }
    handleFormula = () => {
        this.setState({resultMolarMass:IUPACMolarMass(this.state.element)})
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
                                    onChange={e => {
                                        this.setState({mole: e.target.value}, () => {
                                            if(this.checkIfReady()){
                                                this.setState({calculatedDisabled:false})
                                            }
                                        })
                                    }}/>
                                <input className='single-input' placeholder="Molar Mass (g/mol)"
                                    onChange={e => {
                                        this.setState({molarMass: e.target.value}, () => {
                                            if(this.checkIfReady()){
                                                this.setState({calculatedDisabled:false})
                                            }
                                        })
                                    }}/>
                                <input className='single-input' placeholder="Mass (g)"
                                    onChange={e => {
                                        this.setState({mass: e.target.value}, () => {
                                            if(this.checkIfReady()){
                                                this.setState({calculatedDisabled:false})
                                            }
                                        })
                                    }}/>
                            </div>
                            <div className="molar-mass-calculation">
                            <p className='antoines-constants'>Molar Mass Calculator</p>
                                <input className='single-input' placeholder="Ex.(NaOH)" 
                                    onChange={e => {
                                        this.setState({element: e.target.value}, () => {
                                            if(this.checkIfElementReady()){
                                                this.setState({elementDisabled:false})
                                            }
                                        })
                                    }}/>
                                <button className="submit-button" onClick={this.handleFormula} disabled={this.state.elementDisabled}>Calculate</button>
                                {this.state.resultMolarMass}
                            </div>
                            <button className="submit-button" onClick={this.handleCalculate} disabled={this.state.calculatedDisabled}>Calculate</button>
                            {this.state.result}
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
}
 
export default MolarChemistry;