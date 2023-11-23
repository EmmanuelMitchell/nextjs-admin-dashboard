import Image from "next/image";
import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser.module.css";
import Link from "next/link";

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.inforContainer}>
        <div className={styles.ImgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="text" name="email" placeholder="John Doe" />
          <label>Password</label>
          <input type="password" name="password" placeholder="john" />
          <label>Phone</label>
          <input type="text" name="Phone" placeholder="+232 79000000" />
          <label>Address</label>
          <textarea
            type="text"
            name="Freetown"
            placeholder="John Doe"
            role="16"
          ></textarea>
          <label>isAdmin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={false}>isAdmin</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>isActive</label>
          <select name="isActive" id="isActive">
            <option value={true}>isActive</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button>Sunmit</button>
        </form>
      </div>
    </div>
  );
}
