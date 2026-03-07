import ServiceContact from "../../components/ServiceContact"

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
                <section>
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.infoWrap}>
                            <div className={styles.serviceDescription}>
                            Společnost AR CARS s.r.o. nabízí možnost objednávek originálních náhradních dílů a příslušenství. 
                            Zajišťujeme také dodávky náhradních dílů pro neautorizované opravny v rámci programu NORA PRODEJNÍ CENTRUM (Neautorizovaní Odběratelé s Rabatem).
                            </div>
                            <ul className={styles.serviceList}>
                                <li>Audi a Volkswagen – originální díly přímo od výrobce</li>
                                <li>Škoda a SEAT – kompletní sortiment dílů a příslušenství</li>
                                <li>Luxusní vozy – Porsche, Ferrari, Bentley, BMW, Mercedes, Lamborghini aj.</li>
                                <li>Rozsáhlý sortiment náhradních dílů skladem</li>
                                <li>Rychlé objednávky a dodání do 24 hodin</li>
                                <li>Realizace zakázek v nejkratším možném termínu</li>
                                <li>Stálá a aktuální nabídka příslušenství</li>
                                <li>Výhodné podmínky pro nezávislé servisy a partnery</li>
                                <li>Odborné poradenství a technická podpora</li>
                                <li>Rozvoz originálních dílů přímo do vaší provozovny</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container sectionSpacing">
                        <div className={styles.serviceImages}>
                            <div className={styles.imgWrap}>
                                <img src="/parts-and-accessories.jpg" alt="Service" className={styles.img} />
                            </div>
                            <div className={styles.imgWrap}>
                                <img src="/parts-and-accessories3.jpg" alt="Service" className={styles.img} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ServiceContact />
        </>
    )
}

export default PartsAndAccessories;