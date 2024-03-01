export const addExpense = (name, amount) => ({
  type: 'ADD_EXPENSE',
  payload: {
    id: Math.random(),
    name,
    amount: parseFloat(amount),
    createdAt: Date.now()
  }
});

export const deleteExpense = id => ({
  type: 'DELETE_EXPENSE',
  payload: {
    id
  }
});