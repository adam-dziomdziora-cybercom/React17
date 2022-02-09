import React from 'react';
import ListAsComponent from './lists';
import ListPure from './purelist';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { TYPES } from '../redux/count.reducer';

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => {
      console.log('jestem w handle increment od dispatcha :O :O :O !');
      dispatch({ type: TYPES.INCREMENT });
    },
    handleDecrementClick: () => dispatch({ type: TYPES.DECREMENT }),
  };
};

class HelloWorld extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { date: '', items: [9, 8, 7] };
    this.updateListWithLogger = this.updateListWithLogger.bind(this);
    console.log('construktor hello');
  }

  componentDidUpdate = () => {
    console.log('zrobiłę udpatę');
  };

  handleIncrementClick = () => {
    console.log('jestem w handle increment od hello');
    this.props.handleIncrementClick();
  };

  handleDecrementClick = () => {
    this.props.handleDecrementClick();
  };

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
    const { count } = this.props;

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
        <br />
        <br />
        <br />

        <h2>Redux power: {count}</h2>

        <button className="btn btn-primary" onClick={this.handleIncrementClick}>
          REDUX +++
        </button>
        <button className="btn btn-light" onClick={this.handleDecrementClick}>
          REDUX ---
        </button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  count: PropTypes.number.isRequired,
  handleIncrementClick: PropTypes.func.isRequired,
  handleDecrementClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
