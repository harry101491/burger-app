import React from "react";

import styles from "./Backdrop.css";

const backdropComponent = (props) => {
    return (
       props.show ? <div className={ styles.Backdrop }></div> : null
    );
};

export default backdropComponent;