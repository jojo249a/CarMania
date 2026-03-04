import styles from "../../styles/pages/Service.module.css"

const PartsAndAccessories = () => {
    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className={styles.hero}>
                        <div className={styles.heroImgWrap}>
                            <img src="/parts-and-accessories.jpg" alt="Hero" className={styles.heroImg} />
                        </div>
                        <div className={styles.text}>
                            <h1 className={styles.heading}>
                                Spare parts and accessories
                            </h1>
                            <p className={styles.description}>
                                We provide original spare parts and their delivery even to unauthorized service centers within the NORA program.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PartsAndAccessories;