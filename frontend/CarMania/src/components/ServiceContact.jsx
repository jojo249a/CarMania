import Contact from "./Contact"
import ContactEmployeeCard from "./ContactEmployeeCard"

const ServiceContact = () => {
    const headOfService = {
        photo: "/head-of-service.png",
        name: "Vladimír Weiss",
        job: "Head of service",
        phone: "+420 850 955 245",
        email: "vladimir.weiss@car-mania.cz"
    }

    const serviceAdvisor = {
        photo: "/service-advisor.avif",
        name: "Stanislav Jančík",
        job: "Service Advisor",
        phone: "+420 733 944 224",
        email: "stanislav.jancik@car-mania.cz"
    }

    return (
        <>
            <Contact>
                <ContactEmployeeCard employee={headOfService} />
                <ContactEmployeeCard employee={serviceAdvisor} />
            </Contact>
        </>
    )
}

export default ServiceContact;