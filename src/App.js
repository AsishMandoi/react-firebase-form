import React from 'react';
import db from './firebasedb';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mob: '',
    };
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    db.collection('users').add({
      name: this.state.name,
      email: this.state.email,
      mob: this.state.mob,
    })
    .then(() => {
      console.log("User details submitted successfully.");
    });
    console.log(this.state.name, this.state.email, this.state.mob);
    this.setState({
      name: '',
      email: '',
      mob: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
      <h1>Hello </h1>
      <p>Enter your name:</p>
      <input type='text' name='name' onChange={this.changeHandler} value={this.state.name}/>
      <br /><br />
      <p>Enter your email id:</p>
      <input type='email' name='email' onChange={this.changeHandler} value={this.state.email}/>
      <br /><br />
      <p>Enter your mobile number:</p>
      <input type='text' name='mob' onChange={this.changeHandler} value={this.state.mob}/>
      <br /><br /><br />
      <input type='submit' />
      </form>
    );
  }
}

export default UserDetails;
