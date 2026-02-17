import { useEffect, useState, useRef } from "react"
import { FaChevronDown } from "react-icons/fa"
import ShowroomsBanner from "../components/ShowroomsBanner"
import ServiceBanner from "../components/ServiceBanner"
import Banners from "../components/Banners"
import Contact from "../components/Contact"
import Ig from "../components/Ig"
import SecondLogo from "../assets/second-logo.svg?react"

import styles from "../styles/pages/AboutUs.module.css"


const AboutUs = () => {
    const [introOverlay, setIntroOverlay] = useState(false);
    const introRef = useRef(null);
    const nextSectionRef = useRef(null);

    const scrollDown = () => {
        const headerHeight = 140;

        const elementTop = nextSectionRef.current.offsetTop;

        window.scrollTo({
            top: elementTop - headerHeight,
            behavior: "smooth"
        });
    };

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
                        <div className={styles.scrollDown} onClick={scrollDown}>
                            <FaChevronDown className={styles.arrowDown} />
                        </div>
                        <div className={`${styles.introOverlay} ${introOverlay ? styles.active : ""}`}></div>
                    </div>
                </section>
                <section ref={nextSectionRef}>
                    <div className="container sectionSpacing sectionInner">
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
                                At CarMania they will find their perfect "daily driver", sporty weekend car or unique collection item.
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container sectionSpacing sectionInner">
                        <div className={`${styles.membersWrap}`}>
                            <h2 className={styles.heading}>
                                <SecondLogo className={styles.headingLogo} />
                                Team Žilina
                            </h2>
                            <div className={styles.membersList}>  
                                <div className={styles.memberRow}>
                                    <div className={styles.memberImgWrap}>
                                        <img src="/jozef-vydra.jpg" alt="Jozef Vydra" className={styles.memberImg} />
                                    </div>
                                    <div className={styles.memberDetails}>
                                        <h3 className={styles.memberName}>
                                            Jozef Vydra
                                        </h3>
                                        <div className={styles.memberRole}>
                                            Sales Manager <strong>Žilina</strong>
                                        </div>
                                        <p className={styles.memberDescription}>
                                            <span><strong>Favorite car?</strong></span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Mauris accumsan magna nisl, id vehicula metus sagittis vitae. 
                                            Suspendisse ac convallis diam. Vestibulum quis ligula lacinia, ornare lacus in, rhoncus ligula.
                                            Praesent consectetur nunc vel augue dictum sagittis. 
                                            Mauris a ante varius, dictum tortor vel, consequat nunc. 
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.memberRow}>
                                    <div className={styles.memberImgWrap}>
                                        <img src="/dealer2.jpeg" alt="Viliam Zápotočný" className={styles.memberImg} />
                                    </div>
                                    <div className={styles.memberDetails}>
                                        <h3 className={styles.memberName}>
                                            Viliam Zápotočný
                                        </h3>
                                        <div className={styles.memberRole}>
                                            Car Dealer
                                        </div>
                                        <p className={styles.memberDescription}>
                                            <span><strong>Favorite car?</strong></span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Mauris accumsan magna nisl, id vehicula metus sagittis vitae. 
                                            Suspendisse ac convallis diam. Vestibulum quis ligula lacinia, ornare lacus in, rhoncus ligula.
                                            Praesent consectetur nunc vel augue dictum sagittis. 
                                            Mauris a ante varius, dictum tortor vel, consequat nunc. 
                                            Donec sed ex ac risus dignissim sollicitudin quis eu risus.                                     
                                        </p>
                                    </div>
                                </div>
                            </div>  
                            <h2 className={styles.heading}>
                                <SecondLogo className={styles.headingLogo} />
                                Team Ostrava
                            </h2>
                            <div className={styles.membersList}>  
                                <div className={styles.memberRow}>
                                    <div className={styles.memberImgWrap}>
                                        <img src="/car-dealer.jpg" alt="Ján Měkký" className={styles.memberImg} />
                                    </div>
                                    <div className={styles.memberDetails}>
                                        <h3 className={styles.memberName}>
                                            Ján Měkký
                                        </h3>
                                        <div className={styles.memberRole}>
                                            Sales Manager <strong>Ostrava</strong>
                                        </div>
                                        <p className={styles.memberDescription}>
                                            <span><strong>Favorite car?</strong></span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Mauris accumsan magna nisl, id vehicula metus sagittis vitae. 
                                            Suspendisse ac convallis diam. Vestibulum quis ligula lacinia, ornare lacus in, rhoncus ligula.
                                            Praesent consectetur nunc vel augue dictum sagittis. 
                                            Mauris a ante varius, dictum tortor vel, consequat nunc. 
                                            Donec sed ex ac risus dignissim sollicitudin quis eu risus.                                     
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.memberRow}>
                                    <div className={styles.memberImgWrap}>
                                        <img src="/mechanic.jpg" alt="Ján Měkký" className={styles.memberImg} />
                                    </div>
                                    <div className={styles.memberDetails}>
                                        <h3 className={styles.memberName}>
                                            Vladimír Weiss
                                        </h3>
                                        <div className={styles.memberRole}>
                                            Head of service
                                        </div>
                                        <p className={styles.memberDescription}>
                                            <span><strong>Favorite car?</strong></span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Mauris accumsan magna nisl, id vehicula metus sagittis vitae. 
                                            Suspendisse ac convallis diam.                                
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>
            </main>
            <Contact />
            <Banners>
                <ShowroomsBanner />
                <ServiceBanner />
            </Banners>
            <Ig />
        </>
    )
}

export default AboutUs;