import React, { Component } from 'react'
import axios from 'axios'

export default class AddProduct extends Component {
  
    constructor(props) {
		super(props)

		this.state = {
            Number: '',
      Name: '',
     
 
      
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
			.post('http://localhost:7260/api/addProduct', this.state,{
        method: "POST",
        body: JSON.stringify({
      
            Number:parseInt(this.state.Number) ,
            // userId: parseInt(inputs.userId),
            //parseInt(Date.parse(this.state.appDate))
            //parseInt(Date.parse(this.state.appTime)) 
            Name:this.state.ServerIp,
        
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
        const { Name, Number } = this.state
        return (
            <div className="addtimeWrapper">
            <form onSubmit={this.submitHandler} >





                <div className="row">
                    <label  className="labeldiv" for="">  Product Number </label>
                    <input
                     className="form-control"
                        type="number"
                        name="Number"
                        value={Number}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className="row">
                <label className="labeldiv">  Product Name </label>
                    <input
                     className="form-control ip-input-item"
                        type="text"
                        name="Name"
                        
                        value={Name}
                        onChange={this.changeHandler}
                    />
                </div>
               


         
      
                    <div className="row">
                    <button  className=" submitbtn" type="submit">Submit</button>
                    </div>
                
            </form>
        </div>
        )
    }
}
