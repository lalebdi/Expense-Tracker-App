import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//  The initial state
// Each transacton has an id. if it is a negative number => expense. if a positive number => its income.

const initialState = {
    transactions: [
            { id: 1, text: 'Flower', amount: -20 },
            { id: 2, text: 'Salary', amount: 300 },
            { id: 3, text: 'Book', amount: -10 },
            { id: 4, text: 'Camera', amount: 150 }
        ]
}

// Creating context

export const GlobalContext = createContext(initialState);

// in order for others can have access to our globalState we need to have a provider 

// Below is the Provider component
export const GlobalProvider =({ childern }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions below: (add it to the reducer)
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider vlaue={{
        transactions:state.transactions,
        deleteTransaction, // to use this action we have to pass it down to the provider
        addTransaction
        }}>
        {childern} 
    </GlobalContext.Provider>);
}