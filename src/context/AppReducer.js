export default (state, action) => {
  switch (action.type) {

    //Income
    case 'ADD_INCOME':
      return {
        ...state,
        incomeTransactions: [action.payload, ...state.incomeTransactions],
      };

    //Expense
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenseTransactions: [action.payload, ...state.expenseTransactions],
      };

    default:
      return state;
  }
}