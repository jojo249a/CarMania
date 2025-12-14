import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import Breadcrumbs from "../components/Breadcrumbs"
import Ig from "../components/Ig"
import Banner from "../components/Banner"
import Buttons from "../components/Buttons"
import { useEffect, useState } from "react"

export default function UsedOffers() {
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState("");

    const getOffers = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/cars/status/Used");
            const data = await res.json();
            setOffers(data);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        getOffers();
    }, []);

    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className="inner spaced">
                        <Breadcrumbs />
                        <Heading>
                            Used cars for sale
                        </Heading>
                    </div>
                    <div className="inner spaced">
                        <Offers offers={offers} error={error} />
                    </div>
                    <div className="inner spaced">
                        <Buttons>
                            <Link to="/new-cars" className="button buttonsButton">
                                New and demonstrator cars <FaChevronRight className="buttonArrow" />
                            </Link>
                        </Buttons>
                    </div>
                </section>
            </main>
            <Banner />
            <Ig />
        </>
    )
}