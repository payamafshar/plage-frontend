import { useEffect, useState } from "react";
import { fetchAPI } from "../functions/fetchAPI";
import styles from "../styles/Main.module.css";
import axios from "axios";
import Image from "next/image";
import pizza from "../components/assets/peperoni.jpg";

const Main = (props) => {
  const { title, text, price, image, src } = props.data;
  return (
    <div className={styles.container}>
      <div>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.fake}>
          <p className={styles.text}>
            {text}
            <br />
          </p>
        </div>
      </div>

      <div className={styles.pic}>
        <Image
          // loader={() => {
          //   return image;
          // }}
          unoptimized
          src={image}
          alt="hello"
          width={130}
          height={140}
        />
      </div>
      <div className={styles.price}>
        {price} <span className={styles.toman}>هزار تومان</span>
      </div>
    </div>
  );
};

export default Main;
