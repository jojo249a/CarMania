import ServiceContact from "../../components/ServiceContact"

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
                <section>
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.infoWrap}>
                            <div className={styles.serviceDescription}>
                                Postaráme se o kompletní přepravu vašeho vozu bez nutnosti osobní návštěvy servisu. 
                                Vůz vyzvedneme u vás doma nebo ve firmě, zajistíme veškeré servisní úkony a následně jej bezpečně vrátíme zpět. 
                                Služba je ideální pro vytížené klienty i majitele prémiových vozů, kteří hledají pohodlí, jistotu a profesionální péči.
                            </div>
                            <ul className={styles.serviceList}>
                                <li>Vyžvednutí vozu u zákazníka</li>
                                <li>Bezpečný převoz specializovaným transportem</li>
                                <li>Doručení po dokončení servisu</li>
                                <li>Možnost expresního vyřízení</li>
                                <li>Provoz v rámci ČR, SK i zahraničí</li>
                                <li>Informace o průběhu servisního zásahu</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container sectionSpacing">
                        <div className={styles.serviceImages}>
                            <div className={styles.imgWrap}>
                                <img src="/transport.jpg" alt="Service" className={styles.img} />
                            </div>
                            <div className={styles.imgWrap}>
                                <img src="/transport3.jpg" alt="Service" className={styles.img} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ServiceContact />
        </>
    )
}

export default Transport;