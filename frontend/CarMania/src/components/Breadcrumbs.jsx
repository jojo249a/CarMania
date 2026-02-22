import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () =>{
    const { pathname } = useLocation();
    const pathsMap = {
        "/used-cars": "/ Cars for sale / Used cars",
        "/new-cars": "/ Cars for sale / New cars",
        "/sales-history": "/ Cars for sale / Sales history",
        "/showroom/ostrava": "/ Showroom / Ostrava",
        "/showroom/zilina": "/ Showroom / Žilina",
        "/contact": "/ Contact",
        "/services": "/ Services"
    };

    return (
        <div className="breadcrumbs">
            <Link to="/" className="clickable">CarMania</Link>
            <span> {pathsMap[pathname]}</span>
        </div>
    )
}

export default Breadcrumbs;