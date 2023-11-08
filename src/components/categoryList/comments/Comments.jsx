import styles from './comments.module.css';
import Image from 'next/image';

export default function () {
    const status = "authenticated";
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status == "authenticated" ?
                    (
                        <div className={styles.write}>
                            <textarea placeholder='Write a Comment...' className={styles.input}></textarea>
                            <button className={styles.button}>Send</button>
                        </div>
                    )
                    :
                    (
                        <button className={styles.loginBtn}>Login to Write a Comment</button>
                    )
            }
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>Vishal Singh</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                </div>
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quos perferendis neque sapiente, alias debitis</p>
            </div>
        </div>
    )
}
