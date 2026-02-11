import { FaChevronRight, FaPhone, FaRegEnvelope} from "react-icons/fa";
import SecondLogo from "../assets/second-logo.svg?react"
import ContactForm from "../components/Contact"
import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Buttons from "../components/Buttons";
import Button from "../components/Button";

import styles from "../styles/pages/Contact.module.css"

const Contact = () => {
    return (
        <>  
            <main>
                <section className="sectionFirst">
                    <div className="container sectionSpacing">
                        <Breadcrumbs />
                        <Heading>
                            <SecondLogo className={`headingLogo`}/>
                            Contact
                        </Heading>
                    </div>
                    <div className="container sectionSpacing">
                        <div className={styles.contactWrap}>
                            <div className={styles.showroomsWrap}>
                                <div className={styles.showroomZilina}>
                                    <h3 className={styles.contactHeading}>
                                        Showroom Žilina
                                    </h3>
                                    <div className={styles.showroomsAddress}>
                                        <div>Bavaria Motors NV</div>
                                        <div>Kortrijksesteenweg 306</div>
                                        <div>8530 Harelbeke</div>
                                    </div>
                                    <div className={styles.showroomsContact}>
                                        <div className="link"><FaPhone className={styles.contactIcon}/>+420 596 710 183</div>
                                        <div className="link"><FaRegEnvelope className={styles.contactIcon}/>info@ar-cars.cz</div>
                                    </div>
                                </div>
                                <div className={styles.showroomOstrava}>
                                    <h3 className={styles.contactHeading}>
                                        Showroom Ostrava
                                    </h3>
                                    <div className={styles.showroomsAddress}>
                                        <div>Bavaria Motors NV</div>
                                        <div>Kortrijksesteenweg 306</div>
                                        <div>8530 Harelbeke</div>
                                    </div>
                                    <div className={styles.showroomsContact}>
                                        <div className="link"><FaPhone className={styles.contactIcon}/>+420 596 710 183</div>
                                        <div className="link"><FaRegEnvelope className={styles.contactIcon}/>info@ar-cars.cz</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.timetableWrap}>
                                <h3 className={styles.contactHeading}>Opening hours</h3>
                                <div className={styles.showroomSelect}>
                                    <span>Žilina</span>
                                    <span>Ostrava</span>
                                </div>
                                <table>
                                    <tr>a</tr>
                                    <tr>a</tr>
                                    <tr>a</tr>
                                    <tr></tr>
                                    <tr></tr>
                                    <tr></tr>
                                    <tr></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ContactForm />  
        </>
    )
}

export default Contact;