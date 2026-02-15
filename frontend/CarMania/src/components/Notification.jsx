import { useEffect } from "react";
import styles from "../styles/components/Notification.module.css"

const Notification = ({ children, message, setMessage }) => {
    useEffect(() => {
        if (!message) return;

        const timer = setTimeout(() => {
            setMessage("");
        }, 5000);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <>
            <div className={styles.notificationWrap}>
                <div className={styles.notification}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Notification;