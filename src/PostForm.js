import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  NavLink,
}from 'react-router-dom'

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const postContent =  this.getMessage.value;
    const category=this.getCategory.value;
    const data = {
      id: new Date().toString(),
      title,
      postContent,
      category,
      editing:false,
      selectPost:false
    }
    this.props.dispatch({
      type:'ADD_POST',
      data});
    this.getTitle.value = '';
    this.getMessage.value = '';
    this.getCategory.value='';
  }
render() {
  {console.log('inside',this.props)}
  
return (
<div>
  <h1>Create Post</h1>
 <NavLink exact activeStyle={{color:'orange'}} to='/AllPost'>Back to home</NavLink>
  <form onSubmit={this.handleSubmit}>
   <input className='postTitle' required type="text" ref={(input)=>this.getTitle = input} 
    placeholder="Enter Post Title"/>
    
   <br /><br />
   <input className='postCategory' required type="text" ref={(input)=>this.getCategory = input} 
    placeholder="Enter Post category"/>
    
   <br /><br />
   <textarea  className='postMessage ' required rows="5" ref={(input)=>this.getMessage = input} cols="28" 
    placeholder="Enter Post" />
   <br /><br />
   <button >Post</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);
