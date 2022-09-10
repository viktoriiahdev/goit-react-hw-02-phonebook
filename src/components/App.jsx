import React from 'react';

import Section from './ContactList/Section';
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
    border-bottom: 1px solid #913fd540;
    padding: 7px 10px;

    cursor: pointer;

    transition: border-color 250ms ease;

    &:hover,
    &:focus {
      border-color: #913fd5;
    }
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
