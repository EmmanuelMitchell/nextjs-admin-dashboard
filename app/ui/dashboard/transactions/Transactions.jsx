import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";
const transactions = [
  {
    name: "John Doe",
    status: "Completed",
    date: "2023-11-22",
    amount: "$100.00",
  },

  {
    name: "John Doe",
    status: "Completed",
    date: "2023-11-22",
    amount: "$100.00",
  },

  {
    name: "John Doe",
    status: "Completed",
    date: "2023-11-22",
    amount: "$100.00",
  },
  // Add more transactions as needed
];
export default function Transactions() {
  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div className={styles.ImgWrapper}>
                  <Image
                    src="/noavatar.png"
                    alt="Noavater"
                    width={40}
                    height={40}
                    className={styles.Img}
                  />
                  {transaction.name}
                </div>
              </td>
              <td>{transaction.status}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
