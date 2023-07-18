import React from 'react'


export default function Form(){
    return(
        <section>
             <div className="register">
            <div className="col-1">
                <img src=''></img>
             

                <form id='form' className='flex flex-col' >
                    <input type="text" placeholder='username,phone number or email' />
                    <input type="text"  placeholder='password' />
                  
                   
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            
        </div>
        </section>
    )
}