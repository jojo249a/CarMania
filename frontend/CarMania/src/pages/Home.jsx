import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa"
import SecondLogo from "../assets/second-logo.svg?react"

import Banner from "../components/Banner"
import Ig from "../components/Ig"

import styles from "../styles/pages/Home.module.css"

export default function Home() {
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState("");
    const images = [
        "/showroom2.jpg",
        "/showroom6.avif",
        "/showroom7.avif",
        "/showroom8.avif"
    ];
    const [index, setIndex] = useState(0);

    function getOffers() {
        fetch("http://localhost:8080/api/cars")
            .then(res => res.json())
            .then(data => setOffers(data))
            .catch(() => setError("Failed to load offers."));
    }

    useEffect(() => {
        getOffers();
    }, []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <main>
                <section>
                    <div className="intro">
                        <div className="intro-bg-img-wrap">
                            <img src={images[index]} alt="Showroom" className="intro-bg-img" />
                        </div>
                        <div className="intro-text">
                            <div className="intro-heading">
                                <span>CarMania</span>
                            </div>
                            <div className="intro-desc">
                                LUXURY
                                <SecondLogo className="cm-logo intro-desc-logo"/>
                                PERFORMANCE
                            </div>
                            <Link className="intro-button" to="/Shop">
                                <div className="intro-circle">
                                    <FaChevronRight />
                                </div>
                                <div className="intro-button-text">
                                    View Offers
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="inner spaced">
                        <h2 className="offers-heading heading">
                            <SecondLogo className="cm-logo offers-heading-logo"/>
                            Current range of new and used cars
                        </h2>
                    </div>
                    {error ? 
                    <div className="inner spaced err-msg"> 
                        {error}
                    </div> :
                    <div className="inner spaced offers-list-wrap">
                        <ul className="offers-list">
                            {
                                offers.map(offer => (
                                    <li className="offers-item" key={offer.id}>
                                        <Link className="offers-item-link" to="/shop">
                                            <div className="offers-item-top">
                                                <img className="offers-item-img" 
                                                src={`http://localhost:8080/${offer.image}`} 
                                                alt={offer.name} />
                                            </div>  
                                            <div className="offers-item-bottom">
                                                <div className="offers-item-label" to="">
                                                    {offer.year} | {offer.mileage} km | {offer.fuelType}
                                                </div>
                                                <div className="offers-item-text">
                                                    <h2 className="offers-item-brand">{offer.make}</h2>
                                                    <h2 className="offers-item-model">{offer.model}</h2>
                                                    <div className="offers-item-price">{offer.price}€ Tax included</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>   
                    </div>
                    }
                    <div className="inner spaced">
                        <div className="offers-buttons">
                            <Link to="/" className="button buttonWhite offers-button">
                                Certified used cars <FaChevronRight className="button-arrow"/>
                            </Link>
                            <Link to="/" className="button offers-button">
                                New and demonstrator cars <FaChevronRight className="button-arrow"/>
                            </Link>
                        </div>   
                    </div>        
                </section>
            </main>
            <Banner />
            <Ig />
        </>
    )
}