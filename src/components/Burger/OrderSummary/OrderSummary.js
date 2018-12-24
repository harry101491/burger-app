import React from "react";

import Aux from "../../../hoc/Aux/Aux";

const orderSummary = (props) => {

    const ingredientList = Object.keys(props.ingredients).map((inKey, index) => {
        return (
                <li key={ inKey + index }> 
                    <span style={ { textTransform: 'capitalize' } } > { inKey } </span>: { props.ingredients[inKey] } 
                </li>
            );
    });

    return(
        <Aux>
            <h3>
                Your Order Summary
            </h3>
            <p>
                The delicious burger contains following items: 
            </p>
            <ul>
                { ingredientList }
            </ul>
            <p>
                Continue to Checkout?
            </p>
        </Aux>
    );
};

export default orderSummary;