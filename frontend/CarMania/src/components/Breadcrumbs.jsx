import { Link, useLocation } from "react-router-dom";

import styles from "../styles/components/breadcrumbs.module.css"

const Breadcrumbs = () =>{
    const location = useLocation();

    return (
        <div className={styles.breadcrumbs}>
        </div>
    )
}

export default Breadcrumbs;