import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import ShowroomsBanner from "../components/ShowroomsBanner"
import ServiceBanner from "../components/ServiceBanner"
import Banners from "../components/Banners"
import Contact from "../components/Contact"
import Breadcrumbs from "../components/Breadcrumbs"
import Heading from "../components/Heading"

import styles from "../styles/pages/Services.module.css"

const Services = () => {
    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className="container sectionSpacing">
                        <Breadcrumbs />
                        <Heading>
                            Services
                        </Heading>
                        </div>
                </section>
                <section>
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.serviceList}>
                            <div className={styles.serviceBlock}>
                                <Link to="/services/car-detailing">
                                    <img src="/service.jpg" alt="Service" className={styles.serviceImg} />
                                    <div className={styles.textWrap}>
                                        <span className={styles.text}>
                                            Service of luxury and sports vehicles
                                        </span>
                                        <div className={styles.arrowWrap}>
                                            <FaArrowRight className={styles.arrow}/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.serviceBlock}>
                                <Link to="/services/car-detailing">
                                    <img src="/service2.jpg" alt="Service" className={styles.serviceImg} />
                                    <div className={styles.textWrap}>
                                        <span className={styles.text}>
                                            Spare parts and accessories
                                        </span>
                                        <div className={styles.arrowWrap}>
                                            <FaArrowRight className={styles.arrow}/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.serviceBlock}>
                                <Link to="/services/car-detailing">
                                    <img src="/detailing.jpg" alt="Service" className={styles.serviceImg} />
                                    <div className={styles.textWrap}>
                                        <span className={styles.text}>
                                            Pick-up & Door-to-Door Service
                                        </span>
                                        <div className={styles.arrowWrap}>
                                            <FaArrowRight className={styles.arrow}/>
                                        </div>
                                    </div>
                                 </Link>
                            </div>
                            <div className={styles.serviceBlock}>
                                <Link to="/services/car-detailing">
                                    <img src="/detailing2.png" alt="Service" className={styles.serviceImg} />
                                    <div className={styles.textWrap}>
                                        <span className={styles.text}>
                                            Professional detailing and car protection
                                        </span>
                                        <div className={styles.arrowWrap}>
                                            <FaArrowRight className={styles.arrow}/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>

                </section>
            </main>
            <Contact />
            <Banners>
                <ShowroomsBanner />
                <ServiceBanner />
            </Banners>
        </>
    )
}

export default Services;