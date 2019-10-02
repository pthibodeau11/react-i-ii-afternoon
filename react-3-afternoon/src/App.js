import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./Components/data";
import Counter from "./Components/data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      position: 1, //represent index of the array  perhaps id - 1
      list: Data
    };

    this.handleNextUser = this.handleNextUser.bind(this);
    this.handlePrevUser = this.handlePrevUser.bind(this);
  }

  handleNextUser() {
    this.setState({ position: (this.state.position += 1) });
  }

  handlePrevUser() {
    this.setState({ position: (this.state.position -= 1) });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Home </h1>
          <body className="App-background">
            <div className="Main">
              <div className="Data">
                <p className="Name">
                  {this.state.list[this.state.position - 1].name.first + " "}
                  {this.state.list[this.state.position - 1].name.last}
                </p>
                <p>
                  From:
                  {" " + this.state.list[this.state.position - 1].city + ", "}
                  {this.state.list[this.state.position - 1].country}
                </p>
                <p>
                  Job Title:
                  {" " + this.state.list[this.state.position - 1].title}
                </p>
                <p>
                  Employer:
                  {" " + this.state.list[this.state.position - 1].employer}
                </p>
                <p>favorite movies</p>
              </div>
              <div className="Position">
                <p>{this.state.position} / 25</p>
              </div>
            </div>
            <div className="Prev-Next">
              <button onClick={this.handlePrevUser}> Previous </button>
              <button onClick={this.handleNextUser}> Next </button>
            </div>
          </body>
        </header>
      </div>
    );
  }
}

export default App;
