import React from "react";
import AdminCard from "./AdminCard";
import styles from "./AdminDashboard.module.scss";


const titleCards = [
  {title: "Seekers", titleKey: "seekers"},
  {title: "Professionals", titleKey: "comforters"},
  {title: "Average age of seekers", titleKey: "averageSeekerAge"},
  {title: "Average age of professionals", titleKey: "averageComforterAge"},
  {title: "Seekers registration left incomplete", titleKey: "seekersRegistrationLeft"},
  {title: "Professionals registration left incomplete", titleKey: "comfortersRegistrationLeft"}
];

const SectionTopAdminCards = ({ countsData, id }) => {
  return (
    <section className={styles.topAdminCards} id={id}>
      {titleCards.map((item, index) => (
        <AdminCard key={index} title={item.title} count={Math.round(countsData[item.titleKey])} />
      ))}
    </section>
  );
};

export default SectionTopAdminCards;
