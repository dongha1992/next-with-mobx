import React from 'react';
import styles from './SuperMarketTemplate.css';
import ShopItemList from './ShopItemList';

const SuperMarketTemplate = ({ items, basket, total }) => {
  return (
    <div className={styles.SuperMarketTemplate}>
      <div className={styles.items_wrapper}>
        <h2 className={styles.h2}>상품</h2>
        {items}
      </div>
      <div className={styles.basket_wrapper}>
        <h2 className={styles.h2}>장바구니</h2>
        {basket}
        {total}
      </div>
    </div>
  );
};

export default SuperMarketTemplate;
