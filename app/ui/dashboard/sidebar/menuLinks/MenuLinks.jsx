"use client";
import Link from "next/link";
import React from "react";
import styles from "./menu.module.css";
import { usePathname } from "next/navigation";

export default function MenuLinks({ item }) {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
