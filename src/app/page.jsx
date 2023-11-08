import styles from "./homepage.module.css";
import Link from "next/link";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/categoryList";
import CardList from "./components/cardList/CardList";
import MenuMain from "./components/menu/MenuMain";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <MenuMain />
      </div>
    </div>
  );
}
