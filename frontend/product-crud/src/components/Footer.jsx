import { FaRegEnvelope } from "react-icons/fa"

import "../styles/Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-top center">
                <ul class="footer-column">
                    <div>CarMania, s.r.o.</div>
                    <div>Krmelínská 736/7, 720 00 Ostrava</div>
                    <div>IČ: 26848023</div>
                    <a href="" className="footer-top-iconrow link">
                        <FaRegEnvelope />
                        info@carmania.sk
                    </a>
                </ul>
            </div>
            <div className="footer-bottom center">
                2025 © CarMania, s.r.o.
                <div>
                    <span>website by </span> 
                    <a class="link" href="https://github.com/jojo249a" target="_blank">
                        jojo249a
                    </a>
                </div>
            </div>
        </footer>
    )
}