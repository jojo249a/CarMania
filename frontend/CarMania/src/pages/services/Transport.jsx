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
                                We will take care of the complete transport of your vehicle without the need for a personal visit to the service center.
                                We will pick up the vehicle at your home or company, carry out all necessary service operations, and safely return it afterward.
                                This service is ideal for busy clients and owners of premium vehicles who seek convenience, reliability, and professional care.
                            </div>
                            <ul className={styles.serviceList}>
                                <li>Vehicle pick-up at the customer’s location</li>
                                <li>Safe transport using specialized transport vehicles</li>
                                <li>Delivery after the service is completed</li>
                                <li>Express service option available</li>
                                <li>Service available within the Czech Republic, Slovakia, and abroad</li>
                                <li>Updates about the progress of the service work</li>
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