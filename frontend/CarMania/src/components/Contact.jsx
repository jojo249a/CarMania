import { FaPhone, FaEnvelope } from "react-icons/fa"
import SecondLogo from "../assets/second-logo.svg?react"
import Button from "../components/Button"
import Heading from "../components/Heading"

import styles from "../styles/components/Contact.module.css"

const Contact = ({ carName }) => {
    return (
        <aside className="sectionWhite">
            <div className="container">
                <div className={styles.contactInner}>
                    <Heading className={styles.contactHeading}>
                        <SecondLogo className={`headingLogo`} />
                        {carName ? `Interested in this ${carName}?` : `Interested in a car?`}
                    </Heading>
                    <div className={styles.contactForm}>
                        <div className={styles.contactFormFields}>
                            <div className={styles.contactFormUserDetails}>
                                <div className={styles.contactFormFieldWrapper}>
                                    <label className={styles.contactFormLabel}>First name</label>
                                    <input type="text" className={styles.contactFormField}/>
                                </div>
                                <div className={styles.contactFormFieldWrapper}>
                                    <label className={styles.contactFormLabel}>Last name</label>
                                    <input type="text" className={styles.contactFormField}/>
                                </div>
                                <div className={styles.contactFormFieldWrapper}>
                                    <label className={styles.contactFormLabel}>E-mail address</label>
                                    <input type="text" className={styles.contactFormField}/>
                                </div>
                                <div className={styles.contactFormFieldWrapper}>
                                    <label className={styles.contactFormLabel}>Phone number</label>
                                    <input type="text" className={styles.contactFormField}/>
                                </div>
                            </div>
                            <div className={styles.contactFormMessage}>
                                <label className={styles.contactFormLabel}>Message</label>
                                <textarea className={`${styles.contactFormMessageField} ${styles.contactFormField}`}></textarea>
                            </div>
                        </div>
                        <div className={styles.contactFormButtonWrap}>
                            <Button className={`${styles.contactFormButton} buttonSmall`}>
                                Send request
                            </Button>
                        </div>
                    </div>
                    <div className={styles.contactDealers}>
                        <div className={styles.contactDealerCard}>
                            <div className={styles.contactDealerImageWrap}>
                                <img className={styles.contactDealerImage} src="/car-dealer.jpg" alt="Car dealer" />
                            </div>
                            <div className={styles.contactDealerText}>
                                <h2 className={styles.contactDealerName}>
                                    Gerald Jarvis
                                </h2>
                                <div className={styles.contactDealerLocation}>
                                    Located in <strong>Ostrava</strong> 
                                </div>
                                <div className={styles.contactDealerIconRow}>
                                    <FaPhone className={styles.contactDealerIcon}/>
                                    +421 948871383
                                </div>
                                <div className={styles.contactDealerIconRow}>
                                    <FaEnvelope className={styles.contactDealerIcon}/><span className="link">gerald.jarvis@car-mania.cz</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contactDealerCard}>
                            <div className={styles.contactDealerImageWrap}>
                                <img className={styles.contactDealerImage} src="/car-dealer2.jpeg" alt="Car dealer" />
                            </div>
                            <div className={styles.contactDealerText}>
                                <h2 className={styles.contactDealerName}>
                                    Cory Allen
                                </h2>
                                <div className={styles.contactDealerLocation}>
                                    Located in <strong>Žilina</strong>
                                </div>
                                <div className={styles.contactDealerIconRow}>
                                    <FaPhone className={styles.contactDealerIcon}/>
                                    +421 948871383
                                </div>
                                <div className={styles.contactDealerIconRow}>
                                    <FaEnvelope className={styles.contactDealerIcon}/><span className="link">cory.allen@car-mania.sk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Contact;