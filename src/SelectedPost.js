import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

class SelectedPost extends Component {
    handleEdit=()=>{
        console.log(this.props);
        this.props.history.push(`/SelectedPost/${this.props.history.location.state.some.id}`, {temp:this.props.history.location.state.some})
    }
  render() {
      console.log('inside selected post frm ohhh',this.props)
      const index=this.props.history.location.state.some.id
  return (
    <div className='selectedPost'>
    
      
      <div className='Selected'>
      
      <label className='labelForselected'>Title<p className='title'>{this.props.history.location.state.some.title}</p> </label>
      <label className='labelForselected'>Category<p className='category'>{this.props.history.location.state.some.category}</p></label>
      <button className='postDeleteButton' onClick={()=>this.props.dispatch({type:'DELETE_POST',id:index})}>
      <NavLink exact activeStyle={{color:'orange'}} to='/AllPost'>Delete</NavLink></button><br/><br/>
      </div>
      <label className='labelForselected'>Message</label><h3 className='message'>{this.props.history.location.state.some.postContent}</h3>
      <div className='buttonSelectedPost'>
      <button className='postEditButton' onClick={this.handleEdit}  key={this.props.history.location.state.some.id}>Edit Me
      </button>
      <button className='postDeleteButton' >
      <NavLink exact activeStyle={{color:'orange'}} to='/AllPost'>Cancel</NavLink></button>
      </div>
      </div>
    )
}
}



export default connect()(SelectedPost);

