import React from "react";

import styles from "./Menu.module.css";

import { uppercaseString } from "../data";

interface MenuProps {
  id: number;
  title: string;
  category: string;
  price: number;
  imgURL: string;
  desc: string;
}

interface IMenu {
  data: MenuProps[];
}

export default function Menu(props: IMenu) {
  const { data } = props;
  return (
    <>
      <div className={styles.row}>
        {data &&
          data.length > 0 &&
          data.map((item: MenuProps) => {
            const { id, title, category, price, imgURL, desc } = item;
            return (
              <div className={styles.col} key={id}>
                <div className={styles.nenuItem}>
                  <div className={styles.image}>
                    <a href="#">
                      <img src={imgURL} alt={title} />
                    </a>
                  </div>
                  <div className={styles.info}>
                    <div className={styles.title}>
                      <a href="#">
                        <h2 className={styles.heading}>
                          {uppercaseString(title)}
                        </h2>
                      </a>
                      <span className={styles.price}>${price}</span>
                    </div>
                    <p className={styles.description}>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
