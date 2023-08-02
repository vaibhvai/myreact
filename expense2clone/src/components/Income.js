import React,{useContext} from 'react';
 import { GlobalContext } from './context/GlobalState';

export default function Income() {
  const {transaction}= useContext(GlobalContext);
  const amounts = transaction.map(transaction => transaction.amount);
 

   const income = amounts
   .filter(item => item > 0)
   .reduce((acc ,item) => (acc += item),0)
   .toFixed(2);

   const expense = (amounts.filter(item=> item<0).reduce((acc,item)=>(acc += item),0)*-1).toFixed(2);
  return (
    <div className='inc-exp-container'>
      <div >
       <h4>Income</h4>
      <h1 > {income}&#8377;</h1>
      </div>
      <div>
      <h4>Expense</h4>
      <h1 > {expense} &#8377;</h1>
      </div>
    </div>
  )
}
