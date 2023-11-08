// import Menu from '../components/menu/MenuMain';
import MenuMain from '@/components/menu/MenuMain';
import styles from './singlePage.module.css';
import Comments from '@/context/comments/Comments';
import Image from 'next/image';

export default function SinglePage() {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum officia quo reprehenderit quae facilis voluptatibus quidem asperiores dignissimos.</h2>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Vishal Singh</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.imge} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore ullam velit necessitatibus ex, consequuntur blanditiis nemo harum explicabo non voluptates adipisci itaque dolores doloremque repellat laboriosam, vero reprehenderit pariatur.
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique necessitatibus, animi sed deleniti est illum porro harum assumenda aliquid voluptas itaque voluptatem nam aspernatur iusto vitae minus optio, recusandae neque?
                            </p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure officiis quidem nulla distinctio architecto quis ex eius, excepturi iste beatae illo consequuntur! Eum fuga illum earum neque porro ratione.
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed temporibus eligendi debitis fugit fuga aliquam explicabo. Ex fugiat quisquam ipsa commodi blanditiis repudiandae enim quis quam repellendus! Suscipit, nostrum?
                            </p>
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <MenuMain />
            </div>
        </div>
    )
}
