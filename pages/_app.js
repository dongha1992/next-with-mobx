import { Fragment } from 'react';
import '../styles/globals.css';
import App from 'next/app';
import { Provider } from 'mobx-react';
// import CounterStore from '../stores/counter';
// import MarketStore from '../stores/market';
import RootStore from '../stores';

// const counter = new CounterStore();
// const market = new MarketStore();

const root = new RootStore();
console.log(root);
class CustomApp extends App {
  handleLoadStyle = (url) => {
    if (this.cacheURL.includes(url)) return;
    const els = document.querySelectorAll(
      'link[href*="/_next/static/css/styles.chunk.css"]'
    );
    const timestamp = new Date().valueOf();
    for (let i = 0; i < els.length; i++) {
      if (els[i].rel === 'stylesheet') {
        els[i].href = '/_next/static/css/styles.chunk.css?v=' + timestamp;
        console.log('Style loaded');
        this.cacheURL.push(url);
        break;
      }
    }
  };
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...root}>
        <Fragment>
          <Component {...pageProps} />
        </Fragment>
      </Provider>
    );
  }
}

export default CustomApp;
