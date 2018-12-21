import React from "react";

import styles from "./Burger.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burgerComponent = (props) => {

    console.log("the value of the props", props.ingredients );
    let transformedIngredients = Object.keys(props.ingredients).map((inKey) => {
        return [ ...Array(props.ingredients[inKey]) ].map((_, index) => {
            return (<BurgerIngredient key={ inKey + index }  type={ inKey } />);
        });
    });

    return(
        <div className={ styles.Burger }>
            <BurgerIngredient type="bread-top" />
                { transformedIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div> 
    );
};

export default burgerComponent;