import React ,{Component} from 'react'
import {connect} from 'react-redux'



class Post extends Component {
 handleClick=() =>{
     this.props.deletePost(this.props.post.id);
this.props.history.push('/home');
  
 }
render(){
    console.log(this.props)
const post = this.props.post ? (
    <div className="Post">
        <h4 className="center">{this.props.title}</h4>
        <p>{this.props.post.body}</p>
<div className="center">
    <button className="btn grey" onClick={this.handleClick}>
        Delete Post
    </button>
</div>
    </div>
) : (
    <div className="center">Loaading Posts ...</div>
)
 

    return(
<div className="container">
  {post}
  </div>
    )
  
}

}

const mapStateToProps =(state,ownProps) => {
    
      // return diff properties 
     let id = ownProps.match.params.post.id ;
     return {  post :state.posts.find(post => post.id ===id)}
        
}

function mapDispatchToProps (dispatch) {

  }


export default connect(mapStateToProps,mapDispatchToProps)(Post)