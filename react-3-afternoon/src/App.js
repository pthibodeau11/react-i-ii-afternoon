import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Data from "./Components/data";
import Counter from "./Components/data";
import Movies from "./Components/Movies";

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
    if (this.state.position < 1) {
      this.state.position += 25;
    }
    if (this.state.position > 25) {
      this.state.position -= 25;
    }
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
                <p className="From">
                  From:
                  <div className="From-c">
                    {" " + this.state.list[this.state.position - 1].city + ", "}
                    {this.state.list[this.state.position - 1].country}
                  </div>
                </p>
                <p className="Title">
                  Job Title:
                  <div className="Title-c">
                    {" " + this.state.list[this.state.position - 1].title}
                  </div>
                </p>
                <p className="Employer">
                  Employer:
                  <div className="Employer-c">
                    {" " + this.state.list[this.state.position - 1].employer}
                  </div>
                </p>
                <p className="Movies">Favorite Movies:</p>
                <p>
                  <Movies
                    favMovies={
                      this.state.list[this.state.position - 1].favoriteMovies
                    }
                  />
                </p>
              </div>
              <div className="Position">
                <p>{this.state.position} / 25</p>
              </div>
            </div>
            <div className="Prev-Next">
              <button onClick={this.handlePrevUser}> &lt; Previous </button>
              <div>
                <button className="Middle">Edit</button>
                <button className="Middle">Delete</button>
                <button className="Middle">New</button>
              </div>
              <button onClick={this.handleNextUser}> Next > </button>
            </div>
          </body>
        </header>
      </div>
    );
  }
}

export default App;
