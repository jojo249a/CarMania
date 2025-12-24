import { Link } from "react-router-dom"
import { FaRegEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa"

import styles from "../styles/layout/Footer.module.css"

export default function Footer() {
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
                                <a href="" className={`${styles.footerIconrow} link`}>
                                    <FaRegEnvelope />
                                    info@carmania.sk
                                </a>
                            </div>
                        </div>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerHeading}>Car sales</div>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>Certified used cars</Link></li>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>New and demo cars</Link></li>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>Sales history</Link></li>
                            </ul>
                            <div className={styles.footerHeading}>Service and car detailing</div>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>Service</Link></li>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>Car detailing</Link></li>     
                            </ul>
                        </div>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerHeading}>Showrooms</div>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>Showroom Ostrava</Link></li>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>Showroom Žilina</Link></li>

                            </ul>
                            <ul className={styles.footerList}>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>Contact</Link></li>
                                <li className={styles.footerItem}><Link className={styles.footerLink}>Leasing</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className="container">
                    <div className={styles.footerBottomInner}>
                        2025 © CarMania, s.r.o.
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