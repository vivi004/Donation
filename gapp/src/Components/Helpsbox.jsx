import React from 'react';
import '../Css/Style.css';

function Helpsbox(props) {
  return (
    <div className='p-box'>
    <img src={props.image} alt='funds'/>
    <p>{props.name}</p>
    <a href='#' className='price'>{props.price }</a>
    <a href='#' className='buy-btn'>Donate</a>
     
    </div>
  )
}

export default Helpsbox;