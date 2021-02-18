import React, { Component } from 'react';
import SelectSearch from 'react-select-search';

class AntoinesEquation extends Component{
    state = {
        value: "",
    }
    render() {
        return(
            <div>
                <div className='definition'>
                    <div className="definition-left">
                        Definition
                    </div>
                    <div className="calculation-right">
                        The Antoine equation is a class of semi-empirical correlations describing the relation between vapor pressure and temperature for pure substances. The Antoine equation is derived from the Clausius–Clapeyron relation. The equation was presented in 1888 by the French engineer Louis Charles Antoine (1825–1897).
                    </div>
                </div>
                <div className='equation'>
                    <div className="equation-left">
                        Formulas
                    </div>
                    <div className="equation-right">
                        <p>\[log(p) = A - B/(C + T)\] </p>
                    </div>
                </div>
                <div className='calculator'>
                    <div className="calculator-left">
                        Calculator
                    </div>
                    <div className="calculator-right">
                        <div className='first-input'>
                            <input className='variable-input' placeholder="Temperature or Pressure (Ex. 760mmhg)" onChange={e => this.setState({value: e.target.value})}/>
                            {this.state.value}
                        </div>
                        <div className='constant-selection'>
                            <div className='custom-input'>
                                <p className='antoines-constants'>Antoine's Constants</p>
                                <input className='single-input' placeholder="A"/>
                                <input className='single-input' placeholder="B"/>
                                <input className='single-input' placeholder="C"/>
                            </div>
                            <div className='select-input'>
                                <p className='antoines-constants'>Select Input</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
}
 
export default AntoinesEquation;