import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"
import styles from "../styles/components/Banner.module.css"

const BannerButton = ({ link, children }) => {
    return (
        <Link to={link} className={`button buttonTransp ${styles.bannerButton}`}>
            {children}
            <FaChevronRight className="buttonArrow" />
        </Link>
    )
}

export default BannerButton;