import React from 'react';
import ReactDOM from 'react-dom';

import '../style/main.scss';

const HelloWorld = () => {
  return (
    // <></>
    <React.Fragment>
      <h1 className="header">Hi!</h1>
      <div id="injectHere" />
      <div id="dupa" />
    </React.Fragment>
  );
};
ReactDOM.render(<HelloWorld />, document.getElementById('root'));

ReactDOM.render(
  React.createElement(
    'h2',
    { id: 'mojeh2', className: 'header' },
    'Playing with react is cool'
  ),
  document.getElementById('injectHere')
);

ReactDOM.render(
  React.createElement(
    'ul',
    { id: 'fajnalistaReactowa' },

    React.createElement('li', { id: 'item1' }, 'item 1 hi \u26CF;')
  ),
  document.getElementById('dupa')
);
