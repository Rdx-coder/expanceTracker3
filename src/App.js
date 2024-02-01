import React, { useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

// Initial state for expenses
const initialState = [];

// Reducer function to handle state updates
const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

function App() {
  // Use useReducer hook to manage state
  const [expenses, dispatch] = useReducer(expensesReducer, initialState);

  // Function to add a new expense
  const addExpense = (newExpense) => {
    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
  };

  // Function to delete an expense
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Pass addExpense function to ExpenseForm */}
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          {/* Pass deleteExpense function to ExpenseList */}
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
