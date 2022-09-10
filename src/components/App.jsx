import React from 'react';
import ContactList from './ContactList';
import ContactForm from './ContactList/ContactForm';
import Filter from './ContactList/Filter';

import contacts from 'contacts.json';
import { nanoid } from 'nanoid';

import styled from 'styled-components';

const Phonebook = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100vw;
  max-width: 900px;
  margin: 50px auto;

  font-family: 'Inconsolata';

  input {
    border: none;
    border-bottom: 1px solid #913fd5;
    padding: 7px 10px;

    cursor: pointer;

    transition: opacity 250ms ease;
    opacity: 0.4;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  align-items: center;

  flex: 1;

  background: #f5f5f5;
  background: #fff;

  overflow: hidden;
  border: 1px solid #eaeaea;
  border-radius: 30px;
  box-shadow: 0px 0px 6px rgb(207 187 187 / 30%);
  box-shadow: 0px 0px 16px #68646b67;

  &.Phonebook__sidebar {
    display: flex;
    flex-direction: column;
  }

  h1,
  h2 {
    font-weight: 600;
    font-size: 26px;
    color: #913fd5;
  }

  h1 {
    font-size: 32px;
  }
`;

class App extends React.Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} already exist`);
      return false;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({ contacts: [contact, ...prevState.contacts] }));

    return true;
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const searchString = filter.toLowerCase();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchString)
    );
    return (
      <Phonebook>
        <Section className="Phonebook__sidebar">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section className="Phonebook__list">
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} onClick={this.removeContact} />
        </Section>
      </Phonebook>
    );
  }
}

export default App;
