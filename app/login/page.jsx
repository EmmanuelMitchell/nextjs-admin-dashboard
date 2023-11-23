import React from "react";
import styles from "@/app/ui/login/login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2>Login</h2>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
