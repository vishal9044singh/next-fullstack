import React from "react";
import Image from "next/image";
import styles from './footer.module.css';
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src='/logo.png' alt="lama blog" width={50} height={50} />
                    <h1 className={styles.logoText}>LamaLogo</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita nihil rem reprehenderit laboriosam, eaque repellat, id eveniet laborum impedit, officia sequi ea dicta deserunt vel illo aspernatur nisi fuga sapiente.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita nihil rem reprehenderit laboriosam, eaque repellat, id eveniet laborum impedit, officia sequi ea dicta deserunt vel illo aspernatur nisi fuga sapiente.
                </p>
                <div className={styles.icons}>
                    <Image src='/facebook.png' alt="" width={20} height={20} />
                    <Image src='/instagram.png' alt="" width={20} height={20} />
                    <Image src='/tiktok.png' alt="" width={20} height={20} />
                    <Image src='/youtube.png' alt="" width={20} height={20} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Blog</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href='/'>Fashion</Link>
                    <Link href='/'>Coding</Link>
                    <Link href='/'>Culture</Link>
                    <Link href='/'>Travel</Link>
                    <Link href='/'>Food</Link>
                    <Link href='/'>Style</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href='/'>Facebook</Link>
                    <Link href='/'>Instagram</Link>
                    <Link href='/'>Tiktok</Link>
                    <Link href='/'>Youtube</Link>
                </div>
            </div>
        </div>
    )
}
