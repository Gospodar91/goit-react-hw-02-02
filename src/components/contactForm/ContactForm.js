import React, { Component } from "react";
import css from "../contactForm/ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuidv4()
    });
    this.setState({
      name: "",
      number: ""
    });
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <span className={css.name}>Name</span>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <span className={css.name}>Number</span>
            <input
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={number}
            />
          </div>
          <div>
            <button className={css.button} type="submit">
              ADD contact
            </button>
          </div>
        </form>
      </>
    )
  }
}
