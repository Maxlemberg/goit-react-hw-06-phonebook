import React, { Component } from 'react';
import FormFn from '../Input';
import Filter from '../Filter';
import ContactList from '../ContactList';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { addContacts } from '../../redux/actions';

class App extends Component {
  state = {
    name: '',
    number: '',
  };

  // componentDidMount() {
  //   const localInfo = localStorage.getItem('contacts');
  //   const parseContacts = JSON.parse(localInfo);
  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts.length !== prevState.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state: state.todos.contacts };
};
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (name, number) => {
      return dispatch(addContacts(name, number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
