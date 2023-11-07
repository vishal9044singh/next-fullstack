import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './menu.module.css';

export default function Menu() {
    return (
        <div className={styles.container}>
            
            {/* //1st container */}
            <h2 className={styles.subtitle}>What's Hot</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                <Link className={styles.item} href='/'>
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

            {/* 2nd container */}
            <h2 className={styles.subtitle}>Discover by Topic</h2>
            <h1 className={styles.title}>Category</h1>
            <div className={styles.categoryList}>
                <Link href='/' className={`${styles.categoryItem} ${styles.categoryName}`} >Fashion</Link>
                <Link href='/' className={`${styles.categoryItem} ${styles.categoryName}`} >Culture</Link>
                <Link href='/' className={`${styles.categoryItem} ${styles.categoryName}`} >Style</Link>
                <Link href='/' className={`${styles.categoryItem} ${styles.categoryName}`} >Travel</Link>
                <Link href='/' className={`${styles.categoryItem} ${styles.categoryName}`} >Coding</Link>
                <Link href='/' className={`${styles.categoryItem} ${styles.categoryName}`} >Food</Link>
            </div>


            {/* 3rd container */}
            <h2 className={styles.subtitle}>Choosen by the Editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <div className={styles.items}>
                <Link className={styles.item} href='/'>
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
                    <div className={styles.imageContainer}>
                        <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                    </div>
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
        </div>
    )
}
