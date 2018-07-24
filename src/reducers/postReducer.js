import post from '../post.json';

const postReducer = (state = post, action) => {
    switch(action.type) {
      case 'ADD_POST':
        return state.concat([action.data]);
      case 'DELETE_POST':
        return state.filter((post)=>post.id !== action.id);
      case 'EDIT_POST':
        return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
      case 'UPDATE':
      console.log('test',action.id);
        return state.map((post)=>{
          if(post.id === action.id) {
            console.log(action.data.newTitle)

            return {
               ...post,
               title:action.data.newTitle,
               category:action.data.newCategory,
               postContent:action.data.newContent,
               editing: !post.editing
            }
          } else return post;
        })
        case 'SELECT_POST':
        console.log('inside select post' ,state.filter((post)=>post.id === action.id));
        return state.map((post)=>post.id === action.id ? {...post,SelectPost:!post.SelectPost}:post)
  
      default:
        return state;
    }
  }

  export default postReducer;
