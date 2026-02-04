import SecondLogo from "../assets/second-logo.svg?react"
import Breadcrumbs from "../components/Breadcrumbs"
import Heading from "../components/Heading" 

const ShowroomOstrava = () => {
    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className="container sectionSpacing">
                        <Breadcrumbs />
                        <Heading>
                            <SecondLogo className={`headingLogo`}/>
                            Showroom Ostrava
                        </Heading>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ShowroomOstrava;