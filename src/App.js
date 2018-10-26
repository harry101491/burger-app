import React, { Component } from "react";

// Importing styles
import styles from "./App.css";

import Layout from "./components/Layout/Layout";

class App extends Component {

  constructor(props) {
    super(props);

    console.log("Inside the constructor");
  }

  render() {
    return(
      <div className={styles.App}>
        <Layout>
          <p>Inside the Layout!</p>
        </Layout>
      </div>
    );
  }
}

export default App;