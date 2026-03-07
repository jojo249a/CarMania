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
                                Nabízíme detailní péči o karoserii i interiér, která dokáže obnovit vzhled vozu a prodloužit jeho životnost. 
                                Ruční práce, špičkové přípravky a moderní techniky zajistí, že váš automobil bude chráněný, lesklý a připravený na každou sezónu. 
                                Perfektní pro luxusní, sportovní i běžná vozidla.
                            </div>
                            <ul className={styles.serviceList}>
                                <li>Strojní a ruční korekce laku</li>
                                <li>Aplikace keramické ochrany laku</li>
                                <li>Ochranné PPF fólie</li>
                                <li>Hloubkové čištění interiéru</li>
                                <li>Ošetření kůže a plastů</li>
                                <li>Leštění skel, světel a detailů</li>
                                <li>Příprava vozu na sezónu / výstavu</li>
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