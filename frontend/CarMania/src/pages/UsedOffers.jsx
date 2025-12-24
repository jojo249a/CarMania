import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import Breadcrumbs from "../components/Breadcrumbs"
import Contact from "../components/Contact";
import ServiceBanner from "../components/ServiceBanner"
import ShowroomsBanner from "../components/ShowroomsBanner"
import Buttons from "../components/Buttons"
import Button from "../components/Button"
import Filter from "../components/Filter"

export default function UsedOffers() {
    const [make, setMake] = useState("All");

    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className="container sectionSpacing">
                        <Breadcrumbs />
                        <Heading>
                            Used cars for sale
                        </Heading>
                    </div>
                     <div className="container sectionSpacing">
                        <Filter status="Used" onMakeChange={setMake} currentMake={make} />
                    </div>
                    <div className="container sectionSpacing">
                        <Offers status="Used" make={make}/>
                    </div> 
                    <div className="container sectionSpacing">
                        <Buttons>
                            <Button to="/new-cars" className="buttonsButton">
                                New and demonstrator cars <FaChevronRight className="buttonArrow" />
                            </Button>
                        </Buttons>
                    </div>
                </section>
            </main>
            <Contact />
            <div className="banners">
                <ShowroomsBanner />
                <ServiceBanner />
            </div>
        </>
    )
}