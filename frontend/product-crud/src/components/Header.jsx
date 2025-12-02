import { Link } from "react-router-dom"
import PrimaryLogo from "../assets/primary-logo.svg?react"
import CZFlag from "../assets/cz-flag.svg?react"
import SKFlag from "../assets/sk-flag.svg?react"
import UKFlag from "../assets/uk-flag.svg?react"
import { FaChevronDown, FaBars } from "react-icons/fa"
import { useEffect, useState } from "react"

import "../styles/Header.css"

export default function Header() {
    const [bg, setBg] = useState(false);
    const [openLangs, setOpenLangs] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [openShowrooms, setOpenShowrooms] = useState(false);
    const [openService, setOpenService] = useState(false);
    const [openOffers, setOpenOffers] = useState(false);

    function handleScroll() {
        if (window.scrollY > 0) {
            setBg(true);
        } else {
            setBg(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className={bg ? "bg" : ""}>
            <div className="header-inner inner">
                <Link className="header-home-link" to="/"><PrimaryLogo className="header-home-logo"/></Link>
                <nav className={openNav ? "opened" : ""}>
                    <ul className="nav-items-list">
                        <li className="nav-item">
                            <span className={`nav-link ${openShowrooms ? "opened" : ""}`} onClick={() => {
                                if (window.innerWidth <= 1140) {
                                    setOpenShowrooms(!openShowrooms);
                                }}}>
                                Showrooms
                                <FaChevronDown className="header-arrow-down"/>
                            </span>
                            <ul className="submenu">
                                <li className="submenu-item"><Link className="submenu-link">Showroom Ostrava</Link></li>
                                <li className="submenu-item"><Link className="submenu-link">Showroom Žilina</Link></li>
                            </ul>
                        </li> 
                        <li className="nav-item">
                            <span className={`nav-link ${openOffers ? "opened" : ""}`} onClick={() => {
                                if (window.innerWidth <= 1140) {
                                    setOpenOffers(!openOffers);
                                }}}>
                                Cars for sale
                                <FaChevronDown className="header-arrow-down"/>
                            </span>
                            <ul className="submenu">
                                <li className="submenu-item"><Link className="submenu-link">Certified used cars</Link></li>
                                <li className="submenu-item"><Link className="submenu-link">New & demo cars</Link></li>
                                <li className="submenu-item"><Link className="submenu-link">Sold cars</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Sales History</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Leasing</Link>
                        </li>
                        <li className="nav-item">
                            <span className={`nav-link ${openService ? "opened" : ""}`} onClick={() => { 
                                if (window.innerWidth <= 1140) {
                                    setOpenService(!openService);
                                }}}>
                                Service
                                <FaChevronDown className="header-arrow-down"/>
                            </span>
                            <ul className="submenu">
                                <li className="submenu-item"><Link className="submenu-link">Service</Link></li>
                                <li className="submenu-item"><Link className="submenu-link">Car detailing</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="nav-opener" onClick={() => {
                    setOpenNav(!openNav);
                    if (openLangs) {
                        setOpenLangs(!openLangs);
                    }}}>
                    <FaBars className="nav-opener-icon"/>
                    Menu
                </div>
                <div className="header-langs">
                    <div className="langs-opener" onClick={() => { 
                        setOpenLangs(!openLangs)
                        if (openNav) {
                            setOpenNav(!openNav);
                        }}}>
                        <SKFlag className="langs-flag"/>
                        <FaChevronDown className="header-arrow-down lang-arrow-down"/>
                    </div>
                    <ul className={`langs-list ${openLangs ? "opened" : ""}`}>
                        <li className="langs-item" onClick={() => setOpenLangs(!openLangs)}>
                            <SKFlag className="langs-flag"/> SK
                        </li>
                        <li className="langs-item" onClick={() => setOpenLangs(!openLangs)}>
                            <CZFlag className="langs-flag"/> CZ
                        </li>
                        <li className="langs-item" onClick={() => setOpenLangs(!openLangs)}>
                            <UKFlag className="langs-flag"/> UK
                      </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}