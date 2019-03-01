import React from "react";

import styles from "./Logo.css";

/**
 why we are dynamically importing the burgerLogo because 
 if we put it hard coding way webpack will not the correct
 place to put it and image location in the output folder will
 not be the same
 */
import burgerLogo from "../../assets/images/burger-logo.png";

const logo = (props) => {
    return (
        <div className={ styles.Logo }>
            <img src={ burgerLogo } alt="BurgerOut" />
        </div>        
    );
};

export default logo;