import React from 'react';
import spinner from './spinner.gif';
import '../Hero/Hero.css'
const Spinner = () => {
    return (
       <img
       src={spinner} 
       style={{width: '150px', paddingTop:'20px', margin: 'auto', display: 'block'}}
       alt='Loading' 
       />
    )
}

export default Spinner
