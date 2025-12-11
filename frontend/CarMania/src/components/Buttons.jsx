const Buttons = ({children}) => {
    return (
        <div className="inner spaced">
            <div className="buttons">
                {children}
            </div>   
        </div>   
    )
}

export default Buttons;