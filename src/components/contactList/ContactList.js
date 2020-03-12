import React from "react";
import ContactItem from "../contactIem/ContactItem";
const ContactList = ({ contacts, deleteContact }) => {
  console.log("object", deleteContact);
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};
export default ContactList;
