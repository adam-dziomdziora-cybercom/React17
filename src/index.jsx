/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import '../style/main.scss';
import ListAsComponent from './lists';
import ListPure from './purelist';
import withLogger from './wrappedLogger';

class HelloWorld extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { date: '', items: [9, 8, 7] };
    this.updateListWithLogger = this.updateListWithLogger.bind(this);
  }

  updateListWithLogger() {
    const date = new Date().toLocaleTimeString();
    this.setState({ date });
  }

  onChange = (lastValue) => {
    const newValue = lastValue + 1;
    const { items } = this.state;
    const items2 = [...items, newValue];
    const updatedDate = `Last updateted at ${new Date().toLocaleTimeString()}, inserted value ${newValue}`;
    this.setState({ date: updatedDate, items: items2 });
  };

  render() {
    const ListWithLogger = withLogger(ListPure);
    const { date, items } = this.state;

    return (
      // <></>
      <React.Fragment>
        <h1 className="header">Hi!</h1>
        <div id="injectHere" />
        <div id="dupa" />
        <div id="dupa2" />
        <div id="dupa3" />
        <div id="react-component" />
        <ListAsComponent id="listascomonent1" />
        <ListAsComponent
          id="listascomonent2"
          valueIWantToSee="show me your hidden power!"
        />
        <ListPure id="listascomonent1" />
        <ListPure
          id="listascomonent2"
          valueIWantToSee="show me your hidden power!"
        />
        {/* <ListWithLogger
          id="556"
          valueToInject={date}
          onChange={this.onChange}
          items={items}
        /> */}
        <p>{date}</p>
        <button className="btn btn-primary" onClick={this.updateListWithLogger}>
          lets update!
        </button>
      </React.Fragment>
    );
  }
}

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

const id1 = 'myList234';
const listItem1 = <li>does it work?</li>;

ReactDOM.render(
  <ul id={id1}> {listItem1} </ul>,
  document.getElementById('dupa2')
);

const id2 = 'myId2';
// [123, 321, 55]
const listItems = Array.from({ length: 3 }, (_, idx) => `${++idx}`).map(
  (singleValue) => (
    <li
      key={singleValue}
      className="list-group-item"
    >{`tutaj jest string polaczony ze zmienna ${singleValue}`}</li>
  )
);

ReactDOM.render(
  <ul id={id2} className="list-group">
    {listItems}
  </ul>,
  document.getElementById('dupa3')
);

ReactDOM.render(
  <ListAsComponent id="mojeIdzpalca" valueIWantToSee="ta daaaaam" />,
  document.getElementById('react-component')
);
