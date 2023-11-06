'use client'
import { useState } from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';

export default function AuthLinks() {
    const [open, setOpen] = useState(false)
    const status = "unauthenticated";

    return (
        <>
            {status == 'notauthenticated' ? (
                <Link href='/login' className={styles.link}>Login</Link>
            ) :
                (
                    <>
                        <Link href='/write' className={styles.link} >Write</Link>
                        <Link href='/logout' className={styles.link} >Logout</Link>
                    </>
                )}
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
                        {status == 'notauthenticated' ? (
                            <Link href='/login'>Login</Link>
                        ) :
                            (
                                <>
                                    <Link href='/write'>Write</Link>
                                    <Link href='/logout'>Logout</Link>
                                </>
                            )}
                    </div>
                )
            }
        </>
    )
}