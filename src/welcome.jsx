import React from 'react';
import ListAsComponent from './lists';
import ListPure from './purelist';

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
    const { date } = this.state;

    return (
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
        <p>{date}</p>
        <button className="btn btn-primary" onClick={this.updateListWithLogger}>
          lets update!
        </button>
      </React.Fragment>
    );
  }
}

export default HelloWorld;
