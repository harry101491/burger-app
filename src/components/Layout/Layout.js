import React from "react";

import styles from "./Layout.css";

import Aux from "../../hoc/Aux/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <main className={ styles.Content }>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;