import { useState } from "react"
import { FaChevronRight } from "react-icons/fa";
import SecondLogo from "../assets/second-logo.svg?react"
import Offers from "../components/Offers"
import Heading from "../components/Heading";
import Breadcrumbs from "../components/Breadcrumbs";
import Contact from "../components/Contact";
import ServiceBanner from "../components/ServiceBanner"
import ShowroomsBanner from "../components/ShowroomsBanner";
import Buttons from "../components/Buttons";
import Button from "../components/Button";
import Filter from "../components/Filter";
import Banners from "../components/Banners"

export default function SalesHistory() {
    const [make, setMake] = useState("All");  

    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className="container sectionSpacing">
                        <Breadcrumbs />
                        <Heading>
                            <SecondLogo className={`headingLogo`}/>
                            Sales history
                        </Heading>
                    </div>
                    <div className="container sectionSpacing">
                        <Filter status="Sold" onMakeChange={setMake} currentMake={make} />
                    </div>
                    <div className="container sectionSpacing">
                        <Offers status="Sold" make={make}/>
                    </div> 
                    <div className="container sectionSpacing">
                        <Buttons>
                            <Button to="/used-cars" className="buttonWhite buttonsButton">
                                Certified used cars <FaChevronRight className="buttonArrow" />
                            </Button>
                            <Button to="/new-cars" className="buttonsButton">
                                New and demonstrator cars <FaChevronRight className="buttonArrow" />
                            </Button>
                        </Buttons> 
                    </div>
                </section>
            </main>
            <Contact />
            <Banners>
                <ShowroomsBanner />
                <ServiceBanner />
            </Banners>
        </>
    )
}

