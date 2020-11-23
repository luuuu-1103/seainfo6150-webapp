import React from "react";
import styles from "./ArticleImage.module.css";

function ArticleImage(props) {
    return (
        <div>
            <img className={styles.image} src={props.image}></img>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
        
    )
}

export default ArticleImage;