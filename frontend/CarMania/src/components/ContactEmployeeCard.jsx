import { FaPhone, FaEnvelope } from "react-icons/fa";

import styles from "../styles/components/Contact.module.css"

const ContactEmployeeCard = ({ employee }) => {
    return (
        <>
            <div className={styles.contactDealerCard}>
                <div className={styles.contactDealerImageWrap}>
                    <img className={styles.contactDealerImage} src={employee.photo} alt={employee.job} />
                </div>
                <div className={styles.contactDealerText}>
                    <h2 className={styles.contactDealerName}>
                        {employee.name}
                    </h2>
                    <div className={styles.contactDealerJob}>   
                        {employee.job}
                    </div>
                    <div>
                        <FaPhone className={styles.contactDealerIcon}/>
                        <span className="link">{employee.phone}</span>
                    </div>
                    <div>
                        <FaEnvelope className={styles.contactDealerIcon}/>
                        <span className="link">{employee.email}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactEmployeeCard;