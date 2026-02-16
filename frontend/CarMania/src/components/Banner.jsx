import styles from "../styles/components/Banner.module.css"

const Banner = (props) => {
    return (
        <div className={styles.banner}>
            <img className={styles.bannerImg} src={props.src} alt={props.alt} />
            <div className={styles.bannerText}>
                <h2 className={styles.bannerHeading}>{props.heading}</h2>
                <div className={styles.bannerButtons}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Banner;