import { Link, useLocation } from "react-router-dom"
import PrimaryLogo from "../assets/primary-logo.svg?react"
import CZFlag from "../assets/cz-flag.svg?react"
import SKFlag from "../assets/sk-flag.svg?react"
import UKFlag from "../assets/uk-flag.svg?react"
import { FaChevronDown, FaBars } from "react-icons/fa"
import { useEffect, useState } from "react"

import styles from "../styles/layout/Header.module.css"

export default function Header() {
    const [headerBg, setHeaderBg] = useState(false);
    const [openLangs, setOpenLangs] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [openShowrooms, setOpenShowrooms] = useState(false);
    const [openService, setOpenService] = useState(false);
    const [openOffers, setOpenOffers] = useState(false);
    const { pathname } = useLocation();
    
    const handleScroll = () => setHeaderBg(window.scrollY > 0);

    useEffect(() => {
        if (pathname != "/") {
            setHeaderBg(true);
        } else {
            setHeaderBg(false);
            window.addEventListener("scroll", handleScroll);
        }
        setOpenLangs(false);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [pathname]);

    return (
        <header className={headerBg ? styles.bg : undefined}>
            <div className={`${styles.headerInner} container`}>
                <Link className={styles.headerHomeLink} to="/"><PrimaryLogo className={styles.headerHomeLogo} /></Link>
                <nav className={openNav ? styles.opened : ""}>
                    <ul className={styles.navItemsList}>
                        <li className={styles.navItem}>
                            <span className={`${styles.navLink} ${openShowrooms ? styles.opened : ""}`} onClick={() => {
                                if (window.innerWidth <= 1140) {
                                    setOpenShowrooms(!openShowrooms);
                                }}}>
                                Showrooms
                                <FaChevronDown className={styles.headerArrowDown} />
                            </span>
                            <ul className={styles.submenu}>
                                <li className={styles.submenuItem}>
                                    <Link to="/showroom/ostrava" className={styles.submenuLink}>Showroom Ostrava</Link>
                                </li>
                                <li className={styles.submenuItem}>
                                    <Link to="/showroom/zilina" className={styles.submenuLink}>Showroom Žilina</Link>
                                </li>
                            </ul>
                        </li> 
                        <li className={styles.navItem}>
                            <span className={`${styles.navLink} ${openOffers ? styles.opened : ""}`} onClick={() => {
                                if (window.innerWidth <= 1140) {
                                    setOpenOffers(!openOffers);
                                }}}>
                                Cars for sale
                                <FaChevronDown className={styles.headerArrowDown} />
                            </span>
                            <ul className={styles.submenu}>
                                <li className={styles.submenuItem}>
                                    <Link to="/used-cars" className={styles.submenuLink}>Certified used cars</Link>
                                </li>
                                <li className={styles.submenuItem}>
                                    <Link to="/new-cars" className={styles.submenuLink}>New & demo cars</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/sales-history" className={styles.navLink}>Sales History</Link>
                        </li>
                        <li className={styles.navItem}>
                            <span className={`${styles.navLink} ${openService ? styles.opened : ""}`} onClick={() => { 
                                if (window.innerWidth <= 1140) {
                                    setOpenService(!openService);
                                }}}>
                                Service
                                <FaChevronDown className={styles.headerArrowDown} />
                            </span>
                            <ul className={styles.submenu}>
                                <li className={styles.submenuItem}>
                                    <Link className={styles.submenuLink}>Service</Link>
                                </li>
                                <li className={styles.submenuItem}>
                                    <Link className={styles.submenuLink}>Car detailing</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/about-us" className={styles.navLink}>About us</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/contact" className={styles.navLink}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.navOpener} onClick={() => {
                    setOpenNav(!openNav);
                    if (openLangs) {
                        setOpenLangs(false);
                    }}}>
                    <FaBars className={styles.navOpenerIcon} />
                    Menu
                </div>
                <div className={styles.headerLangs}>
                    <div className={`${styles.langsOpener} ${openLangs ? styles.opened : ""}`} onClick={() => { 
                        setOpenLangs(!openLangs)
                        if (openNav) {
                            setOpenNav(false);
                        }}}>
                        <SKFlag className={styles.langsFlag} />
                        <FaChevronDown className={`${styles.headerArrowDown} ${styles.langArrowDown}`} />
                    </div>
                    <ul className={`${styles.langsList}`}>
                        <li className={styles.langsItem} onClick={() => setOpenLangs(!openLangs)}>
                            <SKFlag className={styles.langsFlag} /> SK
                        </li>
                        <li className={styles.langsItem} onClick={() => setOpenLangs(!openLangs)}>
                            <CZFlag className={styles.langsFlag} /> CZ
                        </li>
                        <li className={styles.langsItem} onClick={() => setOpenLangs(!openLangs)}>
                            <UKFlag className={styles.langsFlag} /> UK
                      </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}