import React, { Component } from 'react';
import SelectSearch from 'react-select-search';
import { antoine_constants } from '../../definitions/antoine_constants.js'
import { antoineCalculations } from "../../scripts/pressure_calculations.js"
import './Pages.css'

class AntoinesEquation extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            a:"A",
            b:"B",
            c:"C",
            variableInput: "",
            selectedConstant:"",
            constants:[],
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
        if (this.state.selectedConstant == ""){
            this.setState({result:antoineCalculations([this.state.a, this.state.b, this.state.c],this.state.variableInput)})
        } else {
            this.setState({result:antoineCalculations(this.state.selectedConstant,this.state.variableInput)})
        }
    }

    render() {
        return(
            <div>
                <div className='div-container'>
                    <div className="container-left">
                        Definition
                    </div>
                    <div className="container-right">
                        The Antoine equation is a class of semi-empirical correlations describing the relation between vapor pressure and variableInputerature for pure substances. The Antoine equation is derived from the Clausius–Clapeyron relation. The equation was presented in 1888 by the French engineer Louis Charles Antoine (1825–1897).
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
                        <div className='constant-selection'>
                            <div className='custom-input'>
                                <p className='antoines-constants'>Input Antoine's Constants</p>
                                <input className='single-input' placeholder="A" 
                                    onChange={this.handleInputChange.bind(this, "a")}/>
                                <input className='single-input' placeholder="B"
                                    onChange={this.handleInputChange.bind(this, "b")}/>
                                <input className='single-input' placeholder="C"
                                    onChange={this.handleInputChange.bind(this, "c")}/>
                            </div>
                            <div className='select-input'>
                                <SelectSearch
                                    options={antoine_constants}
                                    emptyMessage="Not found"
                                    placeholder="Or Select a Compound"
                                    onChange={e => {
                                        this.setState({selectedConstant: e})
                                        if(this.checkIfReady()){
                                            this.setState({calculatedDisabled:false})
                                        }}
                                    }
                                    value={this.state.constants}/>
                            </div>
                        </div>
                        <div className='first-input'>
                            <input className='variable-input' placeholder="Temperature or Pressure (Ex. 760mmhg)" onChange={e => {
                                this.setState({variableInput: e.target.value})
                                if(this.checkIfReady()){
                                    this.setState({calculatedDisabled:false})
                                }}
                            }/>
                            <button className="submit-button" onClick={this.handleCalculate} disabled={this.state.calculatedDisabled}>Calculate</button>
                        </div>
                        <div className="answer">
                            {this.state.result[1]=="mmhg" && this.state.result !== ""
                            ?<p className="dynamic-equation">The vapor pressure is {this.state.result} at {this.state.variableInput}</p>
                            :this.state.result[1]=="c" && this.state.result !== ""
                            ?<p className="dynamic-equation">The temperature is {this.state.result} at {this.state.variableInput}</p>
                            :console.log("")
                            }
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
}
 
export default AntoinesEquation;