import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
    salad: 0.5,
    meat: 1.5,
    cheese: 0.4,
    bacon: 1.7
};

class BurgerBuilder extends Component {
    
    state = { 
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchasable: false
    };

    /**
     * Function to update the value of purchasble that if the 
     * we can purchase the burger or not
     */
    updatePurchasable = (ingredient) => {
    
        const currentTotalPrice = Object.keys(ingredient).map((key) => {
            return ingredient[key];
        })
        .reduce((acc, ele) => {
            return acc + ele;
        }, 0);

        if(currentTotalPrice > 0) {
            this.setState({ purchasable: true });
        }
        else {
            this.setState({ purchasable: false });
        }
    };

    /**
     * Adding the ingredient with the given type
     */
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const currentCount = oldCount + 1;
        let updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = currentCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState(
            {
                totalPrice: newPrice,
                ingredients: updatedIngredient
            }
        );

        this.updatePurchasable(updatedIngredient);
    };

    /**
     * Removing the ingredient with given type
     */
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let currentCount;
        if(oldCount === 0) {
            currentCount = 0;
        }
        else {
            currentCount = oldCount - 1;
        }
        let updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = currentCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState(
            {
                totalPrice: newPrice,
                ingredients: updatedIngredient
            }
        );

        this.updatePurchasable(updatedIngredient);
    };

    render() {

        const disabledMap = {
            ...this.state.ingredients
        };

        for(let key in disabledMap) {
            disabledMap[key] = disabledMap[key] === 0;
        }

        return(
            <Aux>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls 
                    addIngredient={ this.addIngredientHandler }  
                    removeIngredient={ this.removeIngredientHandler }
                    disabled={ disabledMap }
                    purchasable={ this.state.purchasable }
                    price={ this.state.totalPrice }  
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;