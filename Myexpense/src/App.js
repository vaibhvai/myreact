
import './App.css';
import Sogo from './components/Sogo';
import Overview from './components/Overview';
import Transiction from './components/Transaction';
import { useState } from 'react';


function App(props) {
  const [transaction ,updateTransaction]= useState([]);

  const addTransaction =(payload) =>{
    const transactionArray=[...transaction];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  }
  return (
   
 <div className='container'>
  <Sogo/>
  <Overview addTransaction={addTransaction}/>
  <Transiction transaction={transaction}/>
 </div>
  );
}

export default App;
