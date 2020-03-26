import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import css from "./App.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import popTransition from "./transition/popTransition.module.css";
import slide from "./transition/slide.module.css";
import Alert from "./alert/Alert";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    isExist: false,
    isLogo: false
  };

  submitContact = data => {
    const isNameExist = this.state.contacts.some(
      contact => contact.name === data.name
    );
    !isNameExist
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data]
        }))
      : this.setState({ isExist: true });
         
    setTimeout(() => {
      this.setState({ isExist: false });
    }, 2000);
  };
  deleteContact = event => {
    const id = event.target.id;
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
    this.setState({ contacts, isLogo: true });
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
      <div className={css.container}>
        <TransitionGroup component="div" className="tGrop'">
          {this.state.isLogo && (
            <CSSTransition
              in={this.state.isLogo}
              timeout={500}
              classNames={slide}
            >
              <div className={css.phonebook}>
                <h2 className={css.phonebookTitle}> Phonebook</h2>
              </div>
            </CSSTransition>
          )}

          <ContactForm submitContact={this.submitContact} />
            
          <ContactList
            contacts={this.getFiltered()}
            deleteContact={this.deleteContact}
          />
         
        
            {this.state.contacts.length > 1 && (
              <CSSTransition  timeout={250} classNames={popTransition}>
                <Filter nameFilter={this.nameFilter} />
              </CSSTransition>
            )}
  
            {this.state.isExist &&  (
              <CSSTransition
                in={this.state.isExist}
                timeout={1000}
                classNames={slide}
                unmountOnExit
              >
                <Alert />
              </CSSTransition>
            )}
        
          
        </TransitionGroup>
      </div>
    );
  }
}
