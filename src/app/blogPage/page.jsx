import React from "react";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/MenuMain";
import styles from './blogPage.module.css';

export default function BlogPage() {

    return (
        <div className={styles.container}>
            <div className={styles.title}>Style Blog</div>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}
