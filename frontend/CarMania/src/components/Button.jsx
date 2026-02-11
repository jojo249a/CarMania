import { Link } from "react-router-dom";

const Button = ({to, className, children}) => {
    if (!to) {
        return (
            <button type="submit" className={`button ${className ? className : ""}`}>
                {children}
            </button>
        )   
    }

    return (
        <Link to={to} className={`button ${className ? className : ""}`}>
            {children}
        </Link>
    )
}

export default Button;