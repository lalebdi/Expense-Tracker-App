import React from 'react'

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+'; //this is to determine if the const is an expense or income
    return (
        <li className={transaction.amount < 0? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li>
    )
}

// the Math.abs() is to get the absilute values of the amount