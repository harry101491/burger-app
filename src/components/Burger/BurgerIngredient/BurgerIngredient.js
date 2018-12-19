import React, { Component } from "react";

import PropTypes from "prop-types";

import styles from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
    ingredient;

    constructor(props) {
        super(props);
        this.ingredient = null;
    }

    render() {
        switch(this.props.type) {
            case("bread-bottom"): 
                this.ingredient = <div className={ styles.BreadBottom }></div>;
                break;
            case("bread-top"):
                this.ingredient = (
                    <div className={ styles.BreadTop } >
                        <div className={ styles.Seeds1 }></div>
                        <div className={ styles.Seeds1 }></div>
                    </div>
                );
                break;
            case ("meat"):
                this.ingredient = <div className={ styles.Meat }></div>;
                break;
            case ("cheese"):
                this.ingredient = <div className={ styles.Cheese }></div>;
                break;
            case ("salad"):
                this.ingredient = <div className={ styles.Salad }></div>;
                break;
            case ("becon"):
                this.ingredient = <div className={ styles.Becon }></div>;
                break; 
            default:
                break;
        }
        return this.ingredient;
    }
}

export default BurgerIngredient;