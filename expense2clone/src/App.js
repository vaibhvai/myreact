
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Income from './components/Income';
import Translist from './components/Translist';
import Addtrans from './components/Addtrans';

import { GlobalProvider } from './components/context/GlobalState';



function App() {
  return (
   <div className='App'>
     <GlobalProvider >
     <Header/>
     <div className='container'>
      <Balance/>
      <Income/>
      <Translist/>
      <Addtrans/>
     </div>
        
    </GlobalProvider>
   </div>
  );
}

export default App;
