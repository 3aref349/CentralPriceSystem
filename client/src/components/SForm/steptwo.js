import React, { Component } from 'react'
import axios from 'axios'
//import data from './geteventid'
import moment from 'moment' 
import toHHMMSS from 'time-input-js'

import './form.css';


class AddTime extends Component {
	constructor(props) {
		super(props)

		this.state = {
    //   creationdate: new Date(),
    //   appDate: moment().calendar(),
    //   appTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
    //   eventid:'',
      gasoline95: '',
      gasoline92: '',
      gasoline80: '',
      diesel: '',
      
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

   
	submitHandlerprices = e => {
    
    e.preventDefault()
    // const newEventId = data +1 ;
    // console.log(data)
    //const appDateInput= parseDate(this.state.appDate, 'MM/dd/yyyy');

		axios
			.post('http://localhost:7260/api/appPrice', this.state,{
        method: "POST",
        body: JSON.stringify({
      
        //   creationdate:this.state.creationdate ,
        //     // userId: parseInt(inputs.userId),
        //     //parseInt(Date.parse(this.state.appDate))
        //     //parseInt(Date.parse(this.state.appTime)) 
        //     appDate:this.state.appDate,
            
        //     appTime:  toHHMMSS(this.state.appTime) ,
            //   eventid: parseInt(newEventId),
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
    const { gasoline95, gasoline92,gasoline80,diesel } = this.state
    
		return (
            <WrapperSection>
            <div className="form-group">
          
            <Fade  delay={500}>
             <Title>
             <h2> Enter The New Prices</h2>
          
             </Title>
        
               </Fade>
          
               <form onSubmit={this.submitHandlerprices}>
               <Wrapperdiv>
                  
                
                  <Wrapperdivrow>
                    <h3 className="labelpriceform" > <i class="fas fa-gas-pump"></i>  Gasoline80</h3>
                  <input
                    className="form-control"
                    id="Gasoline80"
                    name="Gasoline80"
                    type="integer"
                    readOnly
                    /> 
                     <input
                    className="form-control"
                    id="Gasoline80"
                    name="Gasoline80"
                    type="integer"
                    placeholder="Enter  Gasoline80 Price"
                    value={gasoline80}
                    onChange={this.changeHandler}

                    
                    /> 
                  </Wrapperdivrow>
                
                   
                  <Wrapperdivrow>
                  <h3 className="labelpriceform">  <i class="fas fa-gas-pump"></i>  Gasoline92</h3>
        
                  <input
                    className="form-control"
                    id="Gasoline80"
                    name="Gasoline92"
                    type="integer"
                    readOnly
                    /> 
                     <input
                    className="form-control"
                    id="Gasoline80"
                    name="Gasoline92"
                    type="integer"
                    placeholder="Enter Gasoline92 Price"
                    value={gasoline92}
                    onChange={this.changeHandler}
                    
                    /> 
                  </Wrapperdivrow>
        
                  <Wrapperdivrow>
                  <h3 className="labelpriceform">  <i class="fas fa-gas-pump"></i>  Gasoline95</h3>
        
                  <input
                    className="form-control"
                    id="Gasoline95"
                    name="Gasoline95"
                    type="integer"
                    readOnly
                    /> 
                     <input
                    className="form-control"
                    id="Gasoline80"
                    name="Gasoline80"
                    type="integer"
                    placeholder="Enter Gasoline95 Price"
                    value={gasoline95}
                    onChange={this.changeHandler}
                    
                    /> 
                  </Wrapperdivrow>
                  <Wrapperdivrow>
                  <h3 className="labelpriceform"> <i class="fas fa-gas-pump"></i>             Diesel </h3>
        
                  <input
                    className="form-control"
                    id="Diesel"
                    name="Diesel"
                    type="integer"
                    readOnly
                    /> 
                     <input
                    className="form-control"
                    id="Gasoline80"
                    name="Gasoline80"
                    type="integer"
                    placeholder="Enter Diesel Price"
                    value={diesel}
                    onChange={this.changeHandler}
                    
                    /> 
                  </Wrapperdivrow>
        
             
                        
                </Wrapperdiv>
                    </form>
               
                <Button>
                <button className="btn  center submitbtn ">Submit</button> 
                </Button>
              
                
                
                         
            </div>
            </WrapperSection> 
		)
	}
}

export default AddTime

