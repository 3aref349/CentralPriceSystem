import Axios from 'axios';
import React ,{Component} from 'react'
import {connect} from 'react-redux'




class Post extends Component {
    state={
        post: null
    }
componentDidMount(){
    let id =this.props.match.params.post_id;
    Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(res =>{
        this.setState({
            post:res.data
        })
    })
}

 handleClick=() =>{
     this.props.deletePost(this.props.post.id);
this.props.history.push('/home');
  
 }
render(){
    console.log(this.props.post)
const post = this.props.post ? (
    <div className="Post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
<div className="center">
    <button className="btn grey" onClick={this.handleClick}>
        Delete Post
    </button>
</div>
    </div>
) : (
    <div className="center">Loading Posts ...
 
       </div>
       

)
 

    return(
<div className="container">
  { post }
  </div>
    )
  
}

}

const mapStateToProps =(state,ownProps) => {
    let id = ownProps.match.params.post_id;
    
    
    return {
        post : state.posts.find(post => post.id == id)
    }
 
 }




export default connect(mapStateToProps)(Post)