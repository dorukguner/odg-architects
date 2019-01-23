import React, { Component } from "react";
import './content.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Portfolio extends Component {

  constructor(props) {
    super(props);

    this.state = {
       currentImage: 0,
      projects: [
        { id: "project1", name: "Project 1", imgs: ['thumbnail', 'display1', 'display2'] },
        { id: "project2", name: "Project 2", imgs: ['thumbnail', 'display1', 'display2'] },
        { id: "project3", name: "Project 3", imgs: ['thumbnail', 'display1', 'display2'] },
      ],
    }

    this.displayPortfolio = this.displayPortfolio.bind(this);
    this.displayProject = this.displayProject.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({currentImage: 0});
    }
  }


  handleSlideChange(i, project) {
    let newState = this.state;
    newState.currentImage += i;
    if (newState.currentImage >= project.imgs.length) newState.currentImage = 1;
    if (newState.currentImage < 1) newState.currentImage = project.imgs.length;
    this.setState({ newState });
  }

  displayPortfolio() {
    return (
      <div>
        <h3>Projects</h3>
        <ul className="project-list">
          {this.state.projects.map((project) => this.createPortfolioItems(project))}
        </ul>
      </div>
    );
  }

  createPortfolioItems(project) {
    return (
      <span key={project.id}>
        <li>
          <Link to={`${this.props.match.url}/${project.id}`}>
            <div>
              <img src={`images/${project.imgs[0]}`} />
            </div>
            <div className="project-text">{project.name}</div>
          </Link>
        </li>
        {project.id === "project3" && <br />}
      </span>
    )
  }

  displayProject({ match }) {
    let project = this.state.projects.find(x => x.id === match.params.id);
    if (!project) {
      project = this.state.projects[0];
    }
    return (
      <div className="slideshow-container">
        <div>
          <img className="slideshow" src={process.env.PUBLIC_URL + `/images/${project.imgs[this.state.currentImage]}`}></img>
        </div>
        <a className="prev" onClick={() => this.handleSlideChange(-1, project)}>&#10094;</a>
        <a className="next" onClick={() => this.handleSlideChange(1, project)}>&#10095;</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Portfolio</h2> <br />
        <Route exact path={`${this.props.match.path}/:id`} component={this.displayProject} />
        <Route
          exact
          path={this.props.match.path}
          render={this.displayPortfolio}
        />
      </div>
    );
  }
}

export default Portfolio;