import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
// import { fetechUsers } from "@/app/lib/data";

export default async function UsersPage({ placholder }) {
  // const users = await fetechUsers();
  // console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placholder="search for user" />
        <Link href="/dashboard/users/add">
          <button className={styles.btn}>Add User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>CreatedAt</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.users}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.Img}
                />
                John Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>13.01.2022</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delet}`}>
                  delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
