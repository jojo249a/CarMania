import { useEffect, useState } from "react";
import styles from "../styles/components/Filter.module.css"

const Filter = ({ status, setMake }) => {
    const [count, setCount] = useState(0);
    const [activeMake, setActiveMake] = useState("All");    
    const [makes, setMakes] = useState([]);

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
        <div className={styles.filter}>
            <button className={`${styles.filterButton} ${activeMake == "All" ? styles.active : ""}`} 
                    onClick={() => {setActiveMake("All"); setMake("All")}}>All vehicles ({count})
            </button>
            {makes.map((make) => (
                <button key={make} className={`${styles.filterButton} ${activeMake == make ? styles.active : ""}`} 
                        onClick={() => {setActiveMake(make); setMake(make)}}>{make}
                </button>
            ))}
        </div>
    )
}

export default Filter;