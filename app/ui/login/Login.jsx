import React from "react";
import styles from "@/app/ui/login/login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
      </form>
    </div>
  );
}
