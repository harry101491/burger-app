import React from "react";

import styles from "./NavigationalItem.css";

const navigationalItem = (props) => {
    return(
        <li className={ styles.NavigationalItem }>
            <a 
                href={ props.link }
                className={ props.active ? styles.active : null }
            >
                { props.children }
            </a>
        </li>
    );
};

export default navigationalItem;