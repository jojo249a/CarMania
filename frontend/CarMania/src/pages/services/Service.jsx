import ServiceContact from "../../components/ServiceContact"

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
                <section>
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.infoWrap}>
                            <div className={styles.serviceDescription}>
                                Provádíme veškeré servisní zásahy včetně prací, které kryje záruka vozu, i nadstandardní opravy po záruce automobilek VW a AUDI.
                                Ke každému automobilu přistupujeme s maximální péčí a pozorností, abychom zajistili jeho perfektní stav. 
                                Objednejte se na servis, navštivte nás a svěřte svůj automobil do rukou profesionálů.
                            </div>
                            <ul className={styles.serviceList}>
                                <li>Záruční a pozáruční servis</li>
                                <li>Diagnostika vozidel</li>
                                <li>Pneuservis</li>
                                <li>Kontrola a nastavení geometrie</li>
                                <li>Karosářské a lakýrnické práce</li>
                                <li>Ruční mytí vozů a čištění interiérů, hloubkové čištění interiérů</li>
                                <li>Zvýhodněnou hodinovou sazbu a zvýhodněné ceny dílů pro vozy starší 7 let</li>
                                <li>Express servis, pick-up servis</li>
                                <li>Kompletní řešení pojistných událostí</li>
                                <li>Zajištění STK a emisí</li>
                                <li>V případě nouze asistenční službu – mobil servis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container sectionSpacing">
                        <div className={styles.serviceImages}>
                            <div className={styles.imgWrap}>
                                <img src="/service.jpg" alt="Service" className={styles.img} />
                            </div>
                            <div className={styles.imgWrap}>
                                <img src="/service2.jpg" alt="Service" className={styles.img} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ServiceContact />
        </>
    )
}

export default Service;