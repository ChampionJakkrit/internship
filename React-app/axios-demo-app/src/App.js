import React, { Component } from 'react';
import axios from "axios";
import './App.css';

// import UseEffectDemo from './components/UseEffectDemo';
// import UserForm from "./components/UserForm";
import Users from "./components/Users";

class App extends Component {
  state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.followers;
        this.setState({ repos });
      })
    } else return;
  }
  render() {
    return (
      <div className="App">
        {/* <UseEffectDemo /> */}

        {/* <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        { this.state.repos ? <p>Followers of repos: { this.state.repos }</p> : <p>Please enter a username.</p> } */}

        <Users />

      </div>
    );
  }
};

export default App;