import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newContent=this.getContent.value;
    const newTitle = this.getTitle.value;
    const newCategory = this.getCategory.value;
    const data = {
      newTitle,
      newContent,
      newCategory
    }
    console.log('data',data);
    this.props.dispatch({ type: 'UPDATE', id: this.props.match.params.selectId, data: data })
  }
  
render() {
  let selectedPost={}
  const index= this.props.posts.findIndex(post => post.id === this.props.match.params.selectId);

  if(index!==-1){
      console.log(this.props.posts[index]);
      selectedPost= this.props.posts[index]
  }
  console.log('selected post',selectedPost)
return (
<div>
  <form >
  <NavLink exact activeStyle={{color:'orange'}} to='/AllPost'>BacK To AllPosts</NavLink>
     <input className='updatePostContent' required type="text"  defaultValue={selectedPost.postContent} ref={(input)=>this.getContent = input}  /><br /><br />
     <input className='update' required type="text"  defaultValue={selectedPost.title}  ref={(input)=>this.getTitle = input}/><br /><br />
     <input className='update' required type="text"  defaultValue={selectedPost.category} ref={(input)=>this.getCategory = input} /><br /><br />
    <button onClick={this.handleEdit}><NavLink exact activeStyle={{color:'orange'}} to='/AllPost'>Update</NavLink></button>
  </form>
</div>
);
}
}
const mapStateToProps = (state) => {
  return {
      posts: state
  }
}

export default connect(mapStateToProps)(EditComponent);