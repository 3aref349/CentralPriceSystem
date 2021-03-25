import React, { Component } from 'react'
import axios from 'axios'
//import data from './geteventid'
import moment from 'moment' 
import toHHMMSS from 'time-input-js'


class Approve extends Component {
	constructor(props) {
		super(props)

		this.state = {
      creationdate: new Date(),
      appDate: moment().calendar(),
      appTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
    //   eventid:'',
    //   gasoline95: '',
    //   gasoline92: '',
    //   gasoline80: '',
    //   diesel: '',
      
		}
	}


    //  apiGet = () => {
    //     fetch("http://localhost:7258/api/geteventid")
    //       .then((response) => response.json())
    //       .then((json) => {
    //         console.log(json);
    //         eventid(json);
    //       });
    //   };

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

   
	submitHandler = e => {
    
    e.preventDefault()
    // const newEventId = data +1 ;
    // console.log(data)
    //const appDateInput= parseDate(this.state.appDate, 'MM/dd/yyyy');

		axios
			.post('http://localhost:7258/api/appPrice', this.state,{
        method: "POST",
        body: JSON.stringify({
      
          creationdate:this.state.creationdate ,
            // userId: parseInt(inputs.userId),
            //parseInt(Date.parse(this.state.appDate))
            //parseInt(Date.parse(this.state.appTime)) 
            appDate:this.state.appDate,
            
            appTime:  toHHMMSS(this.state.appTime) ,
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
    const { appDate, appTime } = this.state
    
		return (
			<div className="addtimeWrapper">
				<form onSubmit={this.submitHandler}>




        <div className="row">
						<input
						 className="form-control"
							type="date"
							name="appDate"
							value={appDate}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="row">
						<input
						 className="form-control"
							type="time"
							name="appTime"
							value={appTime}
							onChange={this.changeHandler}
						/>
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

export default Approve

