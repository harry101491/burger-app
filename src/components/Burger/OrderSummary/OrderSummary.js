import React from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

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
            <p>Total Price: { props.price.toFixed(2) }</p>
            <p>
                Continue to Checkout?
            </p>
            <Button btnType="Danger" clicked={ props.canceled } >
                CANCEL
            </Button>
            <Button btnType="Success" clicked={ props.continued } >
                CONTINUE
            </Button>
        </Aux>
    );
};

export default orderSummary;