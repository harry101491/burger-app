import React from "react";

import styles from "./BuildControl.css";

const buildControl = (props) => {
    return (
        <div className={ styles.BuildControl }>
            <div className={ styles.Label }></div>
            <button className={ styles.Less }> Less </button>
            <button className={ styles.More }> More </button>
        </div>
    );
};

export default buildControl;