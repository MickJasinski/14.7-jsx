var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={"contactForm"}>
        <input
          type={"text"}
          name={"firstName"}
          placeholder={"First Name"}
          onChange={this.props.changeHandler}
          value={this.props.contact.firstName}
        />
        <input
          type={"text"}
          name={"lastName"}
          placeholder={"Last Name"}
          onChange={this.props.changeHandler}
          value={this.props.contact.lastName}
        />
        <input
          type={"email"}
          className={"lastInput"}
          name={"email"}
          placeholder={"E-mail"}
          onChange={this.props.changeHandler}
          value={this.props.contact.email}
        />
        <button onClick={this.props.addUser} type={"submit"}>
          Add Contact
        </button>
      </form>
    );
  }
});
