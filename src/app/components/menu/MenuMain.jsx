import React from "react";
import styles from './menuMain.module.css';
import MenuPost from "./menuPost/MenuPost";
import MenuCategories from "./menuCategories/MenuCategories";

export default function MenuMain() {
    return (
        <div className={styles.container}>

            {/* //1st container */}
            <h2 className={styles.subtitle}>What's Hot</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPost withImage={false} />

            {/* 2nd container */}
            <h2 className={styles.subtitle}>Discover by Topic</h2>
            <h1 className={styles.title}>Category</h1>
            <MenuCategories />

            {/* 3rd container */}
            <h2 className={styles.subtitle}>Choosen by the Editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPost withImage={true} />

        </div>
    )
}
