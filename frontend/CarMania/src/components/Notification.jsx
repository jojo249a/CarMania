import styles from "../styles/components/Notification.module.css"

const Notification = ({ children, message, setMessage }) => {

    if (message) {
        setTimeout(() => {
            setMessage("");
        }, 5000);
    }
        
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