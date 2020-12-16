import React from 'react';
import styles from './BasketItem.css';
import { observer } from 'mobx-react';

const BasketItem = ({ name, price, count, onTake }) => {
  return (
    <div className={styles.BasketItem}>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>{price}원</div>
      <div className={styles.count}>{count}</div>
      <div className={styles.return} onClick={() => onTake(name)}>
        갖다놓기
      </div>
    </div>
  );
};

export default observer(BasketItem);
