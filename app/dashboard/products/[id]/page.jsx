import Image from "next/image";
import React from "react";
import styles from "@/app/ui/dashboard/products/singleProducts.module.css";

export default function SingleProductPage() {
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
          <label>title</label>
          <input type="text" name="title" placeholder="title" />
          <label>Price</label>
          <input type="number" name="price" placeholder="price" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="color" />
          <label>Size</label>
          <input type="text" name="size" placeholder="size" />
          <label>Address</label>
          <textarea
            type="text"
            name="Freetown"
            placeholder="John Doe"
            role="16"
          ></textarea>
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="Techno">Techno</option>
            <option value="Techno">Samsung</option>
            <option value="Techno">Gumu</option>
          </select>
          <label>Describtion</label>
          <textarea
            type="text"
            name="des"
            placeholder="desctibtion"
            role="16"
          ></textarea>

          {/* <label>isActive</label>
          <select name="isActive" id="isActive">
            <option value={true}>isActive</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select> */}

          <button>Sunmit</button>
        </form>
      </div>
    </div>
  );
}
