import React, {useContext} from'react'
 import { GlobalContext } from './context/GlobalState'

export default function Balance() {
  const {transaction}= useContext(GlobalContext);
   
  const amount = transaction.map(transaction => transaction.amount);
  const total = amount.reduce((acc ,item) => (acc += item),0).toFixed(2);
  return (
    <div>
      <h3>Your Balance</h3>
      <h1 id='balance'>&#8377;{total}</h1>
    </div>
  )
}
