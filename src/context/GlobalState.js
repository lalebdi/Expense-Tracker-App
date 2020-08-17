import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//  The initial state
// Each transacton has an id. if it is a negative number => expense. if a positive number => its income.

const initialState = {
    transactions: []
    }

// Creating context

export const GlobalContext = createContext(initialState);

// in order for others can have access to our globalState we need to have a provider 

// Below is the Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions below: (add it to the reducer)
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
        }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
        }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction, // to use this action we have to pass it down to the provider
        addTransaction
    }}>
    {children}
            </GlobalContext.Provider>);
}