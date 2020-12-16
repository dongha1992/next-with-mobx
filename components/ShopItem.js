import React from 'react';
import styles from './ShopItem.css';

const ShopItem = ({ name, price, onPut }) => {
  return (
    <div className={styles.ShopItem} onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
};

export default ShopItem;
