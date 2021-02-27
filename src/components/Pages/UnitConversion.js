import React, { Component } from 'react';
import { unitConvert, tempConvert } from "../../scripts/functions.js"

class UnitConversion extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            unitVariableInput: "",
            unitVariable:"",
            tempInput: "",
            tempInputUnit:"",
            unitDisabled:true,
            tempDisabled:true,
            resultUnit:"",
            resultTemp:"",
        }
        this.handleConvertUnit=this.handleConvertUnit.bind(this)
        this.handleConvertTemp=this.handleConvertTemp.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.checkIfUnitReady=this.checkIfUnitReady.bind(this)
        this.checkIfTempReady=this.checkIfTempReady.bind(this)
    }
    handleInputChange = (param, e) => {
        this.setState({ [param]: e.target.value })
        if(this.checkIfTempReady()){
            this.setState({tempDisabled:false})
        } else if(this.checkIfUnitReady()){
            this.setState({unitDisabled:false})
        }
    }     
    checkIfUnitReady = () => {
        if(this.state.unitVariableInput !== "" && this.state.unitVariable !== ""){
            return true;
        } else {
            return false;
        }
    }
    checkIfTempReady = () => {
        if(this.state.tempInput !== "" && this.state.tempInputUnit !== ""){
            return true;
        } else {
            return false;
        }
    }
    handleConvertUnit = () => {
        this.setState({resultUnit:unitConvert(this.state.unitVariableInput, this.state.unitVariable)})
        console.log(unitConvert(this.state.unitVariableInput, this.state.unitVariable))
    }
    handleConvertTemp = () => {
        this.setState({resultTemp:tempConvert(this.state.tempInput, this.state.tempInputUnit)})
    }

    render() {
        return(
            <div>
                <div className='div-container'>
                    <div className="container-left">
                        Unit Conversion
                    </div>
                    <div className="container-right">
                        Supported Conversion: Length, Area, Volume, Mass, Density, Force, Pressure, Energy, Power, Time
                        <div className='unit-conversion'>
                        <br />
                            <input className='unit-variable-input' placeholder="Input Value (Ex. 1 min)" onChange={e => {
                                this.setState({unitVariableInput: e.target.value}, () =>{
                                    if(this.checkIfUnitReady()){
                                        this.setState({unitDisabled:false})
                                    }
                                })
                            }
                            }/>
                            <input className='unit-input' placeholder="Target Unit (Ex. sec)" onChange={e => {
                                this.setState({unitVariable: e.target.value}, () =>{
                                    if(this.checkIfUnitReady()){
                                        this.setState({unitDisabled:false})
                                    }
                                })
                            }
                            }/>
                            <button className="submit-button" onClick={this.handleConvertUnit} disabled={this.state.unitDisabled}>Calculate</button>
                        </div>
                        <div className="answer">
                            {this.state.resultUnit}
                        </div>
                    </div>
                </div>
                <div className='div-container'>
                    <div className="container-left">
                        Temperature Conversion
                    </div>
                    <div className="container-right">
                    <div className='temp-conversion'>
                        <input className='unit-variable-input' placeholder="Input Value (Ex. 30 C)" onChange={e => {
                                this.setState({tempInput: e.target.value}, () => {
                                    if(this.checkIfTempReady()){
                                        this.setState({tempDisabled:false})
                                    }
                                })
                            }
                            }/>
                            <input className='unit-input' placeholder="Target Unit (Ex. F)" onChange={e => {
                                this.setState({tempInputUnit: e.target.value}, () => {
                                    if(this.checkIfTempReady()){
                                        this.setState({tempDisabled:false})
                                    }
                                })
                            }
                            }/>
                            <button className="submit-button" onClick={this.handleConvertTemp} disabled={this.state.tempDisabled}>Calculate</button>
                        </div>
                        <div className="answer">
                            {this.state.resultTemp}
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
}
 
export default UnitConversion;