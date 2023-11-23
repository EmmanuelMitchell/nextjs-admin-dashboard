import React from "react";
import styles from "@/app/ui/dashboard/users/addUser.module.css";
export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="username"
          placeholder="username"
          name="username"
          required
        />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" required />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>isAdmin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true}>isActive</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        {/* <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" /> */}
        <textarea name="adress" id="adress" rows="16"></textarea>
        <button type="submit">Submite</button>
      </form>
    </div>
  );
}
