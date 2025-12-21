import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import SecondLogo from "../assets/second-logo.svg?react"
import Offers from "../components/Offers"
import Heading from "../components/Heading"
import LoadingScreen from "../components/LoadingScreen"
import Button from "../components/Button"

import styles from "../styles/components/Car.module.css"

const Car = () => {
    const { slug } = useParams();
    const [car, setCar] = useState(null);
    const [error, setError] = useState("");
    const [image, setImage] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [sliderIndex, setSliderIndex] = useState(0);
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

    const hideImg = (e) => {
        if (e.target == e.currentTarget) {
            setImage("");
        }
    }

    const handleSlider = () => {
        if (sliderIndex > car.carImage.length) {
            setSliderIndex(0);
            return;
        }
        if (sliderIndex < 0) {
            setSliderIndex(car.carImage.length);
        }
    }

    const handleGallery = () => {
        if (galleryIndex == 0) {
            setImage(car.image);
            return;
        }
        if (galleryIndex > car.carImage.length) {
            setImage(car.image);
            return;
        }
        if (galleryIndex < 0) {
            setImage(car.carImage[car.carImage.length - 1].image);
            return;
        }

        setImage(car.carImage[galleryIndex - 1].image);
    }

    useEffect(() => {
        if (car != null) {
            handleSlider();
        }   
    }, [sliderIndex]); 


    useEffect(() => {
        if (car != null) {
            handleGallery();
        }
    }, [galleryIndex]);

    useEffect(() => {
        if (image) {
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = "15px";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.marginRight = "";
        }
    }, [image]);

    useEffect(() => {
        getCar();
    }, [slug]);

    if (error) {
        return <div className="inner spaced errMsg">{error}</div>
    }

    if (car == null) {
        return <LoadingScreen />
    }

    return (
        <>
            {!loaded && <LoadingScreen />}
            {image && 
                <div className={styles.carImageWrap} onClick={hideImg}>
                    <FaChevronLeft className={`${styles.swipeLeftIcon} 
                        ${styles.swipeIcon} ${styles.gallerySwipeIcon}`}
                        onClick={() => {setGalleryIndex(prev => prev - 1)}}            
                    />
                    <img src={`http://localhost:8080${image}`} 
                        alt={`${car.make + " " + car.model}`}
                        className={styles.carImage} 
                    />
                    <FaChevronRight className={`${styles.swipeRightIcon}
                        ${styles.swipeIcon} ${styles.gallerySwipeIcon}`}
                        onClick={() => {setGalleryIndex(prev => prev + 1)}}/>
                </div>
            }
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
                            <div className={styles.carIntroSlider} style={{ transform: `translateX(-${sliderIndex * 100}%)` }}>
                                <img src={`http://localhost:8080${car.image}`} 
                                    alt={`${car.make + " " + car.model}`} 
                                    className={styles.carIntroImg}
                                    onLoad={() => setLoaded(true)}
                                />
                                {car.carImage.map((image, id) => (
                                    <img key={id}src={`http://localhost:8080${image.image}`} 
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
                    <div className="inner">
                        <div className={styles.carGallery}>
                            <div className={styles.carGalleryImgWrap}>
                                <img src={`http://localhost:8080${car.image}`} 
                                    alt={car.model} 
                                    className={styles.carGalleryImg} 
                                    onClick={() => {setImage(car.image); setGalleryIndex(0)}}
                                />
                            </div>
                            {car.carImage.map((image, id) => (
                            <div key={image.id} className={styles.carGalleryImgWrap} >
                                <img src={`http://localhost:8080${image.image}`} 
                                    alt={car.model} 
                                    className={styles.carGalleryImg}
                                    onClick={() => {setImage(image.image); setGalleryIndex(id + 1)}}           
                                />
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="inner spaced">
                        <div className={styles.carDetails}>
                            <div className={styles.carDetailsParams}>
                                <h2 className={styles.carDetailsHeading}>
                                    Car specifications
                                </h2>
                                <div className={styles.carDetailsParamList}>
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
                                                Location
                                            </div>
                                            <div className={styles.carDetailsParamValue}>
                                                {car.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.carDetailsPriceWrap}>
                                    <div className={styles.carDetailsPrice}>
                                        <div className={styles.carDetailsPriceLabel}>Price</div>
                                        <span className={styles.carDetailsPriceValue}>€ {car.price} </span>
                                        with VAT
                                    </div>
                                    <Button to="/contact">
                                        Contact seller
                                        <FaChevronRight className="buttonArrow" />
                                    </Button>
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
                                <div className={styles.carDetailsEquipmentWrap}>
                                    <div className={styles.carDetailsHeading}>
                                        Equipment <SecondLogo className={`cmLogo ${styles.carDetailsHeadingLogo}`}/> 
                                    </div>
                                    <div className={styles.carDetailsEquipment}>
                                        {car.equipment}
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
            <aside>
                <div className="inner">
                    <div className={styles.contactForm}>
                        <h2 className={styles.contactFormHeading}>
                            Interested in this {car.make} {car.model}? <SecondLogo className={`cmLogo`} />
                        </h2>
                        <div className={styles.contactFormFields}>
                            <div className={styles.contactFormFieldWrapper}>
                                <label className={styles.contactFormLabel}>First name</label>
                                <input type="text" className={styles.contactFormField}/>
                            </div>
                            <div className={styles.contactFormFieldWrapper}>
                                <label className={styles.contactFormLabel}>Last name</label>
                                <input type="text" className={styles.contactFormField}/>
                            </div>
                            <div className={styles.contactFormFieldWrapper}>
                                <label className={styles.contactFormLabel}>E-mail address</label>
                                <input type="text" className={styles.contactFormField}/>
                            </div>
                            <div className={styles.contactFormFieldWrapper}>
                                <label className={styles.contactFormLabel}>Phone number</label>
                                <input type="text" className={styles.contactFormField}/>
                            </div>
                            <div className={styles.contactFormFieldWrapper}>
                                <label className={styles.contactFormLabel}>Message</label>
                                <textarea name="" id="" className={styles.contactFormField}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Car;