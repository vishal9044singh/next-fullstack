'use client'
import { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

export default function ThemeToggle() {
    const { toggle, theme } = useContext(ThemeContext);
    return (
        <div className={styles.container} style={theme == 'light' ? { backgroundColor: 'black' } : { backgroundColor: 'white' }} onClick={toggle}>
            <div className={styles.ball} style={theme == 'light' ? { left: 1, backgroundColor: "white" } : { right: 1, backgroundColor: 'black' }} ></div>
        </div>
    )
}