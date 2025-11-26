import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"
import PrimaryLogo from "../assets/primary-logo.svg?react";
import SecondLogo from "../assets/second-logo.svg?react";
import { useEffect, useState } from "react";

import "./Home.css"

export default function Home() {
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState("");

    function getOffers() {
        fetch("http://localhost:8080/api/products")
            .then(res => res.json())
            .then(data => setOffers(data))
            .catch(err => setError(err));
    }

    useEffect(() => getOffers(), []);

    return (
        <div className="home-wrapper">
            <section className="intro-section">
                <div className="intro-wrapper">
                    <img src="/showroom6.avif" alt="Background" className="background-img" />
                    <div className="intro-text">
                        <div className="intro-heading">
                            <span>CarMania</span>
                            <SecondLogo className="second-logo"/>
                        </div>
                        <div className="intro-desc">
                            <span>All the cars you love</span>
                        </div>
                        <div>
                            <Link className="intro-btn" to="/Shop">
                                <div className="circle">
                                    <FaChevronRight />
                                </div>
                                <div className="intro-btn-text">
                                    View Offers
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offers-section">
                <div className="offers-wrapper">
                    <h2 className="offers-heading heading">
                        <SecondLogo className="second-logo"/>
                        Current range of new and used cars
                    </h2>
                    <div className="offers-grid">
                        <ul className="offers-list">
                            {
                                offers.map(offer => (
                                    <li className="offers-item" key={offer.id}>
                                        <img className="offers-item-img" src={`http://localhost:8080/${offer.image}`} alt={offer.name} />
                                        <div>
                                            <Link className="offers-item-btn button" to="">Read More</Link>
                                        </div>
                                        <div className="offers-item-text">
                                            <h2 className="offers-item-heading">{offer.name}</h2>
                                            <div className="offers-item-price">{offer.price}€ Tax included</div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="offers-buttons">
                        <Link className="button button-white" to="/shop">Certified used cars <FaChevronRight className="button-arrow"/></Link>
                        <Link className="button" to="/shop">New and demonstrator cars <FaChevronRight className="button-arrow"/></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}