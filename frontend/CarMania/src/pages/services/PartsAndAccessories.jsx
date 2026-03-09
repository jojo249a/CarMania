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
                                CarMania s.r.o. offers the possibility to order original spare parts and accessories.
                                We also provide the supply of spare parts for independent repair shops within the
                                NORA SALES CENTER program (Unauthorized Customers with Discount).
                            </div>
                            <ul className={styles.serviceList}>
                                <li>Audi and Volkswagen – original parts directly from the manufacturer</li>
                                <li>Škoda and SEAT – complete range of parts and accessories</li>
                                <li>Luxury vehicles – Porsche, Ferrari, Bentley, BMW, Mercedes, Lamborghini, etc.</li>
                                <li>Extensive range of spare parts in stock</li>
                                <li>Fast ordering and delivery within 24 hours</li>
                                <li>Order fulfillment in the shortest possible time</li>
                                <li>Constant and up-to-date selection of accessories</li>
                                <li>Favorable conditions for independent service centers and partners</li>
                                <li>Professional consulting and technical support</li>
                                <li>Delivery of original parts directly to your workshop</li>
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