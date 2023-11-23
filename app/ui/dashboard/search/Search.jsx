import React from "react";
import styles from "./search.module.css";

export default function Search({ placeholder }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
      />
    </div>
  );
}
