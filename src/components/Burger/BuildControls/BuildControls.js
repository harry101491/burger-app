import React from "react";

import styles from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {
        "label": "Salad",
        "type": "salad"
    },
    {
        "label": "Bacon",
        "type": "bacon"
    },
    {
        "label": "Cheese",
        "type": "cheese"
    },
    {
        "label": "Meat",
        "type": "meat"
    }
];

const buildControls = (props) => {
    return (
        <div className={ styles.BuildControl }>
            <p>
                Current Price: <strong>{ props.price.toFixed(2) }</strong>
            </p>
            {
                controls.map((ctr) => {
                    return <BuildControl
                            more={ () => props.addIngredient(ctr.type) }
                            less={ () => props.removeIngredient(ctr.type) }
                            disableControl={ props.disabled[ctr.type] }  
                            key={ ctr.label } 
                            label={ ctr.label } 
                        />
                })
            }
            <button
                disabled={ !props.purchasable } 
                className={ styles.OrderButton }
            >ORDER NOW!!</button>
        </div>
    );
};

export default buildControls;