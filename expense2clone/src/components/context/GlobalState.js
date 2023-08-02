import React,{createContext ,useReducer} from "react";
import AppReducer from './AppReducer';



//Intial State
const intialState ={
    transaction:[]
}

//create context
export const GlobalContext = createContext(intialState);

//provider component
 export const GlobalProvider =({children}) =>{
    const[state, dispatch] =useReducer(AppReducer,intialState);


    //Actions
    function deleteTransaction(id){
        dispatch({
            type :"DELETE",
            payload : id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type :"ADD",
            payload : transaction
        });
    }
    return (<GlobalContext.Provider value={{
        transaction: state.transaction,deleteTransaction,addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
 }