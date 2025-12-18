import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Car = () => {
    const { slug } = useParams();
    const [car, setCar] = useState(null);
    const [error, setError] = useState("");

    const getCar = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/cars/car?slug=${slug}`);
            const data = await res.json();

            if (!res.ok) {
                setError(data);
                return;
            } 
                        
            setCar(data);

        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        getCar();
        console.log(slug);
        console.log("a");
    }, []);

    if (error) {
        return <div className="inner spaced errMsg">{error}</div>
    }

    if (car == null) {
        return <div className="inner spaced errMsg">No car found.</div>
    }


    return (
        <>
            {car.make}
        </>
    )
}

export default Car;