import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa"
import SecondLogo from "../assets/second-logo.svg?react"
import ServiceBanner from "../components/ServiceBanner"
import ShowroomsBanner from "../components/ShowroomsBanner"
import Ig from "../components/Ig"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import Buttons from "../components/Buttons"
import Button from "../components/Button";

import styles from "../styles/pages/Home.module.css"

export default function Home() {
    const [newCount, setNewCount] = useState(0);
    const [usedCount, setUsedCount] = useState(0);

    const images = [
        "/showroom2.jpg",
        "/showroom6.avif",
        "/showroom7.avif",
        "/showroom8.avif"
    ];
    const [index, setIndex] = useState(0);

    const getNewCount = () => {
        fetch("http://localhost:8080/api/cars/count?status=New")
            .then(res => res.json())
            .then(count => setNewCount(count));
    }

    const getUsedCount = () => {
        fetch("http://localhost:8080/api/cars/count?status=Used")
            .then(res => res.json())
            .then(count => setUsedCount(count));
    }

    useEffect(() => {
        getNewCount();
        getUsedCount();
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
                            <Link className={styles.introButton} to="/new-cars">
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
                        <Heading>
                            <SecondLogo className={`cmLogo headingLogo`}/>
                            Current range of new and used cars
                        </Heading> 
                    </div>
                    <div className="inner spaced">
                        <Offers count={6} />
                    </div>
                    <div className="inner spaced">
                        <Buttons>
                            <Button to="/used-cars" className="buttonWhite">
                                Certified used cars ({usedCount}) <FaChevronRight className="buttonArrow" />
                            </Button>
                            <Button to="/new-cars">
                                New and demonstrator cars ({newCount})<FaChevronRight className="buttonArrow" />
                            </Button>
                        </Buttons>
                    </div> 
                </section>
            </main>     
            <ShowroomsBanner />
            <ServiceBanner />
            <Ig />
        </>
    )
}