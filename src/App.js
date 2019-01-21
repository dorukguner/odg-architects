import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
            <Route exact path="/" component={Profile} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
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

function PortfolioWhole({ match }) {
  let incompleteList = incomplete.map((task) => this.createTasks(task, ""));
  let completeList = complete.map((task) => this.createTasks(task, "completed"));
  return (
  "Projects"
  <br>
  <ul className="projectList">
  <li className="project">
    <Link to={`${match.url}/project1`}>Project 1</Link>
  </li>
  <li>
    <Link to={`${match.url}/project2`}>Project 2</Link>
  </li>
</ul>
  );
}

function Project({ match }) {
    return (
      "Single project" + match.params.id
    )
}

const Portfolio = ({ match }) => (
  <div>
    <Route path={`${match.path}/:id`} component={Project} />
    <Route
      exact
      path={match.path}
      render={PortfolioWhole}
    />
  </div>
);

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
