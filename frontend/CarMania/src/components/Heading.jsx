import SecondLogo from "../assets/second-logo.svg?react"

const Heading = ({ children, className }) => {
    return (
        <h2 className={`heading ${className ? className : ""}`}>
            <SecondLogo className={`headingLogo`}/>
            {children}
        </h2>
    )
}

export default Heading;