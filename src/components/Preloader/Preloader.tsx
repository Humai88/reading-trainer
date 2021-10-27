import React from "react";
import loader from "./../../assets/images/Color-Line-Loading.svg";
import styles from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <div className={styles.backdrop}>
      <img src={loader} alt="loader" className={styles.img} />
    </div>
  );
};
