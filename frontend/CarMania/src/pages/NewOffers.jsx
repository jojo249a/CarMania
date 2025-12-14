import { FaChevronRight } from "react-icons/fa"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import Breadcrumbs from "../components/Breadcrumbs"
import Ig from "../components/Ig"
import Banner from "../components/Banner"
import Buttons from "../components/Buttons"
import Button from "../components/Button"
import { useEffect, useState } from "react"

export default function NewOffers() {
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState("");

    const getOffers = async() => {
        try {
            const res = await fetch("http://localhost:8080/api/cars/status/New");
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
                            Current range of new & demo cars
                        </Heading>
                    </div>
                    <div className="inner spaced">
                        <Offers offers={offers} error={error} />
                    </div>
                    <div className="inner spaced">
                        <Buttons>
                            <Button to="/used-cars">
                                Certified used cars <FaChevronRight className="buttonArrow" />
                            </Button>
                        </Buttons>
                    </div>
                </section>
            </main>
            <Banner />
            <Ig />
        </>
    )
}