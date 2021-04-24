import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import '../Pages.css'
import { Dropdown, DropdownButton, Form, FormControl} from 'react-bootstrap';
import '../../AnswerLog.js';

class FirstLaw extends Component{
  constructor(props){
    super(props)
    this.state = {
      constant_pressure_temperature:false,
      constant_pressure:false,
      constant_volume:false,
      calculateWhat: "",
      P:0,
      dP:0,
      V:0,
      dV:0,
      dH:0,
      dU:0,
      q:0,
      w:0,
      c:0,
      T:0,
      dT:0,
      cp1:0,
      cp2:0,
      result:0,
      showResult:false,
    }
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handlePressureToggle=this.handlePressureToggle.bind(this)
    this.handleVolumeToggle=this.handleVolumeToggle.bind(this)
    this.handlePressureTemperatureToggle=this.handlePressureTemperatureToggle.bind(this)
    this.showInputFields=this.showInputFields.bind(this)
    this.toShow=this.toShow.bind(this)
    this.handleCalculate=this.handleCalculate.bind(this)
}

handleInputChange = (param, e) => {
  this.setState({ [param]: e.target.value })
}

handlePressureTemperatureToggle() {
  this.setState({ constant_pressure_temperature: !this.state.constant_pressure_temperature });
} 
 
handlePressureToggle() {
    this.setState({ constant_pressure: !this.state.constant_pressure });
} 
handleVolumeToggle() {
    this.setState({ constant_volume: !this.state.volume });
}

showInputFields(value){
  this.setState({ showResults: false })
  if(value=="work"){
    if(this.state.constant_pressure_temperature || this.state.constant_pressure ){
      this.setState({ calculateWhat: "-pdv" })
    } else if (this.state.constant_volume){
      this.setState({ calculateWhat: "0w" })
    }
  } else if (value=="enthalpy"){
    if(this.state.constant_pressure_temperature){
      this.setState({ calculateWhat: "q" })
    } else if (this.state.constant_pressure){
      this.setState({ calculateWhat: "qp" })
    } else if (this.state.constant_volume){
      this.setState({ calculateWhat: "qv" })
    }
  } else if (value=="U"){
    if(this.state.constant_pressure_temperature || this.state.constant_pressure){
      this.setState({ calculateWhat: "q+w" })
    } else if (this.state.constant_volume){
      this.setState({ calculateWhat: "qv+vdp" })
    }
  } else {
    return null
  }
}

toShow() {
  if(this.state.calculateWhat=="-pdv"){
    return(
      <div>
        <input className='single-input' placeholder='Pressure' onChange={this.handleInputChange.bind(this, "P")} />
        <input className='single-input' placeholder='Change in volume' onChange={this.handleInputChange.bind(this, "dV")} />
      </div>);
  } else if (this.state.calculateWhat=="0w"){
    return(
      <p>0 work is done at constant volume.</p>
    )
  } else if (this.state.calculateWhat=="q"){
    return(
      <p>Enthalpy = q at constant temperature and pressure.</p>
    )
  } else if (this.state.calculateWhat=="qp"){
    return(
      <div>
        <input className='single-input' placeholder='Initial Heat Capacity' onChange={this.handleInputChange.bind(this, "cp1")} />
        <input className='single-input' placeholder='Final Heat Capacity' onChange={this.handleInputChange.bind(this, "cp2")} />
      </div>);
  } else if (this.state.calculateWhat=="qv"){
    return(
      <div>
        <input className='single-input' placeholder='Heat Capacity' onChange={this.handleInputChange.bind(this, "c")} />
        <input className='single-input' placeholder='Change in Temperature' onChange={this.handleInputChange.bind(this, "dT")} />
      </div>
    )
  } else if (this.state.calculateWhat=="q+w"){
    return(
      <div>
        <input className='single-input' placeholder='Heat' onChange={this.handleInputChange.bind(this, "q")} />
        <input className='single-input' placeholder='Pressure' onChange={this.handleInputChange.bind(this, "P")} />
        <input className='single-input' placeholder='Change in volume' onChange={this.handleInputChange.bind(this, "dV")} />
      </div>
    )
  } else if (this.state.calculateWhat=="qv+vdp"){
    return(
      <div>
        <input className='single-input' placeholder='Heat Capacity' onChange={this.handleInputChange.bind(this, "c")} />
        <input className='single-input' placeholder='Change in Temperature' onChange={this.handleInputChange.bind(this, "dT")} />
        <input className='single-input' placeholder='Volume' onChange={this.handleInputChange.bind(this, "V")} />
        <input className='single-input' placeholder='Change in Pressure' onChange={this.handleInputChange.bind(this, "dP")} />
      </div>
    )
  }
}

handleCalculate(){
  this.setState({ showResult: true })
  console.log(this.state.showResult)
  if(this.state.calculateWhat=="-pdv"){
    return(
      this.setState({ result:this.state.P *-1 * this.state.dV})
    );
  } else if (this.state.calculateWhat=="qp"){
    return(
      this.setState({ result:this.state.cp1 * this.state.cp2})
      );
  } else if (this.state.calculateWhat=="qv"){
    return(
      this.setState({ result:this.state.q * this.state.V})
    )
  } else if (this.state.calculateWhat=="q+w"){
    return(
      this.setState({ result:this.state.q + this.state.w})
    )
  } else if (this.state.calculateWhat=="qv+vdp"){
    return(
      this.setState({ result:(this.state.q * this.state.V)+(this.state.V * this.state.dP)})
    )
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
                      <label class="checkboxes">Constant Pressure and Temperature
                        <input type="checkbox" onClick={(this.handlePressureTemperatureToggle)}/>
                        <span class="checkmark"></span>
                      </label>
                      <label class="checkboxes">Constant Volume
                        <input type="checkbox" onClick={(this.handleVolumeToggle)}/>
                        <span class="checkmark"></span>
                      </label>
                      <label class="checkboxes">Constant Pressure
                        <input type="checkbox" onClick={(this.handlePressureToggle)}/>
                        <span class="checkmark"></span>
                      </label>
                      </div>
                      <div className="container-r3">
                        <Dropdown >
                        <Dropdown.Toggle variant="success" >
                          Find
                        </Dropdown.Toggle>
                          <Dropdown.Menu title="Calculate" className="dropdown-links">
                            <Dropdown.Item value="work" onClick={( this.showInputFields.bind(this, "work"))}>Work</Dropdown.Item>
                            <Dropdown.Item value="enthalpy" onClick={( this.showInputFields.bind(this, "enthalpy"))}>Enthalpy</Dropdown.Item>
                            <Dropdown.Item value="U" onClick={( this.showInputFields.bind(this, "U"))}>Internal Energy</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="container-r4">
                      {this.toShow()}
                      <button className="submit-button" onClick={this.handleCalculate}>Calculate</button>
                      <br />
                      {this.state.result ? this.state.showResult=true : this.state.showResult=false}
                      </div>
                    </div>
                </div>
        </div>
    )    
  }
}

export default FirstLaw;