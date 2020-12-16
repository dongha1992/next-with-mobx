import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styles from './counter.css';

@inject('counter')
@observer
class Counter extends Component {
  render() {
    const { counter } = this.props;
    return (
      <div className={styles.counterWrap}>
        <h1 className={styles.currentCount}>수량 : {counter.number}</h1>
        <button onClick={counter.increase} className={styles.plusBtn}>
          +1
        </button>
        <button onClick={counter.decrease} className={styles.minusBtn}>
          -1
        </button>
      </div>
    );
  }
}
export default Counter;
