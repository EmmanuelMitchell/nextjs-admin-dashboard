import React from "react";
import Cards from "../ui/dashboard/cards/Cards";
import styles from "../ui/dashboard/dashboard.module.css";
import Transactions from "../ui/dashboard/transactions/Transactions";
import Charts from "../ui/dashboard/charts/Charts";
import RightBar from "../ui/dashboard/rightbar/RightBar";

export default function Dashboard() {
  return (
    <main className={styles.Wrapper}>
      <div className={styles.mainContent}>
        <div className={styles.cards}>
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Transactions />
        <Charts />
      </div>
      <div className={styles.rightbar}>
        <RightBar />
      </div>
    </main>
  );
}
