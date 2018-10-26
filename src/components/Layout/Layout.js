import React from "react";

import Aux from "../../hoc/Aux/Aux";

const Layout = (props) => {
    return (
        <Aux>
            <div> Toolbar, SideDrawer and Backdrop </div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;