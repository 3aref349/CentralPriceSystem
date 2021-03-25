import React, { Component } from 'react'
import Reportone from  '../Reports/ReportOne'
import ReportTwo from  '../Reports/ReportTwo'
import styled from 'styled-components'
 import Fade from'react-reveal/Fade';
import './test2.css'
import ExportExcel from './ReportNewOne'
import ExportExceltwo  from './ReportNewTwo'

const SecttionWrapper = styled.section`
display:flex;
flex-direction: row;
width:100%;

`;
const itemWrapper =styled.div`
width:50%;
`;
const Title = styled.h1`

font-family: fantasy;
  font-size: 2.5em;
  text-align: center;

 

`;
export default class Dashboard extends Component {
  render() {
    return (
   

  <section className="Dwrapper">
    
      
   
  <div className="Drow">
  <Fade  delay={600}>
     <Title>
     <h1>Station Log Report</h1>
     </Title>
       </Fade>
       <ExportExcel />
  </div>

  <div className="Drow">
  <Fade  delay={600}>
     <Title>
     <h1>Price Event Report </h1>
     </Title>
       </Fade>
       <ExportExceltwo />
  </div>
  </section>
      
  
       
 
    

 


     


      
  
      
     
    )
  }
}

