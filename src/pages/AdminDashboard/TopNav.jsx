import React from "react";
import { Link } from "react-scroll";
import styles from "./AdminDashboard.module.scss";
import classNames from "classnames";

// import adminRoutes from "../../adminRoutes";

const navLink = [
  "Numbers",
  "Registration info",
  "seekers/professionals",
  // "logins",
  "orders by status",
  "subscriptions plans",
  "active users",
  // "Geography"
];

const dashTarget = [
  "numbers",
  "registration-info",
  "seekers-professionals",
  // "logins",
  "orders-by-status",
  "subscriptions-plans",
  "active-users",
  // "geography"
];

// let activeTab = navLink[0]; //???

const TopNav = () => {
  return (
    <section className={styles.navSection}>
      <nav className={styles.adminTopnav}>
        {navLink.map((item, index) => {
          return (
            <li key={index} className={styles.adminNavList}>
              <Link
                to={dashTarget[index]} // to be refactor
                className={classNames(styles.adminNavLink)}
                activeClass={styles.activeLink}
                spy={true}
                duration={500}
                offset={-140}
              >
                {item}
              </Link>
            </li>
          );
        })}
      </nav>
    </section>
  );
};

export default TopNav;
