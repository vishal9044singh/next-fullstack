import React from "react";
import styles from './cardList.module.css';
import Card from "../card/Card";

export default function CardList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div style={styles.posts}>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
