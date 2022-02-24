import React, { useState } from "react";

import Menu from "./components/Menu";
import Categories from "./components/Categories";
import menu from "./data";

import styles from "./App.module.css";

const categoryArr = new Set(menu.map((item) => item.category));
//@ts-ignore
const allCategories = ["all", ...categoryArr];
function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const [isClick, setClick] = useState(false);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);

    setClick(!isClick);
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.bigHeading}>Food Menus</h1>
      <Categories
        allCategories={allCategories}
        filterItems={filterItems}
        isClick={isClick}
      />
      <Menu data={menuItems} />
    </div>
  );
}

export default App;
