import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
    return (e) => {
      e.preventDefault();
      field === 'email' ? this.setState({email: e.currentTarget.value }) : this.setState({password: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({'user': user});
  }

  render () {
      const formType = this.props.formType === 'login' ? 'Log in' : 'Sign up';
      return (
        <div>
          <h1>{formType}</h1>
          <form onSubmit={this.handleSubmit} >
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" value={this.state.email} onChange={this.updateField("email")} />

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" value={this.state.password} onChange={this.updateField("password")} />

            <input type="submit" value={formType} />
          </form>
          {this.props.errors ?
            (<ul>
              {this.props.errors.map((err, i) => {
                return (
                  <li key={err + i}>{err}</li>
                )
              })}
            </ul>) : null}
          {formType === 'Log in' ? <Link to="/signup">Sign Up</Link> : <Link to="/login">Log In</Link>}
        </div>
      )
  }
};

export default SessionForm;