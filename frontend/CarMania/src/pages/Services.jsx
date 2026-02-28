import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import ShowroomsBanner from "../components/ShowroomsBanner"
import ServiceBanner from "../components/ServiceBanner"
import Banners from "../components/Banners"
import Breadcrumbs from "../components/Breadcrumbs"
import Heading from "../components/Heading"
import ServiceContact from "../components/ServiceContact"

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
                            <Link to="/services/service" className={styles.serviceBlock}>
                                <div className={styles.serviceImgWrap}>
                                    <img src="/service.jpg" alt="Service" className={styles.serviceImg} />
                                </div>
                                <div className={styles.textWrap}>
                                    <span className={styles.text}>
                                        Service of luxury and sports vehicles
                                    </span>
                                    <div className={styles.arrowWrap}>
                                        <FaArrowRight className={styles.arrow}/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/services/parts-&-accessories" className={styles.serviceBlock}>
                                <div className={styles.serviceImgWrap}>
                                    <img src="/service2.jpg" alt="Service" className={styles.serviceImg} />
                                </div>
                                <div className={styles.textWrap}>
                                    <span className={styles.text}>
                                        Spare parts and accessories
                                    </span>
                                    <div className={styles.arrowWrap}>
                                        <FaArrowRight className={styles.arrow}/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/services/transport" className={styles.serviceBlock}>
                                <div className={styles.serviceImgWrap}>
                                    <img src="/detailing.jpg" alt="Service" className={styles.serviceImg} />
                                </div>
                                <div className={styles.textWrap}>
                                    <span className={styles.text}>
                                        Pick-up & door-to-door service
                                    </span>
                                    <div className={styles.arrowWrap}>
                                        <FaArrowRight className={styles.arrow}/>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/services/car-detailing" className={styles.serviceBlock}>
                                <div className={styles.serviceImgWrap}>
                                    <img src="/detailing2.png" alt="Service" className={styles.serviceImg} />
                                </div>
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
                </section>
                <section>

                </section>
            </main>
            <ServiceContact />
            <Banners>
                <ShowroomsBanner />
                <ServiceBanner />
            </Banners>
        </>
    )
}

export default Services;