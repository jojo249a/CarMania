import { Link } from "react-router-dom"
import PrimaryLogo from "../assets/primary-logo.svg?react"
import CZFlag from "../assets/cz-flag.svg?react"
import SKFlag from "../assets/sk-flag.svg?react"
import UKFlag from "../assets/uk-flag.svg?react"
import { FaChevronDown } from "react-icons/fa"
import { useEffect, useState } from "react"

import "../styles/Header.css"

export default function Header() {
    const [bg, setBg] = useState(false);
    const [opened, setOpened] = useState(false);

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
            <div className="header-inner center">
                <Link className="nav-home-link" to="/"><PrimaryLogo /></Link>
                <nav>
                    <ul className="nav-items-list">
                        <li className="nav-item">
                            <span className="nav-link" to="/shop">Showrooms<FaChevronDown className="header-arrow-down"/></span>
                            <ul className="nav-items-sublist">
                                <li className="nav-subitem"><Link className="nav-sublink">Showroom Ostrava</Link></li>
                                <li className="nav-subitem"><Link className="nav-sublink">Showroom Žilina</Link></li>
                            </ul>
                        </li> 
                        <li className="nav-item">
                            <span className="nav-link" to="/admin">Cars for sale<FaChevronDown className="header-arrow-down"/></span>
                            <ul className="nav-items-sublist">
                                <li className="nav-subitem"><Link className="nav-sublink">Certified used cars</Link></li>
                                <li className="nav-subitem"><Link className="nav-sublink">New & demo cars</Link></li>
                                <li className="nav-subitem"><Link className="nav-sublink">Sold cars</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Sales History</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="">Leasing</Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" to="">Service<FaChevronDown className="header-arrow-down"/></span>
                            <ul className="nav-items-sublist">
                                <li className="nav-subitem"><Link className="nav-sublink">Service</Link></li>
                                <li className="nav-subitem"><Link className="nav-sublink">Car detailing</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header-langs">
                    <div className="current-lang" onClick={() => setOpened(!opened)}>
                        <SKFlag className="langs-flag"/>
                        <FaChevronDown className="header-arrow-down"/>
                    </div>
                    <ul className={`langs-list ${opened ? "opened" : ""}`}>
                        <li className="langs-item" onClick={() => setOpened(!opened)}>
                            <SKFlag className="langs-flag"/> SK
                        </li>
                        <li className="langs-item" onClick={() => setOpened(!opened)}>
                            <CZFlag className="langs-flag"/> CZ
                        </li>
                        <li className="langs-item" onClick={() => setOpened(!opened)}>
                            <UKFlag className="langs-flag"/> UK
                      </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}