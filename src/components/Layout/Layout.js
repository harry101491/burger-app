import React from "react";

import Aux from "../../hoc/Aux/Aux";
import styles from "./Layout.css";

const Layout = (props) => {
    return (
        <Aux>
            {/* <div> Toolbar, SideDrawer and Backdrop </div> */}
            <main className={ styles.Content }>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;