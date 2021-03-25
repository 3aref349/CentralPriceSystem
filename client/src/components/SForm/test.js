import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import moment from 'moment'
import toHHMMSS from 'time-input-js'
import axios from 'axios'
import './stepform.css'

const WrapperSection = styled.section`

display:flex;
justify-content:center;
flex-direction: row;
width:100%;

align-items: center; 




`;
const Wrapperdiv = styled.div`

display:flex;
justify-content:center;
flex-direction: column;
background-color:#f2f7f4;
width:50%






`;
const Wrapperdivrow = styled.div`
 
 display:flex;
 justify-content:space-around ;
 flex-direction: row;


 `;

const Button = styled.button`


justify-content:center;


width:100%;
border:none



`;
const Title = styled.h2`

line-height: 2.5;

display:flex;
font-weight: bold;
font-size:100%;
color:black;

justify-content:center;

font-family: fantasy;
padding-top:50px;


`;
const TwoButtons = styled.button`
display flex;
width:100px;
background-color: rgb(82, 104, 230);;
color:white;
justify-content:center;
border:none;
border-radius:5px;

margin:25px;



`;
const Inputdiv = styled.div`
padding:5px;


`;

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      creationdate: new Date(),
      appDate: moment().calendar(),
      appTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
      Gasoline95: '',
      Gasoline80: '',
      Gasoline92: '',
      Diesel: '',
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
      .post('http://localhost:7260/api/appPrice', this.state, {
        method: "POST",
        body: JSON.stringify({

          creationdate: this.state.creationdate,
          // userId: parseInt(inputs.userId),
          //parseInt(Date.parse(this.state.appDate))
          //parseInt(Date.parse(this.state.appTime)) 
          appDate: this.state.appDate,

          appTime: toHHMMSS(this.state.appTime),
          //   eventid: parseInt(newEventId),
          // gasoline95: parseInt(this.state.gasoline95),
          // gasoline92: parseInt(this.state.gasoline92),
          // gasoline80: parseInt(this.state.gasoline80),
          // diesel:parseInt (this.state.diesel),

          // userId: parseInt(inputs.userId),
        }),
        headers: {
          token: localStorage.getItem("token"),
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




  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 1 ? 2 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (



        <Wrapperdivrow>

          <button className="stepformbtns" onClick={this._prev}>  <i class="fas fa-arrow-left"></i> previous  Page</button>
        </Wrapperdivrow>

      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 2) {
      return (
        <Wrapperdivrow>
          <button type="submit" className="stepformbtns" onClick={this._next}> <i class="fas fa-arrow-right"></i> Next Page</button>

        </Wrapperdivrow>
      )
    }
    return null;
  }

  render() {
    const { appDate, appTime } = this.state
    return (
      <React.Fragment>



        <form >
          {/* 
        render the form steps and pass required props in
      */}
          <Title>
            <h2> Put Date & Time </h2>
          </Title>
          <WrapperSection>


            <Wrapperdiv>

              <form onSubmit={this.submitHandler} >




                <div className="row">
                  <input
                    className="form-control"
                    type="date"
                    name="appDate"
                    value={appDate}
                    onChange={this.changeHandler}
                    required
                  />
                </div>
                <div className="row">
                  <input
                    className="form-control"
                    type="time"
                    name="appTime"
                    value={appTime}
                    onChange={this.changeHandler}
                    required
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
                  <button className=" submitbtn" type="submit" onClick={this._next}>Submit</button>

                </div>
              </form>
            </Wrapperdiv>

          </WrapperSection>

          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />

          {/* {this.previousButton()} */}
          {/* {this.nextButton()} */}

        </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <WrapperSection>
      <div >


        <Fade delay={500}>
          <Title>
            <h2> Pick App Date & Time  </h2>

          </Title>

        </Fade>

        <Wrapperdiv>

          <input
            className="form-control"
            id="appdate"
            name="appDate"
            type="date"
            required
          />

          <input
            className="form-control"
            id="appTime"
            name="appTime"
            type="time"
            required

          />
        </Wrapperdiv>

      </div>
    </WrapperSection>
  );
}


function Step2(props) {
  const [data, setData] = useState([]);
  const [dataP, setDataP] = useState([]);
  const [dataevent, setDataevent] = useState([]);
  const [inputs, setInputs] = useState({});
  const eventid = useRef(null);

  const apiGet = () => {
    fetch("http://localhost:7260/api/getpriceeventdetails")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });

  };
  const apiGetevent = () => {
    fetch("http://localhost:7260/api/geteventid")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataevent(json);
      });
  };

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,

      [event.target.name]: event.target.value,
    }));
  };
  const apiProduct = () => {
    fetch("http://localhost:7260/api/products")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataP(json);
      });
  };

  const apiPost = async () => {

    await fetch("http://localhost:7260/api/appPrices", {
      method: "POST",
      body: JSON.stringify({
        eventid: parseFloat(eventid.current.value),
        gasoline95: parseFloat(inputs.gasoline95),
        gasoline92: parseFloat(inputs.gasoline92),
        gasoline80: parseFloat(inputs.gasoline80),
        diesel: parseFloat(inputs.diesel),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log(inputs);
  };
  useEffect(() => {
    apiGet();
    apiProduct();
    apiGetevent();

  }, []);

  if (props.currentStep !== 2) {
    return null
  }
  return (
    <WrapperSection>
      <div className="form-group">

        <Fade delay={500}>
          <Title>
            <h2> Enter The New Prices</h2>

          </Title>

        </Fade>

        <form onSubmit={handleSubmit} >
          <div className="row">


            <label for=""> Price Event no.</label>
            {dataevent.map((order) => (

              <input
                type="number"

                className="event center"
                name="eventid"
                ref={eventid}
                onChange={handleChange}
                value={order.id}

                readOnly
              />




            ))}

          </div>
          <div className="steptwoWrapper">
            <WrapperSection>


              <ul>
                {dataP.map((item) => (
                  <li key={item.id}>
                    <i class="fas fa-gas-pump"></i> {item.Name}
                  </li>
                ))}
              </ul>



              <div className="newprices">
                {data.map((order) => (

                  <Inputdiv>
                    <input
                      key={order.Id}

                      className="form-control"
                      name="order"
                      type="text"
                      //  onChange={handleChange}
                      placeholder={order.NewPrice}

                      readOnly

                    />
                  </Inputdiv>
                ))}
              </div>


              <div className="newprices">
                <Inputdiv>
                  <input
                    className="form-control"
                    id="Gasoline80"
                    name="gasoline95"
                    type="integer"
                    placeholder="  Gasoline95 Price"
                    onChange={handleChange}
                    required

                  />
                </Inputdiv>

                <Inputdiv>

                  <input
                    className="form-control"
                    id="Gasoline80"
                    name="gasoline92"
                    type="integer"
                    placeholder=" Gasoline92 Price"
                    onChange={handleChange}
                    required

                  />
                </Inputdiv>
                <Inputdiv>
                  <input
                    className="form-control"
                    id="Gasoline80"
                    name="gasoline80"
                    type="integer"
                    placeholder=" Gasoline80 Price"
                    onChange={handleChange}
                    required

                  />
                </Inputdiv>
                <Inputdiv>
                  <input
                    className="form-control"
                    id="Gasoline80"
                    name="diesel"
                    type="integer"
                    placeholder=" Diesel Price"
                    onChange={handleChange}
                    required

                  />
                </Inputdiv>
              </div>


            </WrapperSection>
            <div className="row">
              <button className=" submitbtn" type="submit" >Submit</button>

            </div>


          </div>






        </form>






      </div>
    </WrapperSection>
  );
}


export default MasterForm

