import React from 'react';
import Button from './Button';
import {MdMessage} from'react-icons/md';
import{BiPhoneCall}from'react-icons/bi';
import { useState } from 'react';


function Form1() {
  const[name,setName]=useState("");
  const[email,setemail]=useState("");
  const[Address,setAddress]=useState("")

  const onSubmit =(event)=>{

    let name;
    let email;
    let Address;
    event.preventDefault();
    setName(event.target[0].value);
    setemail(event.target[1].value);
    setAddress(event.target[2].value)

    console.log("name",event.target[0].value);
    console.log("email",event.target[1].value);
    console.log("Address",event.target[2].value);
    console.log({name,email,Address})
  }
  return (
    <div className='container1'>
      <div className='contact-form'>
       
        <div className='top_button'>
        <Button text="Via Support Chat"icon={<MdMessage fontSize="24px"/>} />
        <Button text="Via call"icon={<BiPhoneCall fontSize="24px"/>} />

        </div>
       <form onSubmit={onSubmit}>
        <div className='form_container'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name'/>

        <label htmlFor='email'>E-mail</label>
        <input type='email' name='name'/>

        <label htmlFor='Address'>Address</label>
        < textarea type='text' name='name'/>
        </div>
        <div className='submit_btn' style={{
          display:'flex',
          justifyContent:'end'
          }}>
        <Button text="Submit"/>
        </div>
       <div>
       { name+" "+email+" "+Address}
       </div>
       </form>
        
        
      </div>
      <div className='image' 
    >
        <img style={{width:"130%",paddingLeft:"22px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7c1PQt_ai0tBlCZy_qrBBqAENbXeInZZxFA&usqp=CAU'/>
      </div>
    </div>
  )
}

export default Form1;
