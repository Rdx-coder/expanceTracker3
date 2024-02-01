import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

const Transaction = ({ expense, deleteExpense }) => {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  return (
    <li
      key={expense.id}
      className={`${styles.transaction} ${
        expense.amount > 0 ? styles.profit : styles.loss
      }`}
      onMouseOver={() => {
        setCurrentHoverIndex(true);
      }}
      onMouseLeave={() => {
        setCurrentHoverIndex(false);
      }}
    >
      <div>{expense.text}</div>
      <div className={styles.transactionOptions}>
        <div
          className={`${styles.amount} ${
            currentHoverIndex && styles.movePrice
          }`}
        >
          ${expense.amount}
        </div>
        <div className={styles.btnContainer}>
          {currentHoverIndex && (
            <>
              <div className={styles.edit} onClick={() => {}}>
                <img src={EditImage} height="100%" alt="Edit" />
              </div>
              <div className={styles.delete} onClick={() => deleteExpense(expense.id)}>
                <img src={DeleteImage} height="100%" alt="Delete" />
              </div>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default Transaction;
