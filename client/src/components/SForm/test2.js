
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
function test2() {
  const [display, setDisplay] = useState(true)
  const [Date, SetDate] = useState([]);
  const [time, setTime] = useState([]);
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



  const apiPostTime = async () => {
    // const appDate =moment().calendar(inputs.appDate);
    // const appTime =moment().parseZone(inputs.appTime);

    await fetch("http://localhost:7260/api/appPrice", {
      method: "POST",
      body: JSON.stringify({

        appDate: moment(inputs.appDate),
        appTime: toHHMMSS(inputs.appTime),


      }),
      headers: {
        token: localStorage.getItem("token"),
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
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
        token: localStorage.getItem("token"),
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };


  const handleSubmitTime = (event) => {
    event.preventDefault();
    apiPostTime();
    console.log(inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    apiPost();
    apiGetevent();
    console.log(inputs);
  };
  useEffect(() => {
    apiGet();
    apiProduct();
    apiGetevent();

  }, []);
  return (
    <div>


      <form onSubmit={handleSubmitTime} >




        <div className="row">
          <input
            className="form-control"
            type="date"
            name="appDate"
            // value={appDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <input
            className="form-control"
            type="time"
            name="appTime"
            //value={Time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <button className=" submitbtn" onClick={() => setDisplay(false)} type="submit" >Click me </button>

        </div>



      </form>
      {display ? <p>nothing to show here</p> :

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



      }
    </div>
  )
}

export default test2
