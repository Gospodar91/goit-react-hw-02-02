import React from "react";
import ContactItem from "../contactIem/ContactItem";
import { TransitionGroup , CSSTransition} from "react-transition-group";
import css from './ContactList.module.css'
import popTransition from '../transition/popTransition.module.css'

const ContactList = ({ contacts, deleteContact }) => {
  console.log("object", deleteContact);
  return (
   

<TransitionGroup component='ul' className ={css.list}>
      {contacts.map(contact => (
       
           <CSSTransition  timeout={250} classNames={popTransition}>
        <ContactItem
          contact={contact}
      
          deleteContact={deleteContact}
        />
           </CSSTransition>
      ))}
   </TransitionGroup>
 

  );
};
export default ContactList;
