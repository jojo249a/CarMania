import { Link } from "react-router-dom"
import { FaRegEnvelope } from "react-icons/fa"

import styles from "../styles/layout/Footer.module.css"

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className={styles.footerTop}>
                <div className="container">
                    <div className={styles.footerTopInner}>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerHeading}>Billing information</div>
                            <div>
                                <div>CarMania, s.r.o.</div>
                                <div>Krmelínská 736/7, 720 00 Ostrava</div>
                                <div>IČ: 26848023</div>
                                <Link to="" className={`${styles.footerIconRow} link`}>
                                    <FaRegEnvelope />
                                    info@carmania.sk
                                </Link>
                            </div>
                        </div>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerHeading}>Car sales</div>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><Link to="/used-cars" className={styles.footerLink}>Certified used cars</Link></li>
                                <li className={styles.footerItem}><Link to="/new-cars" className={styles.footerLink}>New and demo cars</Link></li>
                                <li className={styles.footerItem}><Link to="/sales-history" className={styles.footerLink}>Sales history</Link></li>
                            </ul>
                            <div className={styles.footerHeading}>Service and car detailing</div>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><Link to="/services" className={styles.footerLink}>Service</Link></li>
                                <li className={styles.footerItem}><Link to="/services" className={styles.footerLink}>Car detailing</Link></li>     
                            </ul>
                        </div>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerHeading}>Showrooms</div>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><Link to="/showroom/ostrava" className={styles.footerLink}>Showroom Ostrava</Link></li>
                                <li className={styles.footerItem}><Link to="/showroom/zilina" className={styles.footerLink}>Showroom Žilina</Link></li>

                            </ul>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><Link to="/contact" className={styles.footerLink}>Contact</Link></li>
                                <li className={styles.footerItem}><Link to="/about-us"className={styles.footerLink}>About us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.footerBottomInner}>
                        {year} © CarMania, s.r.o.
                        <div>
                            <span>website by </span> 
                            <a className="link" href="https://github.com/jojo249a" target="_blank">
                                jojo249a
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}