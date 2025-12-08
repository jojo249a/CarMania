import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"
import CZFlag from "..//assets/cz-flag.svg?react"
import SKFlag from "../assets/sk-flag.svg?react"

import styles from "../styles/components/Banner.module.css"

const Banner = () => {
    return (
        <aside className={styles.banner}>
            <img className={styles.bannerImg} src="/showroom2.jpg" alt="Showroom" />
            <div className={styles.bannerText}>
                <h2 className={styles.bannerHeading}>Showrooms CarMania</h2>
                <div className={styles.bannerButtons}>
                    <Link to="/" className={`button buttonTransp ${styles.bannerButton}`}>
                        <SKFlag className="buttonIcon" />
                        <span><strong>ŽILINA</strong> Showroom</span>
                        <FaChevronRight className="buttonArrow" />
                    </Link>
                    <Link to="/" className={`button buttonTransp ${styles.bannerButton}`}>
                        <CZFlag className="buttonIcon" />
                        <span><strong>OSTRAVA</strong> Showroom</span>
                        <FaChevronRight className="buttonArrow" />
                    </Link>
                </div>
            </div>
        </aside>
    );
}

export default Banner;