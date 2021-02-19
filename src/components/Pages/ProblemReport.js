import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import { Button } from "../Button"
 
class ProblemReport extends Component{
   state = {
      name: "",
      email: "",
      message: "",
   }

   handleSubmit(e) {
      e.preventDefault()
      const { name, email, message } = this.state
      let templateParameters = {
         from_name: email,
         to_name: "amyqin501@gmail.com",
         message_html: message,
      }

      emailjs.send(
         "service_bs9v68f",
         "template_dvsw3nn",
         templateParameters,
         "user_Q1GPbAAFBAvoe12hZ4gPS"
      )
      this.resetForm()
   }
   resetForm() {
      this.setState({
         name: "",
         email: "",
         message: "",
      })
   }
   handleInputChange = (param, e) => {
      this.setState({ [param]: e.target.value })
   }
   render(){
      return (
         <div>
            <div className="report-problem">
            <form className="contact-form" id={this.props.id} name={this.props.name} method={this.props.method} action={this.props.action}>
                <textarea
                id="name"
                className="name"
                name="name"
                onChange={this.handleInputChange.bind(this, "name")}
                value={this.state.name}
                placeholder="Name"
                required
                rows={1}
                />
                <textarea
                id="email"
                className="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange.bind(this, "email")}
                placeholder="Email address"
                required
                rows={1}
                />
                <br />
                <textarea
                id="message"
                className="message"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange.bind(this, "message")}
                placeholder="Report a problem"
                required
                />
                <Button value="Send" onClick={this.handleSubmit.bind(this)}>Send</Button>
            </form>
            </div>
    </div>  
      );
   }
}
 
export default ProblemReport;