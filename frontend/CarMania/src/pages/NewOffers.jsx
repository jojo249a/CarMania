import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import Breadcrumbs from "../components/Breadcrumbs"
import Ig from "../components/Ig"
import Banner from "../components/Banner"
import Buttons from "../components/Buttons"

export default function NewOffers() {
    return (
        <>
            <main>
                <section className="sectionFirst">
                    <Breadcrumbs />
                    <Heading>
                        Current range of new & demo cars
                    </Heading>
                    <Offers />
                    <Buttons>
                        <Link to="/used-cars" className="button buttonsButton">
                            Certified used cars <FaChevronRight className="buttonArrow" />
                        </Link>
                    </Buttons>
                </section>
            </main>
            <Banner />
            <Ig />
        </>
    )
}