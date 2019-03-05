import React from "react";

import Logo from "../../Logo/Logo";
import NavigationalItems from "../NavigationalItems/NavigationalItems";
import styles from "./SideDrawer.css";

const sideDrawer= (props) => {
    return (
        <div className={ styles.SideDrawer }>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationalItems />
            </nav>
        </div>
    );
};

export default sideDrawer;