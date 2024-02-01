import { useReducer } from "react";
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

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Pass dispatch function to ExpenseForm to handle adding expenses */}
        <ExpenseForm addExpense={(expense) => dispatch({ type: "ADD_EXPENSE", payload: expense })} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          {/* Pass dispatch function to ExpenseList to handle deleting expenses */}
          <ExpenseList expenses={expenses} deleteExpense={(id) => dispatch({ type: "DELETE_EXPENSE", payload: id })} />
        </div>
      </div>
    </>
  );
}

export default App;
