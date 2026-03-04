import styles from "../../styles/pages/Service.module.css"

const Service = () => {
    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className={styles.hero}>
                        <div className={styles.heroImgWrap}>
                            <img src="/service2.jpg" alt="Hero" className={styles.heroImg} />
                        </div>
                        <div className={styles.text}>
                            <h1 className={styles.heading}>
                                Service
                            </h1>
                            <p className={styles.description}>
                                We provide warranty and post-warranty service for luxury and sports cars with maximum care and a professional approach.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Service;