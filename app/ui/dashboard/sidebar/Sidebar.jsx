import React from "react";
import styles from "./sidebar.module.css";
import { RxDashboard } from "react-icons/rx";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import {
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";
import MenuLinks from "./menuLinks/MenuLinks";
import Image from "next/image";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <RxDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUsersLine />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdProductionQuantityLimits />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <GrTransaction />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          width={50}
          height={50}
          alt="user"
        />
        <div className={styles.userDetails}>
          <span className={styles.username}>Mitchell</span>
          <span className={styles.userTitle}>Web Developer</span>
        </div>
      </div>
      <ul className={styles.listul}>
        {menuItems.map((itemMenu) => (
          <li key={itemMenu.title}>
            <span className={styles.itemMenu}>{itemMenu.title}</span>
            {itemMenu.list.map((item) => (
              <MenuLinks key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>Logout</button>
    </aside>
  );
}
