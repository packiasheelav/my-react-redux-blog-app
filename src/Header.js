import React from 'react';
import Links from './Links';

const header=(props)=>{
    console.log(props);
    return(
        <div className='header'>
        My First Redux Blog
        <Links /> 
        </div>
    )
}
export default header;