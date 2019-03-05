import React from "react";

import styles from "./NavigationalItems.css";

import NavigationalItem from "./NavigationalItem/NavigationalItem";

const navigationalItems = (props) => {
    return (
        <ul className={styles.NavigationalItems}>
            <NavigationalItem link="/" active>
                Burger Builder
            </NavigationalItem>
            <NavigationalItem link="/">
                Checkout
            </NavigationalItem>
        </ul>
    );
};

export default navigationalItems;