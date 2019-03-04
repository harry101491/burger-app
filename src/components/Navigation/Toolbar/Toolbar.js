import React from "react";

import styles from "./Toolbar.css";
import Logo from "../../Logo/Logo";

import NavigationalItems from "./NavigationalItems/NavigationalItems";

const toolbar = (props) => {
    return (
        <header className={ styles.Toolbar }>
            <div>MENU</div>
            <Logo />
            <nav>
                <NavigationalItems active/>
            </nav>
        </header>
    );
};

export default toolbar;