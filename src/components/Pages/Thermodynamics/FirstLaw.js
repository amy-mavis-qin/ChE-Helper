import React, { Component } from 'react';
import '../Pages.css'
import { Dropdown, DropdownButton, Form, FormControl} from 'react-bootstrap' 
import { isObjectBindingPattern } from 'typescript';

class FirstLaw extends Component{
  constructor(props){
    super(props)
    this.state = {
      constant_pressure:false,
      constant_temperature:false,
      P:0,
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handlePressureToggle=this.handlePressureToggle.bind(this)
    this.handleTemperatureToggle=this.handleTemperatureToggle.bind(this)
    this.showWorkInputFields=this.showWorkInputFields.bind(this)
}

handleInputChange = (param, e) => {
  this.setState({ [param]: e.target.value })
}
 
handlePressureToggle() {
    this.setState({ constant_pressure: !this.state.constant_pressure });
} 
handleTemperatureToggle() {
    this.setState({ constant_temperature: !this.state.constant_temperature });
}

showWorkInputFields(){
  if(this.state.constant_pressure==true && this.state.constant_temperature==true){
    return
    <div>
      <input className='single-input' placeholder='pressure' onChange={this.handleInputChange.bind(this, "P")} />
      <input className='single-input' placeholder='change in volume' onChange={this.handleInputChange.bind(this, "V")} />
    </div>;
  } else if(this.state.constant_pressure==false && this.state.constant_temperature==true){
    
  } else if(this.state.constant_pressure==true && this.state.constant_temperature==false){
    
  }
}
render() {
    return(
        <div>
            <div className='div-container'>
                    <div className="container-left">
                        Closed System, P-V Work
                    </div>
                    <div className="container-right-row">
                      <div className="container-r1">
                      <label class="checkboxes">Constant Temperature
                        <input type="checkbox" onClick={(this.handleTemperatureToggle)}/>
                        <span class="checkmark"></span>
                      </label>
                      <label class="checkboxes">Constant Pressure
                        <input type="checkbox" onClick={(this.handlePressureToggle)}/>
                        <span class="checkmark"></span>
                      </label>
                      </div>
                      <div className="container-r3">
                        <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Calculate
                        </Dropdown.Toggle>
                          <Dropdown.Menu title="Calculate">
                            <Dropdown.Item onClick={( this.showWorkInputFields)}>Work</Dropdown.Item>
                            <Dropdown.Item >Enthalpy</Dropdown.Item>
                            <Dropdown.Item >Internal Energy</Dropdown.Item>
                            <Dropdown.Item >Heat</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                </div>
        </div>
    )    
}
}
 
export default FirstLaw;