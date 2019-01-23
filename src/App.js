import React, { Component } from 'react';
import './App.css';
import Portfolio from './Portfolio.js'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMenuItem: "Profile",
    }

    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  handleMenuChange(event) {
    this.setState({ currentMenuItem: event.target.id });
  }

  render() {

    return (
      <Router>
        <div>
          <div id="menu-wrapper">
            <Menu />
          </div>

          <div id="content">
          <Switch>
            <Route exact path="(/|/profile)" component={Profile} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route component={Profile} />
          </Switch>
          </div>

        </div>
      </Router>
    )
  }
};

const Profile = () => (
  <h2>Profile</h2>

);

const Contact = () => <h2>Contact Us</h2>;

const Menu = () => (
  <ul id="menu">
    <li>
      <Link to="/">Profile</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
  </ul>
);

export default App;
