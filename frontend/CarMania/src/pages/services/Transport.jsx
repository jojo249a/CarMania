import styles from "../../styles/pages/Service.module.css"

const Transport = () => {
    return (
        <>
           <main>
                <section className="sectionFirst">
                    <div className={styles.hero}>
                        <div className={styles.heroImgWrap}>
                            <img src="/transport3.jpg" alt="Hero" className={styles.heroImg} />
                        </div>
                        <div className={styles.text}>
                            <h1 className={styles.heading}>                        
                                Pick-up & door-to-door service
                            </h1>
                            <p className={styles.description}>
                                We provide pick-up, service and safe delivery of the car back without the need for you to visit the service in person.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Transport;