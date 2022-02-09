import React from 'react';
import PropTypes from 'prop-types';

import styles from '../style/lists.scss';

const listItem1 = <li>does it work? from external file</li>;
const ListAsComponent = (props) => {
  return (
    <ul id={props.id} className={styles.list}>
      {listItem1}

      {props.valueIWantToSee && props.valueIWantToSee.length > 0 && (
        <p>OK there is your content: {props.valueIWantToSee}</p>
      )}
    </ul>
  );
};

ListAsComponent.propTypes = {
  id: PropTypes.string.isRequired,
  valueIWantToSee: PropTypes.string,
};

ListAsComponent.defaultProps = {
  valueIWantToSee: '',
};

export default ListAsComponent;
