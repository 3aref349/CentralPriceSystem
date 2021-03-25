import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color:black;
`;

const Container = styled.div`

padding: 4em;
background: red;
`
export default class Approve extends Component {
    render() {
        return (
            <Container>
            <div>
                <Title>
                <h1>Approve form</h1>
                </Title>
                <input type="number" name="" value=""  placeholder="eventid" disapled/>  
                     <form>
            
             <label>product1</label>
             <input type="number" name="" value="" />
             <label>product2</label>
             <input type="number" name="" value="" />
             <label>product3</label>
             <input type="number" name="" value="" />
             <label>product4</label>
             <input type="number" name="" value="" />
         </form>
            </div>
          
     
        </Container>
        )
    }
}
