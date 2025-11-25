import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import PrimaryLogo from "../assets/primary-logo.svg?react";
import SecondLogo from "../assets/second-logo.svg?react";


import "./Home.css"

export default function Home() {
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
                                View Offers
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offers-section">
                <div className="offers-wrapper">
                    <h2 className="offers-heading heading">
                        <SecondLogo className="second-logo"/>
                        Our newest offers
                    </h2>
                </div>
            </section>
        </div>
    )
}