import { FaChevronRight, FaChevronLeft} from "react-icons/fa"
import { useEffect } from "react";

import styles from "../styles/components/ImagePreview.module.css"

const ImagePreview = ({ car, index, setIndex, setIsOpen, isOpen }) => {
    const hideImg = (e) => {
        if (e.target == e.currentTarget) {
            setIsOpen(false);
        }
    }

    const prevImage = () => {
        if (index - 1 < 0) {
            setIndex(car.carImages.length - 1);
            return; 
        }
        setIndex(index - 1);
    };

    const nextImage = () => {
        if (index + 1 >= car.carImages.length) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    };
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = "15px";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.marginRight = "";
        }
    }, [isOpen]);

    return (
        isOpen && 
        <div className={styles.carImageWrap} onClick={hideImg}>
            <img src={`http://localhost:8080${car.carImages[index].image}`} 
                alt={`${car.make + " " + car.model}`}
                className={styles.carImage} 
            />
            <FaChevronLeft className={`${styles.swipeLeftIcon} 
                ${styles.swipeIcon}`}
                onClick={prevImage}            
            />
            <FaChevronRight className={`${styles.swipeRightIcon}
                ${styles.swipeIcon}`}
                onClick={nextImage}/>
        </div>
    )
}

export default ImagePreview;