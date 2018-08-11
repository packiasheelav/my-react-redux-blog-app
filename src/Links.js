import React from 'react';
import PostForm from './PostForm' ;
import AllPost from './AllPost';
import SelectedPost from './SelectedPost';
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,

}from 'react-router-dom';
import EditComponent from './EditComponent';

const Links=()=>{
    return(
<div>
    <Router>
        <div className='container'>
        <ul className='links'>
        <li className='Header'><NavLink exact activeStyle={{color:'orange'}} to='/'>All Post</NavLink></li>

        <li className='Header'><NavLink exact activeStyle={{color:'orange'}} to='/PostForm'>Add New Post</NavLink></li>
        {/* <li className='Header'><NavLink exact activeStyle={{color:'orange'}} to='/AllPost'>All Post</NavLink></li> */}
        </ul>
        <Switch>
        <Route exact path='/PostForm' render={()=>(<PostForm />)}/> 
        <Route exact path='/' render={(prop)=>(<AllPost  {...prop}/>)}/> 

        <Route exact path='/AllPost' render={(prop)=>(<AllPost {...prop}/>)}/>
        <Route exact path='/Posts/:postId' render={(prop)=>(<SelectedPost {...prop} />)}/>
        <Route exact path='/SelectedPost/:selectId' render={(prop)=>(<EditComponent {...prop} />)}/>

        </Switch> 
        </div>
    </Router>

</div>
    );
}
export default Links;  