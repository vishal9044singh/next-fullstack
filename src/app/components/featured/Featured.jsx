import React from "react";
import Image from "next/image";
import styles from './featured.module.css';

export default function Featured() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil necessitatibus iure! Commodi veritatis magnam expedita ipsum
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src='/p1.jpeg' alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h2 className={styles.postTitle}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas cumque harum optio quae
                    </h2>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus excepturi culpa odio ipsam, inventore, delectus iure dolorem voluptatum quos itaque repudiandae aliquam deleniti modi aspernatur est sint, corporis facilis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus excepturi culpa odio ipsam, inventore, delectus iure dolorem voluptatum quos itaque repudiandae aliquam deleniti modi aspernatur est sint, corporis facilis?
                    </p>
                    <button className={styles.button} >Read More</button>
                </div>
            </div>
        </div>
    )
}
