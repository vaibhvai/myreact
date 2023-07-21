import {MdMessage} from 'react-icons/md';
import React from 'react'

function Button(props) {
    
  return (
    <button className='primary_btn'>
    
   {props.icon}
   {props.text}

    </button>
  )
}

export default Button;

