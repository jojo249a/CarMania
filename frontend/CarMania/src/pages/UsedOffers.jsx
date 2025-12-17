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

export default function UsedOffers() {
    const [make, setMake] = useState("All");

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
                        <Filter status="Used" onMakeChange={setMake} currentMake={make} />
                    </div>
                    <div className="inner spaced">
                        <Offers status="Used" make={make}/>
                    </div> 
                    <div className="inner spaced">
                        <Buttons>
                            <Button to="/new-cars">
                                New and demonstrator cars <FaChevronRight className="buttonArrow" />
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