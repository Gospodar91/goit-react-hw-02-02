import React from "react";
import css from "../contactIem/ContactItem.module.css";
const ContactItem = ({ contact: { name, id, number }, deleteContact }) => {

  return (
    <>
      <li>
        <span className={css.name}>{name}, </span>
        <span className={css.number}>{number}</span>
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
