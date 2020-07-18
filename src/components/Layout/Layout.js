import React from "react";

import styles from "./Layout.css";

import Aux from "../../hoc/Aux/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
    const { children } = props;
    return (
        <Aux>
            <Toolbar />
            <SideDrawer />
            <main className={ styles.Content }>
                {children}
            </main>
        </Aux>
    );
};

export default Layout;