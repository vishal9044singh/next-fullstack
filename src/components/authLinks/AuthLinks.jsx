'use client'
import { useState } from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';

export default function AuthLinks() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Link href='/write' className={styles.link} >Write</Link>
            <Link href='/profile' className={styles.link} >Profile</Link>
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line} ></div>
                <div className={styles.line} ></div>
            </div>
            {
                open && (
                    <div className={styles.responsiveMenu} >
                        <Link href='/'>Homepage</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Contact</Link>
                        <Link href='/write'>Write</Link>
                        <Link href='/logout'>Logout</Link>
                    </div>
                )
            }
        </>
    )
}
