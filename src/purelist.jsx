import React from 'react';
import PropTypes from 'prop-types';

import styles from '../style/purelist.scss';

class ListPure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { myItems: [4, 5, 64] };
    // this.doStuff = this.doStuff.bind(this); // replaced with labda syntax
    this.doNothing = this.doNothing.bind(this);
  }

  doNothing() {
    // nothig here :)
  }

  doStuff = () => {
    const { myItems } = this.state;
    const lastItemIncreased = myItems[myItems.length - 1] + 67;
    const newMyItems = [...myItems, lastItemIncreased];
    this.setState({ myItems: newMyItems });
  };

  render() {
    const { id, valueIWantToSee } = this.props;
    console.log(`i am redenering here! ${valueIWantToSee}`);
    const { myItems } = this.state;

    return (
      <div id="mainDiv" className={styles.listPure}>
        <ul id={id}>
          My list with Id: {id} has state {myItems}
          {valueIWantToSee && valueIWantToSee.length > 0 && (
            <p>OK there is your content: {valueIWantToSee}</p>
          )}
        </ul>

        <button
          type="button"
          className="btn btn-primary"
          onClick={this.doStuff}
        >
          click n dostuff
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.doNothing}
        >
          click donothing!
        </button>
      </div>
    );
  }
}

ListPure.propTypes = {
  id: PropTypes.string.isRequired,
  valueIWantToSee: PropTypes.string,
};

ListPure.defaultProps = {
  valueIWantToSee: '',
};

export default ListPure;
