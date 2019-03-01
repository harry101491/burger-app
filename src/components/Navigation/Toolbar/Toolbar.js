import React from "react";

import styles from "./Toolbar.css";
import Logo from "../../Logo/Logo";

const toolbar = (props) => {
    return (
        <header className={ styles.Toolbar }>
            <div>MENU</div>
            <Logo />
            <nav>
                <ul></ul>
            </nav>
        </header>
    );
};

export default toolbar;