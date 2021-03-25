import React,{ Component } from 'react'
import Axios from 'axios'
import {Link , Router,BrowserRouter , Route ,Switch} from 'react-router-dom'
import  Table from 'react-bootstrap/Table'
import './test2.css'
 
class PriceEvent extends Component {
  state = {
    comments : [ ]
  }

 componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
      console.log(res);
      this.setState({
        id: this.state.id ,
        comments: res.data.slice(0,6)
      })
        }) 
  }

 renderTableData() {
 
    return this.state.comments.map((comment, index) => {
        //destructuring
       
       return (
          <tr key={comment.id}>
             <td>{comment.id}</td>
             <td>{comment.name}</td>
             <td>{comment.email}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
    let header = Object.keys(this.state.comments)
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div>
          <h1 id='title'> Price Event </h1>
          <table id='comments'>
             <tbody>
             <tr>
      <th>Id</th>
      <th>Comment Name</th>
      <th>comment Name</th>
    
    </tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}
export default PriceEvent