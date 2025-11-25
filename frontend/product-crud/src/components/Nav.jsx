import { Link } from "react-router-dom"
import PrimaryLogo from "../assets/primary-logo.svg?react"
import "./Nav.css"

export default function Nav() {
    return (
        <nav>
            <Link className="home-link" to="/"><PrimaryLogo /></Link>
            <ul className="nav-items">
                <li><Link className="nav-item" to="/shop">Shop</Link></li> 
                <li><Link className="nav-item" to="/admin">Admin Panel</Link></li>
            </ul>
        </nav>
    )
}