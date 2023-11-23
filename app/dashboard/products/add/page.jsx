import React from "react";
import styles from "@/app/ui/dashboard/products/addProduct.module.css";
export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="Techno">Techno</option>
          <option value="Techno">Samsung</option>
          <option value="Techno">Gumu</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea name="desc" id="" rows="16"></textarea>
        <button type="submit">Submite</button>
      </form>
    </div>
  );
}
