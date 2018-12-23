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
            {
                controls.map((ctr) => {
                    return <BuildControl
                            more={ () => props.addIngredient(ctr.type) }
                            less={ () => props.removeIngredient(ctr.type) }  
                            key={ ctr.label } 
                            label={ ctr.label } 
                        />
                })
            }
        </div>
    );
};

export default buildControls;