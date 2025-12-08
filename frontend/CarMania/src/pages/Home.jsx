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
        fetch("http://localhost:8080/api/cars/count/6")
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
                    <div className={styles.intro}>
                        <div className={styles.introBgImgWrap}>
                            <img src={images[index]} alt="Showroom" className={styles.introBgImg} />
                        </div>
                        <div className={styles.introText}>
                            <div className={styles.introHeading}>
                                <span>CarMania</span>
                            </div>
                            <div className={styles.introDesc}>
                                LUXURY
                                <SecondLogo className={`cmLogo ${styles.introDescLogo}`}/>
                                PERFORMANCE
                            </div>
                            <Link className={styles.introButton} to="/Shop">
                                <div className={styles.introCircle}>
                                    <FaChevronRight />
                                </div>
                                <div className={styles.introButtonText}>
                                    View Offers
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="inner spaced">
                        <h2 className={`${styles.offersHeading} heading`}>
                            <SecondLogo className={`cm-logo ${styles.offersHeadingLogo}`}/>
                            Current range of new and used cars
                        </h2>
                    </div>
                    {error ? 
                    <div className="inner spaced errMsg"> 
                        {error}
                    </div> :
                    <div className={`inner spaced ${styles.offersListWrap}`}>
                        <ul className={styles.offersList}>
                            {
                                offers.map(offer => (
                                    <li className={styles.offersItem} key={offer.id}>
                                        <Link className={styles.offersItemLink} to="/shop">
                                            <div className={styles.offersItemTop}>
                                                <img className={styles.offersItemImg} 
                                                src={`http://localhost:8080/${offer.image}`} 
                                                alt={offer.name} />
                                            </div>  
                                            <div className={styles.offersItemBottom}>
                                                <div className={styles.offersItemLabel} to="">
                                                    {offer.year} | {offer.mileage} km | {offer.fuelType}
                                                </div>
                                                <div className={styles.offersItemText}>
                                                    <h2 className={styles.offersItemBrand}>{offer.make}</h2>
                                                    <h2 className={styles.offersItemModel}>{offer.model}</h2>
                                                    <div className={styles.offersItemPrice}>{offer.price}€ Tax included</div>
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
                        <div className={styles.offersButtons}>
                            <Link to="/" className={`button buttonWhite ${styles.offersButton}`}>
                                Certified used cars <FaChevronRight className={styles.buttonArrow} />
                            </Link>
                            <Link to="/" className={`button ${styles.offersButton}`}>
                                New and demonstrator cars <FaChevronRight className={styles.buttonArrow} />
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