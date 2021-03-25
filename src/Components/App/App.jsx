import React, { Component } from 'react';
import FormFn from '../Input';
import Filter from '../Filter';
import ContactList from '../ContactList';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { addContacts } from '../../redux/contacts.operations';
import { fetchContacts } from '../../redux/contacts.operations';
import Loader from 'react-loader-spinner';
import style from '../../Loader.module.css';

class App extends Component {
  state = {
    name: '',
    number: '',
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleSubmit = event => {
    event.preventDefault();
    const uniqCheck = this.props.state.some(
      item => item.name === this.state.name,
    );
    if (uniqCheck) {
      alert(`Імя ${this.state.name} вже існує!`);
      return;
    }
    this.props.onSubmit(this.state.name, this.state.number);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  handleInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { handleSubmit, handleInput } = this;
    const { name, number } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <FormFn
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          value={name}
          number={number}
        />
        <h2 className={styles.title2}>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoading && (
          <Loader
            type="Grid"
            color="royalblue"
            height={40}
            width={40}
            className={style.loader}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.todos.contacts,
    isLoading: state.todos.loading,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (name, number) => {
      return dispatch(addContacts(name, number));
    },
    fetchContacts: () => dispatch(fetchContacts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
