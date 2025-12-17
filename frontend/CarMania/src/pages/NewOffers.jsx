import { useEffect, useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import Breadcrumbs from "../components/Breadcrumbs"
import Ig from "../components/Ig"
import Banner from "../components/Banner"
import Buttons from "../components/Buttons"
import Button from "../components/Button"
import Filter from "../components/Filter"

export default function NewOffers() {
    const [offers, setOffers] = useState([]);
    const [make, setMake] = useState("All");    
    const [error, setError] = useState("");

    const getOffers = async() => {
        let url = "http://localhost:8080/api/cars?status=New";

        if (make != "All") {
            url = `http://localhost:8080/api/cars?status=New&make=${make}`;
        }

        try {
            const res = await fetch(url);
            const data = await res.json();
            setOffers(data);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        getOffers();
    }, [make]);

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
                        <Filter status="New" setMake={setMake} />
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