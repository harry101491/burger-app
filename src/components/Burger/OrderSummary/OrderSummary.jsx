import React from 'react';

import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const {
    ingredients, price, canceled, continued,
  } = props;
  const ingredientList = Object.keys(ingredients).map(inKey => (
    <li key={inKey}>
      <span style={{ textTransform: 'capitalize' }}>
        { inKey }
      </span>
         :
      { props.ingredients[inKey] }
    </li>
  ));

  return (
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
        Total Price
         :
        {price.toFixed(2)}
      </p>
      <p>
        Continue to Checkout?
      </p>
      <Button btnType="Danger" clicked={canceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={continued}>
            CONTINUE
      </Button>
    </Aux>
  );
};

orderSummary.propTypes = {
  ingredients: PropTypes.shape({
    salad: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
  }).isRequired,
  price: PropTypes.number.isRequired,
  canceled: PropTypes.func.isRequired,
  continued: PropTypes.func.isRequired,
};

export default orderSummary;
