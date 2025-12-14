import { FaImages, FaRegHeart, FaRegComment } from "react-icons/fa"
import SecondLogo from "../assets/second-logo.svg?react"

import styles from "../styles/components/Ig.module.css"

const Ig = () => {
    return (
        <aside className={`inner`}>
            <div className={styles.ig}>
                <div className={styles.igSideText}>
                    <div>
                        Follow us on Instagram!
                        <div>
                            <strong><a href="https://www.instagram.com/bavaria.motors">@car.mania</a></strong>
                        </div>
                    </div>
                    <SecondLogo className={`cm-logo ${styles.igSideTextLogo}`} />
                </div>
                <div className={styles.igPosts}>
                    <a href="https://www.instagram.com/p/DRb_sJcjPCy" className={styles.igPostsLink}>
                        <img className={styles.igPostsImg} src="/mclaren.jpg" alt="McLaren" />
                        <FaImages className={styles.igPostsMediaIcon} />
                        <div className={styles.igPostsText}>
                            <div className={styles.igPostsTextLine}>
                                <FaRegHeart /> 583
                            </div>
                            <div className={styles.igPostsTextLine}>
                                <FaRegComment /> 3
                            </div>
                            <div className={`${styles.igPostsTextLine} ${styles.igPostsComment}`}>
                                We sold this Mclaren 600 LT in the color 'MSO Lantana Purple' 
                                on request and delivered the car last week to its new owner! 💜
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/p/DRb_sJcjPCy" className={styles.igPostsLink}>
                        <img className={styles.igPostsImg} src="/mclaren2.jpg" alt="McLaren" />
                        <FaImages className={styles.igPostsMediaIcon} />
                        <div className={styles.igPostsText}>
                            <div className={styles.igPostsTextLine}>
                                <FaRegHeart /> 583
                            </div>
                            <div className={styles.igPostsTextLine}>
                                <FaRegComment /> 3
                            </div>
                            <div className={`${styles.igPostsTextLine} ${styles.igPostsComment}`}>
                                We sold this Mclaren 600 LT in the color 'MSO Lantana Purple' 
                                on request and delivered the car last week to its new owner! 💜
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/p/DRb_sJcjPCy" className={styles.igPostsLink}>
                        <img className={styles.igPostsImg} src="/mclaren3.jpg" alt="McLaren" />
                        <FaImages className={styles.igPostsMediaIcon} />
                        <div className={styles.igPostsText}>
                            <div className={styles.igPostsTextLine}>
                                <FaRegHeart /> 583
                            </div>
                            <div className={styles.igPostsTextLine}>
                                <FaRegComment /> 3
                            </div>
                            <div className={`${styles.igPostsTextLine} ${styles.igPostsComment}`}>
                                We sold this Mclaren 600 LT in the color 'MSO Lantana Purple' 
                                on request and delivered the car last week to its new owner! 💜
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/p/DQFE7FGjGl0" className={styles.igPostsLink}>
                        <img className={styles.igPostsImg} src="/812.jpg" alt="Ferrari" />
                        <FaImages className={styles.igPostsMediaIcon} />
                        <div className={styles.igPostsText}>
                            <div className={styles.igPostsTextLine}>
                                <FaRegHeart /> 1,054
                            </div>
                            <div className={styles.igPostsTextLine}>
                                <FaRegComment /> 6
                            </div>
                            <div className={`${styles.igPostsTextLine} ${styles.igPostsComment}`}>
                                When you want something different than Rosso. 😉
                                This Ferrari 812 GTS wears Viola Hong Kong, a Special 2-Layer metallic paint
                                that shifts with the light — deep, dark purple turning vibrant under the sun.
                                Carbon on the outside, carbon on the inside, with yellow accents that make it pop.
                                Atelier Ferrari at its finest.
                                Now available!
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </aside>
    )
}

export default Ig;