import React from "react";

import styles from "./Layout.css";

import Aux from "../../hoc/Aux/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <main className={ styles.Content }>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;