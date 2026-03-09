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
                                We perform all service operations, including work covered by the vehicle warranty, as well as extended repairs after the manufacturer’s warranty for VW and AUDI vehicles.
                                We approach every automobile with the utmost care and attention to ensure it remains in perfect condition.
                                Book a service appointment, visit us, and entrust your vehicle to the hands of professionals.
                            </div>
                            <ul className={styles.serviceList}>
                                <li>Warranty and post-warranty service</li>
                                <li>Vehicle diagnostics</li>
                                <li>Tire service</li>
                                <li>Wheel alignment inspection and adjustment</li>
                                <li>Bodywork and paintwork repairs</li>
                                <li>Hand car washing and interior cleaning, deep interior cleaning</li>
                                <li>Discounted hourly rates and parts prices for vehicles older than 7 years</li>
                                <li>Express service, pick-up service</li>
                                <li>Complete handling of insurance claims</li>
                                <li>Arranging technical inspection (STK) and emissions testing</li>
                                <li>Emergency roadside assistance – mobile service</li>
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