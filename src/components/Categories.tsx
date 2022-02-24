import React from "react";

import styles from "./Categories.module.css";

interface ICategoryProps {
  allCategories: string[];
  filterItems: (text: string) => void;
  isClick: boolean;
}
export default function Categories(props: ICategoryProps) {
  const { allCategories, filterItems, isClick } = props;

  return (
    <>
      <div className={styles.row}>
        <div className={styles.menuTabing}>
          <ul className={styles.btnLists}>
            {allCategories &&
              allCategories.length > 0 &&
              allCategories.map((category: string, index: number) => {
                return (
                  <li key={index}>
                    <a
                      type="button"
                      onClick={() => filterItems(category)}
                      href="#"
                    >
                      {category}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
