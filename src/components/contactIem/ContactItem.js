import React from "react";
import css from "../contactIem/ContactItem.module.css";
const ContactItem = ({ contact: { name, id, number }, deleteContact }) => {

  return (
    <>
      <li key={id} className='phoneListItem'>
        <h3 className={css.name}>{name} </h3>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          onClick={deleteContact}
          type="button"
          id={id}
        >
          Delete contact
        </button>
      </li>
    </>
  );
};

export default ContactItem;
