import ShowroomsBanner from "../components/ShowroomsBanner";
import ServiceBanner from "../components/ServiceBanner";
import Banners from "../components/Banners";
import Breadcrumbs from "../components/Breadcrumbs"
import Heading from "../components/Heading"

import styles from "../styles/pages/Services.module.css"

const Services = () => {
    return (
        <>
            <main>
                <section className="sectionFirst">
                    <Breadcrumbs />
                    <Heading>
                        Contact
                    </Heading>
                </section>
                <section>
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.serviceList}>
                            <div className={styles.serviceBlock}>
                                <img src="/service.jpg" alt="Service" className={styles.serviceImg} />
                                <div className={styles.textWrap}>
                                    <span className={styles.text}>
                                        Service of luxury and sports vehicles
                                    </span>
                                </div>
                            </div>
                            <div className={styles.serviceBlock}>
                                <img src="/service2.jpg" alt="Service" className={styles.serviceImg} />
                                <div className={styles.textWrap}>
                                    <span className={styles.text}>
                                        Spare parts and accessories
                                    </span>
                                </div>
                            </div>
                            <div className={styles.serviceBlock}>
                                <img src="/detailing.jpg" alt="Service" className={styles.serviceImg} />
                              <div className={styles.textWrap}>
                                    <span className={styles.text}>
                                        Pick-up & Door-to-Door Service
                                    </span>
                                </div>
                            </div>
                              <div className={styles.serviceBlock}>
                                <img src="/detailing2.png" alt="Service" className={styles.serviceImg} />
                                <div className={styles.textWrap}>
                                    <span className={styles.text}>
                                        Professional detailing and car protection
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Banners>
                <ShowroomsBanner />
                <ServiceBanner />
            </Banners>
        </>
    )
}

export default Services;