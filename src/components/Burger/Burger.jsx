import React from 'react';

import styles from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burgerComponent = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((inKey) => {
    return [...Array(props.ingredients[inKey]) ].map((_, index) => {
      return (<BurgerIngredient key={ inKey + index }  type={ inKey } />);
    });
  }).reduce((acc, current) => {
    return acc.concat(current);
  }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients!! </p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      { transformedIngredients }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burgerComponent;
