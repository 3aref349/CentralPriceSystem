import React, { Component } from 'react'
import axios from 'axios'

//import data from './geteventid'


import './form.css';
const cidrRegex = require("cidr-regex");
export default class AddHo extends Component {
    constructor(props) {
		super(props)

		this.state = {
            ServerName: '',
      ServerIp: '',
      userName: '',
       Password:'',
    //   gasoline95: '',
    //   gasoline92: '',
    //   gasoline80: '',
    //   diesel: '',
      
		}
    }
    
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

   
	submitHandler = e => {
    
    e.preventDefault()
    // const newEventId = data +1 ;
    // console.log(data)
    //const appDateInput= parseDate(this.state.appDate, 'MM/dd/yyyy');

		axios
			.post('http://localhost:7260/api/addHo', this.state,{
        method: "POST",
        body: JSON.stringify({
      
            ServerName:this.state.ServerName ,
            // userId: parseInt(inputs.userId),
            //parseInt(Date.parse(this.state.appDate))
            //parseInt(Date.parse(this.state.appTime)) 
            ServerIp:this.state.ServerIp,
          
            userName:  this.state.userName ,
            Password:this.state.Password
            //   eventid: parseInt(newEventId),
            // gasoline95: parseInt(this.state.gasoline95),
            // gasoline92: parseInt(this.state.gasoline92),
            // gasoline80: parseInt(this.state.gasoline80),
            // diesel:parseInt (this.state.diesel),
                
                // userId: parseInt(inputs.userId),
        }),
        headers: {
        
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
    render() {

        const { ServerName, ServerIp ,userName,Password} = this.state
        return (
            <div className="addtimeWrapper">
            <form onSubmit={this.submitHandler} >




    <div className="row">
        <div className="labeldiv">
        <label for=""> Enter Server Name </label>
        </div>
        <div className="inputdiv">
   <input
                     className="form-control"
                        type="text"
                        name="ServerName"
                       value={ServerName}
                        onChange={this.changeHandler}
                    /> 
   </div>
                   
                </div>
                <div className="row">
                <div className="labeldiv">
                    <label > Enter Server IP </label> 
                    </div>
                    <div className="inputdiv">
                    <input
                     className="form-control"
                        type="text"
                        name="ServerIp"
                        value={ServerIp}
                        onChange={this.changeHandler}
                    />
                    </div>
                 
                </div>
                <div className="row">
                <div className="labeldiv">
                    <label for=""> Enter Username </label> 
                    </div>
                    <div className="inputdiv">
             <input
                     className="form-control "
                        type="text"
                        name="userName"
                        
                        value={userName}
                        onChange={this.changeHandler}
                    />
             </div>
                   
                </div>
               
                <div className="row">
                <div className="labeldiv">
                    <label for=""> Enter Password </label> 
                    </div>
              <div className="inputdiv">
              <input
                     className="form-control"
                        type="text"
                        name="Password"
                        value={Password}
                        onChange={this.changeHandler}
                    />
              </div>
                   
                </div>

                {/* <div>
                    <input
                         type="number" 
                       
                        name="gasoline95"
                        value={gasoline95}
                        onChange={this.changeHandler}
                    />
                </div>
      <div>
                    <input
                        type="number" 
                       
                        name="gasoline92"
                        value={gasoline92}
                        onChange={this.changeHandler}
                    />
                </div>
      
                <div>
                    <input
                         type="number" 
                       
          name="gasoline80"
                        value={gasoline80}
                        onChange={this.changeHandler}
                    />
                </div>
                <div>
                    <input
                         type="number" 
                         min="4.50"
                          max="9.90" 
          name="diesel"
                        value={diesel}
                        onChange={this.changeHandler}
                    />
                </div> */}
                    <div className="row">
                    <button  className=" submitbtn" type="submit">Submit</button>
                    </div>
                
            </form>
        </div>
        )
    }
}
