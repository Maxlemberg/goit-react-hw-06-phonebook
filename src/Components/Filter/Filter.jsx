import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { filtredContacts } from '../../redux/actions';

const Filter = ({ filter, handleInput }) => {
  return (
    <label className={styles.cont} htmlFor="">
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        type="text"
        value={filter}
        className={styles.input}
        name="filter"
        onChange={handleInput}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleInput: e => dispatch(filtredContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
