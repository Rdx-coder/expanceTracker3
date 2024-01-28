import React, { useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ dispatch }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseFloat(expenseAmount) === 0) {
      return;
    }

    const newExpense = {
      text: expenseText,
      amount: parseFloat(expenseAmount), // Parse amount to float
      id: new Date().getTime()
    };

    dispatch({ type: "ADD_EXPENSE", payload: newExpense }); // Dispatch action to add expense

    clearInput();
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn} type="submit">Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
