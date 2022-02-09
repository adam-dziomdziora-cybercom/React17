import React from 'react';

import styles from '../style/loader.scss';

class MyLoader extends React.PureComponent {
  render() {
    return <div className={styles.loader} />;
  }
}
export default MyLoader;
