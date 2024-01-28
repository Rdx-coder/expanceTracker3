import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = ({ expenses }) => {
  const { profitAmount, lossAmount, grandTotal } = expenses.reduce(
    (accumulator, currentExpense) => {
      const currentExpenseAmount = parseFloat(currentExpense.amount);
      if (currentExpenseAmount < 0) {
        accumulator.lossAmount += currentExpenseAmount;
      } else {
        accumulator.profitAmount += currentExpenseAmount;
      }
      accumulator.grandTotal += currentExpenseAmount;
      return accumulator;
    },
    { profitAmount: 0, lossAmount: 0, grandTotal: 0 }
  );

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal.toFixed(2)}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profitAmount.toFixed(2)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${Math.abs(lossAmount).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
