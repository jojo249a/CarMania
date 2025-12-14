import { useEffect, useState } from "react"
import { FaChevronRight } from "react-icons/fa";
import Offers from "../components/Offers"
import Breadcrumbs from "../components/Breadcrumbs";
import Heading from "../components/Heading";
import Buttons from "../components/Buttons";
import Button from "../components/Button";

export default function SalesHistory() {
    const [offers, setOffers] = useState([])
    const [error, setError] = useState("");

    const getOffers = async () => {
        try {
            const res = await fetch("http://localhost:8080/api/cars/status/Sold");
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
                            Sales history
                        </Heading>
                    </div>
                    <div className="inner spaced">
                        <Offers offers={offers} error={error} />
                    </div> 
                    <div className="inner spaced">
                        <Buttons>
                            <Button to="/used-cars" className="buttonWhite">
                                Certified used cars <FaChevronRight className="buttonArrow" />
                            </Button>
                            <Button to="/new-cars">
                                New and demonstrator cars <FaChevronRight className="buttonArrow" />
                            </Button>
                        </Buttons> 
                    </div>
                </section>
            </main>
        </>
    )
}

