import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import Breadcrumbs from "../components/Breadcrumbs"
import Ig from "../components/Ig"
import Banner from "../components/Banner"
import Buttons from "../components/Buttons"

export default function UsedOffers() {
    return (
        <>
            <main>
                <section className="sectionFirst">
                    <Breadcrumbs />
                    <Heading>
                        Used cars for sale
                    </Heading>
                    <Offers />
                    <Buttons>
                        <Link to="/new-cars" className="button buttonsButton">
                            New and demonstrator cars <FaChevronRight className="buttonArrow" />
                        </Link>
                    </Buttons>
                </section>
            </main>
            <Banner />
            <Ig />
        </>
    )
}