import React from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placholder="search for user" />
        <Link href="/dashboard/products/add">
          <button className={styles.btn}>Add Product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Describtion</td>
            <td>Price</td>
            <td>CreatedAt</td>
            <td>Stock</td>
            {/* <td>Role</td> */}
            {/* <td>Status</td> */}
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  width={40}
                  height={40}
                  className={styles.productImg}
                />
                Techno
              </div>
            </td>
            <td>des</td>
            <td>$999</td>
            <td>12.33.23</td>
            <td>20</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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
