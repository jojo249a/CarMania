import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa"
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
                            <FaRegArrowAltCircleLeft className={`${styles.swipeLeftIcon} ${styles.swipeIcon}`}></FaRegArrowAltCircleLeft>
                            <img src={`http://localhost:8080${car.image}`} alt={`${car.make + " " + car.model}`} className={styles.carIntroImg}/>
                            <FaRegArrowAltCircleRight className={`${styles.swipeRightIcon} ${styles.swipeIcon}`}></FaRegArrowAltCircleRight>
                        </div>
                    </div>
                    <div className="inner">
                        <div className={styles.carGallery}>
                            <div className={styles.carGalleryImgWrap} >
                                <img src={`http://localhost:8080${car.image}`} alt={car.model} className={styles.carGalleryImg}/>
                            </div>
                            {car.carImage.map((image) => (
                            <div key={image.id} className={styles.carGalleryImgWrap} >
                                <img src={`http://localhost:8080${image.image}`} alt={car.model} className={styles.carGalleryImg}/>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="inner spaced">
                        <div className={styles.carDetails}>
                            <div className={styles.carDetailsParams}>
                                <div className={styles.carDetailsParamsLeft}>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Year
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.year}
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Mileage
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.mileage} km 
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Power
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.power} kW
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Fuel type
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.fuelType}
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Engine size
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.engineSize}L
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Drivetrain
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.drivetrain}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.carDetailsParamsRight}>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Transmission
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.transmission}
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Body style
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.bodyStyle}
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Color
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.color}
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Price
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.price}€
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsParam}>
                                        <div className={styles.carDetailsParamLabel}>
                                            Location
                                        </div>
                                        <div className={styles.carDetailsParamValue}>
                                            {car.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.carDetailsMain}>
                                <div className={styles.carDetailsDescWrap}>
                                    <div className={styles.carDetailsHeading}>
                                        Basic information <SecondLogo className={`cmLogo ${styles.carDetailsHeadingLogo}`}/> 
                                    </div>
                                    <div className={styles.carDetailsDesc}>
                                        {car.description}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis, nisi ac bibendum venenatis, nibh nisl auctor justo, eget facilisis lectus leo in nunc. 
                                        Sed consequat dolor a purus ultrices, non scelerisque arcu dapibus. Nam rhoncus a nulla id congue. Etiam pellentesque sit amet dolor ac commodo. 
                                        Aenean interdum felis libero, vitae dapibus lectus efficitur eget. Donec ut venenatis mi. Morbi a tellus elementum, mollis purus ut, tristique lacus.
                                    </div>
                                </div>
                                <div className={styles.carDetailsFeaturesWrap}>
                                    <div className={styles.carDetailsHeading}>
                                        Equipment <SecondLogo className={`cmLogo ${styles.carDetailsHeadingLogo}`}/> 
                                    </div>
                                    <div className={styles.carDetailsFeatures}>
                                        {car.features}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis, nisi ac bibendum venenatis, nibh nisl auctor justo, eget facilisis lectus leo in nunc. 
                                        Sed consequat dolor a purus ultrices, non scelerisque arcu dapibus. Nam rhoncus a nulla id congue. Etiam pellentesque sit amet dolor ac commodo. 
                                        Aenean interdum felis libero, vitae dapibus lectus efficitur eget. Donec ut venenatis mi. Morbi a tellus elementum, mollis purus ut, tristique lacus.
                                    </div>
                                </div>
                            </div>
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