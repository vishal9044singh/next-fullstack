import React from "react";
import styles from './menuPost.module.css';
import Link from "next/link";
import Image from "next/image";

export default function MenuPost({ withImage }) {
    return (
        <div className={styles.items}>
            <Link className={styles.item} href='/'>
                {withImage && <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer} >
                    <span className={`${styles.category} ${styles.travel}`}>Travel</span>
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a quia iste in magni excepturi
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Vishal Singh - </span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link className={styles.item} href='/'>
                {withImage && <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer} >
                    <span className={`${styles.category} ${styles.culture}`}>Culture</span>
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a quia iste in magni excepturi
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Vishal Singh - </span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link className={styles.item} href='/'>
                {withImage && <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer} >
                    <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a quia iste in magni excepturi
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Vishal Singh - </span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
            <Link className={styles.item} href='/'>
                {withImage && <div className={styles.imageContainer}>
                    <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                </div>}
                <div className={styles.textContainer} >
                    <span className={`${styles.category} ${styles.style}`}>Style</span>
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe a quia iste in magni excepturi
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Vishal Singh - </span>
                        <span className={styles.date}>10.03.2023</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
