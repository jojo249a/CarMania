import ServiceContact from "../../components/ServiceContact"

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
                <section>
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.infoWrap}>
                            <div className={styles.serviceDescription}>
                                We offer detailed care for both the car body and interior that can restore the vehicle’s appearance and extend its lifespan.
                                Hand craftsmanship, premium products, and modern techniques ensure that your car remains protected, shiny, and ready for every season.
                                Perfect for luxury, sports, and everyday vehicles.
                            </div>
                            <ul className={styles.serviceList}>
                                <li>Machine and manual paint correction</li>
                                <li>Application of ceramic paint protection</li>
                                <li>Protective PPF films</li>
                                <li>Deep interior cleaning</li>
                                <li>Leather and plastic treatment</li>
                                <li>Polishing of glass, headlights, and details</li>
                                <li>Vehicle preparation for the season / exhibitions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container sectionSpacing">
                        <div className={styles.serviceImages}>
                            <div className={styles.imgWrap}>
                                <img src="/detailing2.jpg" alt="Service" className={styles.img} />
                            </div>
                                <div className={styles.imgWrap}>
                                <img src="/detailing2.png" alt="Service" className={styles.img} />
                            </div>
                            <div className={styles.imgWrap}>
                                <img src="/detailing.jpg" alt="Service" className={styles.img} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ServiceContact />
        </>
    )
}

export default CarDetailing;