import React from 'react';

import style from '../style/home.scss';
class Home extends React.PureComponent {
  render() {
    return (
      <div className={style.body}>
        <h1 aria-label="Knowit loves&#129414;" />
      </div>
    );
  }
}

export default Home;
