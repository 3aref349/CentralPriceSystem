import React, { Component } from 'react'
import axios from 'axios'
//import data from './geteventid'
import moment from 'moment' 
import toHHMMSS from 'time-input-js'
import { getJSON } from 'jquery';
import SelectEventId from './SelectEventid';
const LastEvent = require('./getlastEventid');
const dboperations = require('./getlastEventid');


class AddNewPrices extends Component {

    
	constructor(props) {
		super(props)

		this.state = {
    
      eventid:'',
      gasoline95: '',
      gasoline92: '',
      gasoline80: '',
      diesel: '',
      
    }
   
	}
     
  // movie1 =(x)=>{
  //   fetch('http://localhost:7258/api/geteventid').then((apiData) => {
  //     x = apiData;
  //     console.log(x); //Logs the correct data since it waits before running
  //     return x;
  //   })

  // } 

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
  }
  
   apiGet = () => {
    fetch("http://localhost:7258/api/geteventid")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
       
      });
  }
   

  
	submitHandler = e => {
        // function LastEvent()   {
   
        //     let movie1 =  fetch('SELECT TOP 1 id FROM PriceEvents ORDER BY ID DESC').then((apiData) => {
              
        //         console.log(movie1); //Logs the correct data since it waits before running
        //         return movie1;
        //       })
        // }
       // const returnlasteventid = ;
  // console.log(returnlasteventid)
    e.preventDefault()
    // const newEventId = data +1 ;
    // console.log(data)
    //const appDateInput= parseDate(this.state.appDate, 'MM/dd/yyyy');
    // const apiGet = () => {
    //    const event = 
    //     fetch("SELECT TOP 1 id FROM PriceEvents ORDER BY ID DESC")
    //       .then((response) => response.json())
    //       .then((json) => {
    //         console.log(json);
    //         const value = json
    //         return(value);
    //       });
    //      return event  (()=>{

    //      });
    //   }

    //   eventId  (()=>{
    //     fetch("SELECT TOP 1 id FROM PriceEvents ORDER BY ID DESC")
    //     .then((response)=>response.json())
    //     .then()
    // });





   
		axios
			.post('http://localhost:7260/api/appPrices', this.state,{
        method: "POST",
        body: JSON.stringify({
      
        //   creationdate:this.state.creationdate ,
        //     // userId: parseInt(inputs.userId),
        //     //parseInt(Date.parse(this.state.appDate))
        //     //parseInt(Date.parse(this.state.appTime)) 
        //     appDate:this.state.appDate,
            
        //     appTime:  toHHMMSS(this.state.appTime) ,
              eventid: parseInt(this.state.eventid),
            gasoline95: parseInt(this.state.gasoline95),
            gasoline92: parseInt(this.state.gasoline92),
            gasoline80: parseInt(this.state.gasoline80),
            diesel:parseInt (this.state.diesel),
                
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
    const { gasoline95, gasoline92 ,gasoline80,diesel,apiGet } = this.state
  // const test= apiGet = () => {
  //     fetch("http://localhost:7258/api/geteventid")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         console.log(json);
        
  //         alert('hey')
          
  //       });
  //   }
     

    
		return (
			<div>
				<form onSubmit={this.submitHandler}>
<div className="row">
{/* <select>
    { eventid.map((order) => (
         <option   className="form-control"      
         name="eventid" 
    
         
          value={order.id}>{order.id}</option>
        
       
      
         
      
       ))}
    </select> */}
</div>

					<div className="row">
						<input
							 type="number" 
               className="form-control"    
							name="gasoline95"
							value={gasoline95}
              onChange={this.changeHandler}
              placeholder="Enter Gasoline 95 Price"
						/>
					</div>
          <div className="row">
						<input
                            type="number" 
                            className="form-control"      
							name="gasoline92"
							value={gasoline92}
              onChange={this.changeHandler}
              placeholder="Enter Gasoline 92 Price"
						/>
					</div>
          
					<div className="row">
						<input
							 type="number" 
               className="form-control"         
              name="gasoline80"
							value={gasoline80}
              onChange={this.changeHandler}
              placeholder="Enter Gasoline 80 Price"
						/>
					</div>
					<div className="row">
						<input
             className="form-control"
							 type="number" 
                             min="4.50"
                              max="9.90" 
              name="diesel"
							value={diesel}
              onChange={this.changeHandler}
              placeholder="Enter Diesel Price"
						/>
					</div>

     


          <div className="row">
          <button className=" submitbtn" type="submit">Submit</button>
          </div>
					
				</form>
			</div>
		)
	}
}

export default AddNewPrices

