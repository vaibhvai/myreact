import React, { useState } from 'react'




    const Addtxnview=(props)=>{
        const[amount,setAmount]=useState();
        const[desc,setDesc]=useState();
        const[type,setType]=useState("");
        const  addTxn=()=>{
            props.addTransaction({amount:Number(),desc,type,id:Date.now()});
          
            props.toggletxn();
        }
        return(
            <div className='addTxncontainer'>
                <input placeholder='Amount' value={amount} type='number' onChange={(e) =>setAmount(e.target.value)}/>

                <input placeholder='Description' value={desc}  onChange={(e) =>setDesc(e.target.value)}/>
                <div className='radiobox'>
                    <input type='radio' id='expense' name='type'value="EXPENSE" checked={type==="EXPENSE"}
                      onChange={(e)=>setType(e.target.value)}/>
                    <label htmlFor='expense'>Expense</label>
                    <input type='radio' id='income' name='type' value="INCOME" checked={type==="INCOME"}
                    onChange={(e)=>setType(e.target.value)}/>
                    <label htmlFor='Income'>Income</label>
                    
                </div>
                <button className='transaction'onClick={addTxn}>Add Transiction</button>

            </div>
        )
    };

   
    function Overview (props){
        const [isTxnVissible, toggletxn]=useState(false);
    return(
        <div className='container1'>
        <div className='balancebox'>
        Balance:10,000 &#8377;
        <button className='transaction' onClick={()=>toggletxn(!isTxnVissible)}>{ isTxnVissible ? "Cancel" :"Add"}</button>
        </div>
        {isTxnVissible && <Addtxnview toggletxn={toggletxn}  addTransaction={props.addTransaction}/>}
        <div className='expensebox'>
            <div className='box'>
             Expense<span> 15,000&#8377;</span>
            </div>
            <div className='box'>
             Income<span> 20,000&#8377;</span>
            </div>
        </div>
        </div>
    )
}


export default Overview;




