import { FaPhone, FaRegEnvelope, FaYoutube, FaInstagram, FaFacebook, FaLinkedinIn} from "react-icons/fa"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SecondLogo from "../assets/second-logo.svg?react"
import ContactForm from "../components/Contact"
import Breadcrumbs from "../components/Breadcrumbs"
import Heading from "../components/Heading"
import Buttons from "../components/Buttons"
import Button from "../components/Button"
import Ig from "../components/Ig"

import styles from "../styles/pages/Contact.module.css"

const Contact = () => {
    const [selectedCity , setSelectedCity] = useState("Zilina");
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });

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
                    <div className="container sectionSpacing sectionInner">
                        <div className={styles.contactWrap}>
                            <div className={styles.showroomsWrap}>
                                <div className={styles.showroomsDetails}>
                                    <h3 className={styles.contactHeading}>
                                        Showroom Žilina
                                    </h3>
                                    <div className={styles.showroomsAddress}>
                                        <div>CarMania, s. r. o.</div>
                                        <div>Einsteinova 3692/21,</div>
                                        <div>851 01 Petržalka</div>
                                    </div>
                                    <div className={styles.showroomsContact}>
                                        <div className="link"><FaPhone className={styles.contactIcon}/>+421 948 911 964</div>
                                        <div className="link"><FaRegEnvelope className={styles.contactIcon}/>info@ar-cars.cz</div>
                                    </div>
                                    <div className={styles.showroomsMedia}>
                                        <Link to=""><FaFacebook className={styles.showroomsMediaIcon}/></Link>
                                        <Link to=""><FaInstagram className={styles.showroomsMediaIcon}/></Link>
                                        <Link to=""><FaYoutube className={styles.showroomsMediaIcon}/></Link>
                                        <Link to=""><FaLinkedinIn className={styles.showroomsMediaIcon}/></Link>
                                    </div>
                                </div>
                                <div className={styles.showroomsDetails}>
                                    <h3 className={styles.contactHeading}>
                                        Showroom Ostrava
                                    </h3>
                                    <div className={styles.showroomsAddress}>
                                        <div>CarMania, s. r. o.</div>
                                        <div>Krmelínská 736/7,</div>
                                        <div>720 00 Ostrava</div>
                                    </div>
                                    <div className={styles.showroomsContact}>
                                        <div className="link"><FaPhone className={styles.contactIcon}/>+420 596 710 183</div>
                                        <div className="link"><FaRegEnvelope className={styles.contactIcon}/>info@ar-cars.cz</div>
                                    </div>
                                    <div className={styles.showroomsMedia}>
                                        <Link to=""><FaFacebook className={styles.showroomsMediaIcon}/></Link>
                                        <Link to=""><FaInstagram className={styles.showroomsMediaIcon}/></Link>
                                        <Link to=""><FaYoutube className={styles.showroomsMediaIcon}/></Link>
                                        <Link to=""><FaLinkedinIn className={styles.showroomsMediaIcon}/></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.timetableWrap}>
                                <h3 className={styles.contactHeading}>Opening hours</h3>
                                <div className={styles.showroomSelect}>
                                    <button 
                                        onClick={() => setSelectedCity("Zilina")} 
                                        className={`${styles.showroomSelectOption} ${selectedCity == "Zilina" ? styles.active : ""}`}>
                                        Žilina
                                    </button>
                                    <button 
                                        onClick={() => setSelectedCity("Ostrava")}
                                        className={`${styles.showroomSelectOption} ${selectedCity == "Ostrava" ? styles.active : ""}`}>
                                        Ostrava
                                    </button>
                                </div>
                                <table className={`${styles.timetable} ${selectedCity == "Zilina" ? styles.active : ""}`}>
                                    <tbody>
                                        <tr className={`${dayName == "Monday" ? styles.active : ""}`}>
                                            <td>Monday</td>
                                            <td>8:30 - 12:00</td>
                                            <td>13:30 - 18:30</td>
                                        </tr>
                                        <tr className={`${dayName == "Tuesday" ? styles.active : ""}`}>
                                            <td>Tuesday</td>
                                            <td>8:30 - 12:00</td>
                                            <td>13:30 - 18:30</td>
                                        </tr>
                                        <tr className={`${dayName == "Wednesday" ? styles.active : ""}`}>
                                            <td>Wednesday</td>
                                            <td>8:30 - 12:00</td>
                                            <td>13:30 - 18:30</td>
                                        </tr>
                                        <tr className={`${dayName == "Thursday" ? styles.active : ""}`}>
                                            <td>Thursday</td>
                                            <td>8:30 - 12:00</td>
                                            <td>13:30 - 18:30</td>
                                        </tr>
                                        <tr className={`${dayName == "Friday" ? styles.active : ""}`}>
                                            <td>Friday</td>
                                            <td>8:30 - 12:00</td>
                                            <td>13:30 - 18:30</td>
                                        </tr>
                                        <tr className={`${dayName == "Saturday" ? styles.active : ""}`}>
                                            <td>Saturday</td>
                                            <td>8:30 - 12:00</td>
                                            <td>13:30 - 18:30</td>
                                        </tr>
                                        <tr className={`${dayName == "Sunday" ? styles.active : ""}`}>
                                            <td>Sunday</td>
                                            <td>Only by appointment</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className={`${styles.timetable} ${selectedCity == "Ostrava" ? styles.active : ""}`}>
                                    <tbody>
                                        <tr className={`${dayName == "Monday" ? styles.active : ""}`}>
                                            <td>Monday</td>
                                            <td>9:00 - 12:00</td>
                                            <td>13:30 - 17:00</td>
                                        </tr>
                                        <tr className={`${dayName == "Tuesday" ? styles.active : ""}`}>
                                            <td>Tuesday</td>
                                            <td>9:00 - 12:00</td>
                                            <td>13:30 - 17:00</td>
                                        </tr>
                                        <tr className={`${dayName == "Wednesday" ? styles.active : ""}`}>
                                            <td>Wednesday</td>
                                            <td>9:00 - 12:00</td>
                                            <td>13:30 - 17:00</td>
                                        </tr>
                                        <tr className={`${dayName == "Thursday" ? styles.active : ""}`}>
                                            <td>Thursday</td>
                                            <td>9:00 - 12:00</td>
                                            <td>13:30 - 17:00</td>
                                        </tr>
                                        <tr className={`${dayName == "Friday" ? styles.active : ""}`}>
                                            <td>Friday</td>
                                            <td>9:00 - 12:00</td>
                                            <td>13:30 - 17:00</td>
                                        </tr>
                                        <tr className={`${dayName == "Saturday" ? styles.active : ""}`}>
                                            <td>Saturday</td>
                                            <td>9:00 - 12:00</td>
                                            <td>13:30 - 17:00</td>
                                        </tr>
                                        <tr className={`${dayName == "Sunday" ? styles.active : ""}`}>
                                            <td>Sunday</td>
                                            <td>Only by appointment</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <ContactForm />  
            <Ig />
        </>
    )
}

export default Contact;