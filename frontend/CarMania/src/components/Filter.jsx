import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "../styles/components/Filter.module.css"

const Filter = ({ status, onMakeChange, currentMake }) => {
    const [count, setCount] = useState(0);  
    const [makes, setMakes] = useState([]);
    const [opened, setOpened] = useState(false); 

    const getMakes = async() => {
        const res = await fetch(`http://localhost:8080/api/cars/makes?status=${status}`);
        const data = await res.json();
        setMakes(data);
    }

    const getCount = async () => {
        const res = await fetch(`http://localhost:8080/api/cars/count?status=${status}`);
        const data = await res.json();
        setCount(data);
    }

    useEffect(() => {
        getCount();
    }, []);

    useEffect(() => {
        getMakes();
    }, []);

    return (
        <div className={`${styles.filter} ${opened ? styles.opened : ""}`}>
            <div className={styles.currentOption} onClick={() => setOpened(!opened)}>{`${currentMake == "All" ? `All vehicles (${count})` : currentMake}`}<FaChevronDown className={styles.optionsArrow}/></div>
            <ul className={styles.optionsList}>
                <li className={styles.optionsOption}>
                    <button className={`${styles.filterButton} ${currentMake == "All" ? styles.active : ""}`} 
                        onClick={() => {onMakeChange("All"); setOpened(!opened)}}>All vehicles ({count})
                    </button>
                </li>
                {makes.map((make) => (
                    <li key={make} className={styles.optionsOption}>
                        <button className={`${styles.filterButton} ${currentMake == make ? styles.active : ""}`} 
                                onClick={() => {onMakeChange(make); setOpened(!opened)}}>{make}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Filter;