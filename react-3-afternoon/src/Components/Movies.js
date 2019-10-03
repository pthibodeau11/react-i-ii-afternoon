import React, { Component } from "react";

class Movies extends Component {
  render() {
    let moviesList = this.props.favMovies.map(val => {
      return <li>{val}</li>;
    });

    return <ol>{moviesList}</ol>;
  }
}

export default Movies;
