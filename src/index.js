import React from 'react';
import ReactDOM from 'react-dom';

import '../style/main.scss';

const HelloWorld = () => {
  return <h1 className="header">Hi!</h1>;
};
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
