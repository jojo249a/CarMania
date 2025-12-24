import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import Breadcrumbs from "../components/Breadcrumbs"
import Contact from "../components/Contact"
import ServiceBanner from "../components/ServiceBanner"
import ShowroomsBanner from "../components/ShowroomsBanner"
import Buttons from "../components/Buttons"
import Button from "../components/Button"
import Filter from "../components/Filter"

export default function NewOffers() {
    const [make, setMake] = useState("All");  

    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className="container sectionSpacing">
                        <Breadcrumbs />
                        <Heading>
                            Current range of new & demo cars
                        </Heading>
                    </div>
                    <div className="container sectionSpacing">
                        <Filter status="New" onMakeChange={setMake} currentMake={make} />
                    </div>
                    <div className="container sectionSpacing">
                        <Offers status="New" make={make}/>
                    </div>
                    <div className="container sectionSpacing">
                        <Buttons>
                            <Button to="/used-cars" className="buttonsButton">
                                Certified used cars <FaChevronRight className="buttonArrow" />
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