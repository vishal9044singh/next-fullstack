import styles from './card.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src='/p1.jpeg' alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.details}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque alias accusantium illo, tempora enim minus! Sit, ipsa aliquid earum ut non voluptate veniam sint facere dolorem enim eos. Perspiciatis.</p>
                <Link className={styles.link} href='/'>Read More</Link>
            </div>
        </div>
    )
}
