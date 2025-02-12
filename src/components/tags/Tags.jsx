import  { useState } from "react";
import styles from "./tags.module.css";

const Tags = () => {
    const [tags] = useState([
        "For You",
        "Premium",
        "Cricket",
        "MTV Roadies XX",
        "FREE Movies",
        "Bigg Boss",
        "News",
        "Kids & Family",
        "AUS vs IND",
        "FREE Anime",
        "FREE Show"
    ]);

    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <p key={index} className={styles.tag}>{tag}</p>
            ))}
        </div>
    );
};

export default Tags;
