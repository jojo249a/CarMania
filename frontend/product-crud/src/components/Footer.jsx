import { Link } from "react-router-dom"
import { FaRegEnvelope, FaInstagram, FaFacebookF } from "react-icons/fa"

import "../styles/Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-top-inner inner">
                    <div className="footer-column">
                        <div className="footer-heading">Billing information</div>
                        <div>
                            <div>CarMania, s.r.o.</div>
                            <div>Krmelínská 736/7, 720 00 Ostrava</div>
                            <div>IČ: 26848023</div>
                            <a href="" className="footer-iconrow link">
                                <FaRegEnvelope />
                                info@carmania.sk
                            </a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <div className="footer-heading">Car sales</div>
                        <ul className="footer-list">
                            <li className="footer-item"><Link className="footer-link">Certified used cars</Link></li>
                            <li className="footer-item"><Link className="footer-link">New and demo cars</Link></li>
                            <li className="footer-item"><Link className="footer-link">Sales history</Link></li>
                        </ul>
                        <div className="footer-heading">Service and car detailing</div>
                        <ul className="footer-list">
                            <li className="footer-item"><Link className="footer-link">Service</Link></li>
                            <li className="footer-item"><Link className="footer-link">Car detailing</Link></li>     
                        </ul>
                    </div>
                    <div className="footer-column">
                        <div className="footer-heading">Showrooms</div>
                        <ul className="footer-list">
                            <li className="footer-item"><Link className="footer-link">Showroom Ostrava</Link></li>
                            <li className="footer-item"><Link className="footer-link">Showroom Žilina</Link></li>

                        </ul>
                        <ul className="footer-list">
                            <li className="footer-item"><Link className="footer-link">Contact</Link></li>
                            <li className="footer-item"><Link className="footer-link">Leasing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-inner inner">
                    2025 © CarMania, s.r.o.
                    <div>
                        <span>website by </span> 
                        <a className="link" href="https://github.com/jojo249a" target="_blank">
                            jojo249a
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}