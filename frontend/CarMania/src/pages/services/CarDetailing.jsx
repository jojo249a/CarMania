import styles from "../../styles/pages/Service.module.css"

const CarDetailing = () => {
    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className={styles.hero}>
                        <div className={styles.heroImgWrap}>
                            <img src="/detailing2.jpg" alt="Hero" className={styles.heroImg} />
                        </div>
                        <div className={styles.text}>
                            <h1 className={styles.heading}>
                                Car detailing
                            </h1>
                            <p className={styles.description}>
                                Severe weather conditions can be a nightmare for your daily driver's paintwork. 
                                CarMania can offer various solutions that protect your car against harsh weather conditions.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CarDetailing;