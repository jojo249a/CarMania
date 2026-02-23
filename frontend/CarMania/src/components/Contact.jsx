import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import SecondLogo from "../assets/second-logo.svg?react"
import Button from "./Button"
import Heading from "./Heading"
import Notification from "./Notification"

import styles from "../styles/components/Contact.module.css"

const Contact = ({ carName, children }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [heading, setHeading] = useState("Interested in a car?");
    const [formResponse, setFormResponse] = useState("");

    const { pathname } = useLocation();

    useEffect(() => {
        if (carName) {
            setHeading(`Interested in this ${carName}?`);
        }
        
        if (pathname.includes("/services")) {
            setHeading("Contact the service team directly");
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            phone,
            message
        }

        for (let val of Object.values(formData)) {
            if (!val || val.trim() === "") {
                setFormResponse("Please, fill all the fields.");
                return;
            }
        }
        
        const res = await fetch("http://localhost:8080/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            setFormResponse("Success!");
        } else {
            setFormResponse("Something went wrong. Make sure you're using the correct email format.");;
        }
    }

    return (
        <>  
            {formResponse && <Notification message={formResponse} setMessage={setFormResponse}>{formResponse}</Notification>}
            <aside className="sectionWhite">
                <div className="container">
                    <div className={styles.contactInner}>
                        <Heading className={styles.contactHeading}>
                            {heading}
                        </Heading>
                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.contactFormFields}>
                                <div className={styles.contactFormUserDetails}>
                                    <div className={styles.contactFormFieldWrapper}>
                                        <label className={styles.contactFormLabel}>First name</label>
                                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} className={styles.contactFormField}/>
                                    </div>
                                    <div className={styles.contactFormFieldWrapper}>
                                        <label className={styles.contactFormLabel}>Last name</label>
                                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} className={styles.contactFormField}/>
                                    </div>
                                    <div className={styles.contactFormFieldWrapper}>
                                        <label className={styles.contactFormLabel}>E-mail address</label>
                                        <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} className={styles.contactFormField}/>
                                    </div>
                                    <div className={styles.contactFormFieldWrapper}>
                                        <label className={styles.contactFormLabel}>Phone number</label>
                                        <input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} className={styles.contactFormField}/>
                                    </div>
                                </div>
                                <div className={styles.contactFormMessage}>
                                    <label className={styles.contactFormLabel}>Message</label>
                                    <textarea name="message" value={message} onChange={e => setMessage(e.target.value)} className={`${styles.contactFormMessageField} ${styles.contactFormField}`}></textarea>
                                </div>
                            </div>
                            <div className={styles.contactFormButtonWrap}>
                                <Button className={`buttonSmall ${styles.contactFormButton}`}>
                                    Send request
                                </Button>
                            </div>
                        </form>
                        <div className={styles.contactDealers}>
                            {children}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Contact;