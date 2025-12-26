import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, 
FaChevronRight, FaChevronLeft, FaRegCheckCircle, FaEye } from "react-icons/fa"
import SecondLogo from "../assets/second-logo.svg?react"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import LoadingScreen from "../components/LoadingScreen"
import Button from "../components/Button"
import Contact from "../components/Contact"
import Buttons from "../components/Buttons"
import ImagePreview from "../components/ImagePreview"

import styles from "../styles/pages/Car.module.css"

const Car = () => {
    const { pathname } = useLocation();
    const { slug } = useParams();
    const [car, setCar] = useState(null);
    const [error, setError] = useState("");
    const [sliderIndex, setSliderIndex] = useState(0);
    const [imageShown, setImageShown] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);

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

    const handleSlider = () => {
        if (sliderIndex >= car.carImages.length) {
            setSliderIndex(0);
        }

        if (sliderIndex < 0) {
            setSliderIndex(car.carImages.length - 1);
        }
    }

    useEffect(() => {
        setSliderIndex(0);
    }, [pathname]);

    useEffect(() => {
        if (car != null) {
            handleSlider();
        }   
    }, [sliderIndex]); 
    
    useEffect(() => {
        getCar();
    }, [slug]);

    if (error) {
        return <div className="inner sectionSpacing errMsg">{error}</div>
    }

    if (car == null) {
        return <LoadingScreen />
    }

    return (
        <>
            <ImagePreview car={car} index={galleryIndex} setIndex={setGalleryIndex} setIsOpen={setImageShown} isOpen={imageShown} />
            <main>
                <section className="sectionFirst">
                    <div className={styles.carIntro}>
                        <div className={styles.carIntroText}>
                            <div className={styles.carIntroHeading}>{car.make}</div>
                            <div className={styles.carIntroModel}>{car.model}</div>
                        </div>
                        <div className={styles.carIntroImgWrap}>
                            <FaRegArrowAltCircleLeft className={`${styles.swipeLeftIcon} 
                                ${styles.swipeIcon}`}
                                onClick={() => setSliderIndex(prev => prev - 1)}
                            />
                            <div key={car.id} className={styles.carIntroSlider} style={{ transform: `translateX(-${sliderIndex * 100}%)` }}>
                                {car.carImages.map((image, id) => (
                                    <img key={id} src={`http://localhost:8080${image.image}`} 
                                        alt={`${car.make + " " + car.model}`} 
                                        className={styles.carIntroImg}
                                    />
                                ))}
                            </div>
                            <FaRegArrowAltCircleRight className={`${styles.swipeRightIcon} 
                                ${styles.swipeIcon}`} 
                                onClick={() => setSliderIndex(prev => prev + 1)}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className={styles.carGallery}>
                            {car.carImages.map((image, id) => (
                                <div key={id} className={styles.carGalleryPreview} >
                                    <img src={`http://localhost:8080${image.image}`} 
                                        alt={car.model} 
                                        className={styles.carGalleryImg}
                                        onClick={() => {setImageShown(true); setGalleryIndex(id)}}           
                                    />
                                    <FaEye className={styles.previewIcon}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sectionWhite">
                        <div className={`container`}>
                            <div className={styles.carDetails}>
                                <div className={styles.carDetailsParams}>
                                    <h2 className={styles.carDetailsHeading}>
                                        Car specifications
                                    </h2>
                                    <div className={styles.carDetailsParamList}>
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
                                                Location
                                            </div>
                                            <div className={styles.carDetailsParamValue}>
                                                {car.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsPriceWrap}>
                                        <div className={styles.carDetailsPrice}>
                                            <div className={styles.carDetailsPriceLabel}>Price</div>
                                            <span className={styles.carDetailsPriceValue}>€ {car.price} </span>
                                            with VAT
                                        </div>
                                        <Button className="buttonSmall">
                                            Contact seller
                                            <FaChevronRight className="buttonArrow" />
                                        </Button>
                                    </div>
                                </div>
                                <div className={styles.carDetailsMain}>
                                    <div className={styles.carDetailsDescWrap}>
                                        <div className={styles.carDetailsHeading}>
                                            Basic information <SecondLogo className={`${styles.carDetailsHeadingLogo}`}/> 
                                        </div>
                                        <div className={styles.carDetailsDesc}>
                                            {car.description}
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis, nisi ac bibendum venenatis, nibh nisl auctor justo, eget facilisis lectus leo in nunc. 
                                            Sed consequat dolor a purus ultrices, non scelerisque arcu dapibus. Nam rhoncus a nulla id congue. Etiam pellentesque sit amet dolor ac commodo. 
                                            Aenean interdum felis libero, vitae dapibus lectus efficitur eget. Donec ut venenatis mi. Morbi a tellus elementum, mollis purus ut, tristique lacus.
                                        </div>
                                    </div>
                                    <div className={styles.carDetailsEquipmentWrap}>
                                        <div className={styles.carDetailsHeading}>
                                            Equipment <SecondLogo className={`${styles.carDetailsHeadingLogo}`}/> 
                                        </div>
                                        <ul className={styles.carDetailsEquipmentList}>
                                            {car.equipment.map((equipment, id) => (
                                                <li key={id} className={styles.carDetailsEquipmentItem}>
                                                    <FaRegCheckCircle className={styles.carDetailsEquipmentCheckIcon}/>
                                                    {equipment.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <aside>
                    <div className="container sectionSpacing">
                        <Heading>
                            <SecondLogo className={`headingLogo`}/>
                            Current range of new and used cars
                        </Heading>
                    </div>
                    <div className="container sectionSpacing">
                        <Offers count={4} />
                    </div>
                    <div className="container sectionSpacing">
                        <Buttons>
                            <Button to="/used-cars" className="buttonWhite buttonsButton">
                                Certified used cars <FaChevronRight className="buttonArrow" />
                            </Button>
                            <Button to="/new-cars" className="buttonsButton">
                                New and demonstrator cars <FaChevronRight className="buttonArrow" />
                            </Button>
                        </Buttons>
                    </div> 
                </aside>
            </main>
            <Contact carName={car.make + " " + car.model}/>
        </>
    )
}

export default Car;