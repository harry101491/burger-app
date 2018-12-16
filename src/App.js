import React, { Component } from "react";

// Importing styles
import styles from "./App.css";

// components
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {

  constructor(props) {
    super(props);

    console.log("Inside the constructor");
  }

  render() {
    return(
      <div className={styles.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;