
import React, { Component } from 'react'
import './Test.css'





 class AddPrice extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isEditing: false,
         currentStep: 1,
         totalPrices: 0,
         editNewPrice: null,
         status: '',
         postPage: 1,
         pricesLoading: true,
         editLoading: false,
        prices: [
         {
       appDate:  '',
       appTime: '',
       Gas_80_Price:'' , 
       Gas_92_Price:'' , 
      Gas_95_Price:'' , 
        Diesel_Price:'' },
   ],
        
        
        }
      }

      componentDidMount() {
        fetch('URL')
          .then(res => {
            if (res.status !== 200) {
              throw new Error('Failed to fetch user status.');
            }
            return res.json();
          })
          .then(resData => {
            this.setState({ status: resData.status });
          })
          .catch(this.catchError);
    
     
      }

    
      handleChange = event => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })    
      }
       
      handleSubmit = event => {
        event.preventDefault()
        const { appDate, appTime,  Gas_80_Price, Gas_92_Price, Gas_95_Price,Diesel_Price} = this.state
        alert(`Your registration detail: \n 
               AppDate: ${appDate} \n 
               AppTime: ${appTime} \n
               Gasoline 80: ${Gas_80_Price} \n
               Gasoline 92: ${Gas_92_Price} \n
               Gasoline 95: ${Gas_95_Price} \n
               Diesel: ${Diesel_Price} \n
            
               ` )
      }
      
      _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 1? 2: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }
        
      _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
        fetch('http://localhost:8080/feed/prices', {
 
        })
        .then(res => {
          if (res.status !== 200) {
            throw new Error('Failed to fetch prices.');
          }
          return res.json();
        })
        .then(resData => {
          this.setState({
            posts: resData.prices.map(NewPrice => {
              return {
                ...NewPrice
                
              };
            }),
            totalPrices: resData.totalItems,
            pricesLoading: false
          });
        })
        .catch(this.catchError);
      }
    
    /*
    * the functions for our button
    */
    previousButton() {
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        return (
          <button 
            className="btn btn-secondary" 
            type="button" onClick={this._prev}>
          Previous
          </button>
        )
      }
      return null;
    }
    
    nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <2){
        return (
          <button 
            className="btn btn-primary float-right" 
            type="button" onClick={this._next}>
          Next
          </button>        
        )
      }
      return null;
    }

    newPostHandler = () => {
      this.setState({ isEditing: true });
    };
  
    startEditPostHandler = NewPriceId => {
      this.setState(prevState => {
        const loadedNewPrice = { ...prevState.prices.find(p => p._id === NewPriceId) };
  
        return {
          isEditing: true,
          editNewPrice: loadedNewPrice
        };
      });
    };
  
      
      render() {    
        return (
          <React.Fragment>
          <h1>Step Form</h1>
          <p>Step {this.state.currentStep} </p> 
    
          <form onSubmit={this.handleSubmit}>
          {/* 
            render the form steps and pass required props in
          */}
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              appDate={this.state.prices.appDate}
              appTime={this.state.prices.appTime}
            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              Gas_80_Price={this.state.prices.Gas_80_Price}
              Gas_92_Price={this.state.prices.Gas_92_Price}
              Gas_95_Price={this.state.prices.Gas_95_Price}
              Diesel_Price={this.state.prices.Diesel_Price}
            />
    
         
            {this.previousButton()}
            {this.nextButton()}
    
          </form>
          </React.Fragment>
        );
      }
    }
    
    function Step1(props) {
      if (props.currentStep !== 1) {
        return null
      } 
      return(
        <div className="form-group">
          <label htmlFor="date">appDate</label>
          <input
            className="form-control"
            id="appdate"
            name="appDate"
            type="date"
            placeholder="Enter D"
            value={props.appDate}
            onChange={props.handleChange}
            />


<label htmlFor="email">apptime</label>
          <input
            className="form-control"
            id="appTime"
            name="appTime"
            type="time"
            placeholder="Enter D"
            value={props.appTime}
            onChange={props.handleChange}
            />

        </div>
      );
    }
    
    function Step2(props) {
      if (props.currentStep !== 2) {
        return null
      } 
      return(
        <React.Fragment>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter prodonePrice"
            value={props.Gas_80_Price}
            onChange={props.handleChange}
            />
              <input
            className="form-control"
            id="prodtwoPrice"
            name="prodtwoPrice"
            type="integr"
            placeholder="Enter prodtwoPrice"
            value={props.Gas_92_Price}
            onChange={props.handleChange}
            />

               <input
            className="form-control"
            id="prodthrePrice"
            name="prodthrePrice"
            type="float"
            placeholder="Enter prodthrePrice"
            value={props.Gas_80_Price}
            onChange={props.handleChange}
            />
              <input
            className="form-control"
            id="prodfourPrice"
            name="prodfourPrice"
            type="float"
            placeholder="Enter prodfourPrice"
            value={props.Diesel_Price}
            onChange={props.handleChange}
            />
            
        </div>
        <button className="btn btn-success btn-block">Submit</button>
        </React.Fragment>
      );
    }
  


    
    

export default AddPrice