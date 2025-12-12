import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () =>{
    const location = useLocation();

    return (
        <div className="inner">
            <Link to="/">CarMania</Link>
            {location.pathname}
        </div>
    )
}

export default Breadcrumbs;