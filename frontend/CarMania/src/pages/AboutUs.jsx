import { useEffect, useState, useRef } from "react"
import ShowroomsBanner from "../components/ShowroomsBanner"
import ServiceBanner from "../components/ServiceBanner"
import Breadcrumbs from "../components/Breadcrumbs"
import Heading from "../components/Heading"
import SecondLogo from "../assets/second-logo.svg?react"
import PrimaryLogo from "../assets/primary-logo.svg?react"

import styles from "../styles/pages/AboutUs.module.css"


const AboutUs = () => {
    const [introOverlay, setIntroOverlay] = useState(false);
    const introRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > introRef.current.offsetHeight / 2) {
                setIntroOverlay(true);
            } else {
                setIntroOverlay(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            <main>
                <section>
                    <div ref={introRef} className={styles.intro}>
                        <img src="/showroom9.jpg" alt="Showroom" className={styles.introImg} />
                        <PrimaryLogo className={styles.introLogo}/>
                        <div className={`${styles.introOverlay} ${introOverlay ? styles.active : ""}`}></div>
                    </div>
                    <div className="container sectionSpacing">
                        <div className={styles.aboutUsWrap}>  
                            <p> 
                                <strong>
                                    CarMania was founded in 2005. 
                                    From the start, a business model was chosen that combines the free choice of parallel trade with the reliability of an official dealership.
                                </strong>
                            </p>
                            <br />
                            <p>
                                The after-sales services and warranties are just as important as the opportunity at the time of purchase.
                                Our offer is characterised by a unique selection of exclusive cars from 7 top brands
                            </p>
                            <br />
                            <p>
                                Both the modern cars and the youngtimers are subjected to a strict screening.
                                In addition, originality, quality, configuration and demonstrability of the history are the most important requirements as purchase criteria.
                            </p>
                                More and more domestic and foreign customers share their passion with our passionate team.
                                At Bavaria Motors they will find their perfect "daily driver", sporty weekend car or unique collection item.
                        </div>
                        <div className={styles.ourTeamWrap}>  

                        </div>  
                    </div>
                </section>
            </main>
            <div className="banners">
                <ShowroomsBanner />
                <ServiceBanner />
            </div>
        </>
    )
}

export default AboutUs;