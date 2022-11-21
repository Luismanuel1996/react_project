import { Component } from "react";

export default class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.getFilms();
  }

  getFilms() {
    fetch(`https://ghibliapi.herokuapp.com/films`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ list: data });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <ul>
        {this.state.list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
  }
}
