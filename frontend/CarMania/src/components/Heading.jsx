const Heading = ({ children }) => {
    return (
        <div className="inner spaced">
            <h2 className="heading">
                {children}
            </h2>
        </div>
    )
}

export default Heading;