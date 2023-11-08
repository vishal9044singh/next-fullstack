import React from "react";
import styles from './menuCategories.module.css';
import Link from "next/link";

export default function MenuCategories() {
    return (
        <div className={styles.categoryList}>
            <Link href='/' className={`${styles.category} ${styles.style}`}>Style</Link>
            <Link href='/' className={`${styles.category} ${styles.food}`}>Food</Link>
            <Link href='/' className={`${styles.category} ${styles.travel}`}>Travel</Link>
            <Link href='/' className={`${styles.category} ${styles.culture}`}>Culture</Link>
            <Link href='/' className={`${styles.category} ${styles.coding}`}>Coding</Link>
            <Link href='/' className={`${styles.category} ${styles.fashion}`}>Fashion</Link>
        </div>
    )
}
