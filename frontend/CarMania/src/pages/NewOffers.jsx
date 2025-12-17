import { useState } from "react"
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
    const [make, setMake] = useState("All");  

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
                        <Filter status="New" onMakeChange={setMake} currentMake={make} />
                    </div>
                    <div className="inner spaced">
                        <Offers status="New" make={make}/>
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