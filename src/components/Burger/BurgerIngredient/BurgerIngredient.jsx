import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './BurgerIngredient.css';

class BurgerIngredient extends Component {
  constructor(props) {
    super(props);
    this.ingredient = null;
  }

  render() {
    const { type } = this.props;
    switch (type) {
      case ('bread-bottom'):
        this.ingredient = <div className={styles.BreadBottom} />;
        break;
      case ('bread-top'):
        this.ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1} />
            <div className={styles.Seeds2} />
          </div>
        );
        break;
      case ('meat'):
        this.ingredient = <div className={styles.Meat} />;
        break;
      case ('cheese'):
        this.ingredient = <div className={styles.Cheese} />;
        break;
      case ('salad'):
        this.ingredient = <div className={styles.Salad} />;
        break;
      case ('bacon'):
        this.ingredient = <div className={styles.Bacon} />;
        break;
      default:
        this.ingredient = null;
        break;
    }
    return this.ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
