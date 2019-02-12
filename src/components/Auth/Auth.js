import React, {Component} from 'react';

import './Auth.css';

class Auth extends Component {
  constructor(){
    super();
    this.state = {
      login: true,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  loginToggle = (e) => {
    e.preventDefault();
    const _login = this.state.login;
    this.setState({
      login: !_login,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let url = this.state.login ? 'http://localhost:3000/auth/signin' : 'http://localhost:3000/auth/signup';
    fetch(url,{
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => this.props.storeSessionToken(json.sessionToken))
  }

  render(){
    let title = this.state.login ? 'Login' : 'Signup';
    let signupFields = this.state.login
      ? null
      : (
        <React.Fragment>
          <label htmlFor="firstName">First Name:</label><br/>
          <input onChange={this.handleChange} value={this.state.firstName} type="text" id="firstName" /><br/>
          <label htmlFor="lastName">Last Name:</label><br/>
          <input onChange={this.handleChange} value={this.state.lastName} type="text" id="lastName" /><br/>
        </React.Fragment>
      )
    return(
      <form className="cardLike" onSubmit={this.handleSubmit}>
        <h1>{title}</h1>
        <label htmlFor="email">Email:</label><br/>
        <input onChange={this.handleChange} value={this.state.email} type="text" id="email" /><br/>
        <label htmlFor="password">Password:</label><br/>
        <input onChange={this.handleChange} value={this.state.password} type="password" id="password" /><br/>
        {signupFields}
        <button onClick={this.loginToggle}>Login/Signup Toggle</button><br/>
        <button type="submit">Submit User Data</button>
      </form>
    )
  }
}

export default Auth;