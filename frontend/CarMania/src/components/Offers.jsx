import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/components/Offers.module.css"

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [error, setError] = useState("");

    const getOffers = () => {
        fetch("http://localhost:8080/api/cars/count/6")
            .then(res => res.json())
            .then(data => setOffers(data))
            .catch(() => setError("Failed to load offers."));
    }

    useEffect(() => {
        getOffers();
    }, []);

    return (
        error ? 
        <div className="inner spaced errMsg"> 
            {error}
        </div> :
        <div className={`inner spaced ${styles.offersListWrap}`}>
            <ul className={styles.offersList}>
                {
                    offers.map(offer => (
                        <li className={styles.offersItem} key={offer.id}>
                            <Link className={styles.offersItemLink} to="/shop">
                                <div className={styles.offersItemTop}>
                                    <img className={styles.offersItemImg} 
                                    src={`http://localhost:8080/${offer.image}`} 
                                    alt={offer.name} />
                                </div>  
                                <div className={styles.offersItemBottom}>
                                    <div className={styles.offersItemLabel} to="">
                                        {offer.year} | {offer.mileage} km | {offer.fuelType}
                                    </div>
                                    <div className={styles.offersItemText}>
                                        <h2 className={styles.offersItemBrand}>{offer.make}</h2>
                                        <h2 className={styles.offersItemModel}>{offer.model}</h2>
                                        <div className={styles.offersItemPrice}>{offer.price}€ Tax included</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>   
        </div>  
    )
}

export default Offers;