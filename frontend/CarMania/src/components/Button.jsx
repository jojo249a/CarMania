import { Link } from "react-router-dom";

const Button = ({to, className, children}) => {
    return (
        <Link to={to} className={`button buttonsButton ${className}`}>
            {children}
        </Link>
    )
}

export default Button;