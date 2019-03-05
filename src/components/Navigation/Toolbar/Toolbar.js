import React from "react";

import styles from "./Toolbar.css";
import Logo from "../../Logo/Logo";

import NavigationalItems from "../NavigationalItems/NavigationalItems";

const toolbar = (props) => {
    return (
        <header className={ styles.Toolbar }>
            <div>MENU</div>
            <div className={ styles.Logo }>
                <Logo />
            </div>
            <nav className={ styles.DisplayMobile }>
                <NavigationalItems />
            </nav>
        </header>
    );
};

export default toolbar;