import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () =>{
    const { pathname } = useLocation();
    const pathsMap = {
        "/used-cars": "/ Cars for sale / Used cars",
        "/new-cars": "/ Cars for sale / New cars",
        "/sales-history": "/ Cars for sale / Sales history"
    };

    return (
        <div className="breadcrumbs">
            <Link to="/" className="clickable">CarMania </Link>
            {pathsMap[pathname]}
        </div>
    )
}

export default Breadcrumbs;