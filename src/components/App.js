import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

export default class App extends Component {
  state = {
    contacts: [

    ],
    filter: ""
  };

  submitContact = data => {
    const isNameExist = this.state.contacts.some(
      contact => contact.name === data.name
    )
    !isNameExist
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data]
        }))
      : alert("Write correct name");
  };
  deleteContact = event => {
    const id = event.target.id;
    console.log("object", event.target.id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };
  nameFilter = event => {
    this.setState({
      filter: event.target.value
    });
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts") !== null)
      ? JSON.parse(localStorage.getItem("contacts"))
      : [];
    this.setState({ contacts });
  }
  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  getFiltered = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <>
        <ContactForm submitContact={this.submitContact} />

        <ContactList
          contacts={this.getFiltered()}
          deleteContact={this.deleteContact}
        />
        {this.state.contacts.length > 2 && (
          <Filter nameFilter={this.nameFilter} />
        )}
      </>
    );
  }
}
