import React, {createContext, useReducer} from 'react'
import AppReducer from '../context/AppReducer'

const initialState = {
  incomeTransactions: [
    {id: 1, incomeText: 'car sold', incomeAmount: 15000 },
    {id: 2, incomeText: 'salary', incomeAmount: 5300 },
    {id: 3, incomeText: 'bonus', incomeAmount: 1300 }
  ],
  expenseTransactions: [
    {id: 4, expenseText: 'rent', expenseAmount: 13000 },
    {id: 5, expenseText: 'food', expenseAmount: 5800 },
    {id: 6, expenseText: 'liquor', expenseAmount: 100 }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //Income
  const addIncome = incomeTransaction => {
    dispatch({
      type: 'ADD_INCOME',
      payload: incomeTransaction,
    })
  }
//Expense
  const addExpense = expenseTransaction => {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expenseTransaction,
    })
  }

  return (
    <GlobalContext.Provider value={{
      incomeTransactions: state.incomeTransactions, 
      expenseTransactions: state.expenseTransactions,
      addIncome,
      addExpense,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}