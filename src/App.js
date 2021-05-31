import React from 'react';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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
    console.log(event.target.name);
    console.log(event.target.value);
    let _name = event.target.name;
    let val = event.target.value;
    this.setState({[_name]: val});
  }

  submitHandler = (event) => {
    event.preventDefault();
    db.collection('users').add({
      name: this.state.name,
      email: this.state.email,
      mob: this.state.mob,
    }).then(() => {
      console.log("User details submitted successfully.");
    });
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
      <h1>Hello</h1>
      <p>Enter your name:</p>
      <input type='text' name='name' onChange={this.changeHandler} />
      <br /><br />
      <p>Enter your email id:</p>
      <input type='email' name='email' onChange={this.changeHandler} />
      <br /><br />
      <p>Enter your mobile number:</p>
      <input type='text' name='mob' onChange={this.changeHandler} />
      <br /><br />
      <input type='submit' />
      </form>
    );
  }
}

export default UserDetails;
