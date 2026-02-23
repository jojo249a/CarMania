import Contact from "./Contact"
import ContactEmployeeCard from "./ContactEmployeeCard"

const SalesContact = ({ carName }) => {
    const salesManagerZilina = {
        photo: "/car-dealer2.jpeg",
        name: "Jozef Vydra",
        job: <>Sales manager <strong>Žilina</strong></>,
        phone: "+421 950 580 240",
        email: "jozef.vydra@car-mania.sk"
    }

    const salesManagerOstrava = {
        photo: "/car-dealer.jpg",
        name: "Ján Měkký",
        job: <>Sales manager <strong>Ostrava</strong></>,
        phone: "+420 948 871 383",
        email: "jan.mekky@car-mania.cz"
    }

    return (
        <>
            <Contact carName={carName}>
                <ContactEmployeeCard employee={salesManagerZilina} />
                <ContactEmployeeCard employee={salesManagerOstrava} />
            </Contact>
        </>
    )
}

export default SalesContact;