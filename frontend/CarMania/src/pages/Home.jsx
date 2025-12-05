import { Link } from "react-router-dom"
import { FaChevronRight, FaImages, FaRegHeart, FaRegComment } from "react-icons/fa"
import PrimaryLogo from "../assets/primary-logo.svg?react";
import SecondLogo from "../assets/second-logo.svg?react";
import CZFlag from "..//assets/cz-flag.svg?react";
import SKFlag from "../assets/sk-flag.svg?react";
import { useEffect, useState } from "react";

import "../styles/Home.css"

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
        fetch("http://localhost:8080/api/products")
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
                                                <img className="offers-item-img" src={`http://localhost:8080/${offer.image}`} alt={offer.name} />
                                            </div>  
                                            <div className="offers-item-bottom">
                                                <div className="offers-item-label" to="">2022 | 1 750 km | Benzín </div>
                                                <div className="offers-item-text">
                                                    <h2 className="offers-item-brand">Porsche</h2>
                                                    <h2 className="offers-item-model">{offer.name}</h2>
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
                            <Link className="button button-white offers-button" to="/shop">Certified used cars <FaChevronRight className="button-arrow"/></Link>
                            <Link className="button offers-button" to="/shop">New and demonstrator cars <FaChevronRight className="button-arrow"/></Link>
                        </div>   
                    </div>        
                </section>
            </main>
            <aside className="banner">
                <img className="banner-img" src="/showroom2.jpg" alt="Showroom" />
                <div className="banner-text">
                    <h2 className="banner-heading">Showrooms CarMania</h2>
                    <div className="banner-buttons">
                        <Link className="button button-transp banner-button">
                            <SKFlag className="button-icon" />
                            <span><strong>ŽILINA</strong> Showroom</span>
                            <FaChevronRight className="button-arrow"/>
                        </Link>
                            <Link className="button button-transp banner-button">
                            <CZFlag className="button-icon" />
                            <span><strong>OSTRAVA</strong> Showroom</span>
                            <FaChevronRight className="button-arrow"/>
                        </Link>
                    </div>
                </div>
            </aside>
            <aside className="ig inner">
                <div className="ig-side-text">
                    <div>
                        Follow us on Instagram!
                        <div>
                            <strong><a href="https://www.instagram.com/bavaria.motors">@car.mania</a></strong>
                        </div>
                    </div>
                    <SecondLogo className="cm-logo ig-side-text-logo" />
                </div>
                <div className="ig-posts">
                    <a href="https://www.instagram.com/p/DRb_sJcjPCy" className="ig-posts-link">
                        <img className="ig-posts-img" src="/mclaren.jpg" alt="McLaren" />
                        <FaImages className="ig-posts-media-icon" />
                        <div className="ig-posts-text">
                            <div className="ig-posts-text-line">
                                <FaRegHeart /> 583
                            </div>
                            <div className="ig-posts-text-line">
                                <FaRegComment /> 3
                            </div>
                            <div className="ig-posts-text-line ig-posts-comment">
                                We sold this Mclaren 600 LT in the color 'MSO Lantana Purple' 
                                on request and delivered the car last week to its new owner! 💜
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/p/DRb_sJcjPCy" className="ig-posts-link">
                        <img className="ig-posts-img" src="/mclaren2.jpg" alt="McLaren" />
                        <FaImages className="ig-posts-media-icon" />
                        <div className="ig-posts-text">
                            <div className="ig-posts-text-line">
                                <FaRegHeart /> 583
                            </div>
                            <div className="ig-posts-text-line">
                                <FaRegComment /> 3
                            </div>
                            <div className="ig-posts-text-line ig-posts-comment">
                                We sold this Mclaren 600 LT in the color 'MSO Lantana Purple' 
                                on request and delivered the car last week to its new owner! 💜
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/p/DRb_sJcjPCy" className="ig-posts-link">
                        <img className="ig-posts-img" src="/mclaren3.jpg" alt="McLaren" />
                        <FaImages className="ig-posts-media-icon" />
                        <div className="ig-posts-text">
                            <div className="ig-posts-text-line">
                                <FaRegHeart /> 583
                            </div>
                            <div className="ig-posts-text-line">
                                <FaRegComment /> 3
                            </div>
                            <div className="ig-posts-text-line ig-posts-comment">
                                We sold this Mclaren 600 LT in the color 'MSO Lantana Purple' 
                                on request and delivered the car last week to its new owner! 💜
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/p/DQFE7FGjGl0" className="ig-posts-link">
                        <img className="ig-posts-img" src="/812.jpg" alt="Ferrari" />
                        <FaImages className="ig-posts-media-icon" />
                        <div className="ig-posts-text">
                            <div className="ig-posts-text-line">
                                <FaRegHeart /> 1,054
                            </div>
                            <div className="ig-posts-text-line">
                                <FaRegComment /> 6
                            </div>
                            <div className="ig-posts-text-line ig-posts-comment">
                                When you want something different than Rosso. 😉
                                This Ferrari 812 GTS wears Viola Hong Kong, a Special 2-Layer metallic paint
                                that shifts with the light — deep, dark purple turning vibrant under the sun.
                                Carbon on the outside, carbon on the inside, with yellow accents that make it pop.
                                Atelier Ferrari at its finest.
                                Now available!
                            </div>
                        </div>
                    </a>
                </div>
            </aside>
        </>
    )
}