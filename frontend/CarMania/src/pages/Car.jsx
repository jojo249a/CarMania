import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecondLogo from "../assets/second-logo.svg?react"
import Offers from "../components/Offers"
import Heading from "../components/Heading"

import styles from "../styles/components/Car.module.css"

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
        return <div className="inner spaced errMsg">Car not found.</div>
    }

    return (
        <>
            <main>
                <section className="sectionFirst">
                    <div className={styles.carIntro}>
                        <div className={styles.carIntroText}>
                            <div className={styles.carIntroHeading}>{car.make}</div>
                            <div className={styles.carIntroModel}>{car.model}</div>
                        </div>
                        <div className={styles.carIntroImgWrap}>
                            <img src={`http://localhost:8080/${car.image}`} alt={car.model} className={styles.carIntroImg}/>
                        </div>
                    </div>
                </section>
                <aside>
                    <div className="inner spaced">
                        <Heading>
                            <SecondLogo className={`cmLogo headingLogo`}/>
                            Current range of new and used cars
                        </Heading>
                    </div>
                    <div className="inner spaced">
                        <Offers count={4} />
                    </div>
                </aside>
            </main>
        </>
    )
}

export default Car;