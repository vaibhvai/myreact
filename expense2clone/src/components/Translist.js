import React ,{ useContext, useState} from 'react'
 import Transaction from './context/Transaction';
import { GlobalContext } from './context/GlobalState'

export default function Translist() {
  const {transaction}= useContext(GlobalContext);
   
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transaction.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
     
        
      </ul>
    </div>
  )
}

