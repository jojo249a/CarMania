const Heading = ({ children, className }) => {
    return (
        <h2 className={`heading ${className ? className : ""}`}>
            {children}
        </h2>
    )
}

export default Heading;