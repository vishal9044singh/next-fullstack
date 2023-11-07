import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './categoryList.module.css';

export default function CategoryList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories} >
                <Link href='/' className={`${styles.category} ${styles.style}`}>
                    <Image src="/style.png" alt="" width={40} height={40} className={styles.image} />
                    Style
                </Link>
                <Link href='/' className={`${styles.category} ${styles.food}`}>
                    <Image src="/food.png" alt="" width={40} height={40} className={styles.image} />
                    Food
                </Link>
                <Link href='/' className={`${styles.category} ${styles.travel}`}>
                    <Image src="/travel.png" alt="" width={40} height={40} className={styles.image} />
                    Travel
                </Link>
                <Link href='/' className={`${styles.category} ${styles.culture}`}>
                    <Image src="/culture.png" alt="" width={40} height={40} className={styles.image} />
                    Culture
                </Link>
                <Link href='/' className={`${styles.category} ${styles.coding}`}>
                    <Image src="/coding.png" alt="" width={40} height={40} className={styles.image} />
                    Coding
                </Link>
                <Link href='/' className={`${styles.category} ${styles.fashion}`}>
                    <Image src="/coding.png" alt="" width={40} height={40} className={styles.image} />
                    Fashion
                </Link>
            </div>
        </div>
    )
}
