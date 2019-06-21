import React, {Component} from 'react';

import {Title} from '../components/Title';
import {Search} from '../components/Search';
import {List} from '../components/List';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      searched: false
    };
  }
  _handleFilms = (films) => {
    this.setState({films})
    this.setState({searched: true})
  }

  _renderFilms() {
    return (
      this.state.films.length === 0
      ? <p>No Results</p>
      : <List films={this.state.films} />
    )
  }

  _renderResults() {
    return this.state.searched  ? this._renderFilms() : <small>Use the form to search a film</small>
  }

  render() {
    return (
      <section>
        <Title>Films Searcher</Title>
        <Search onFilms={this._handleFilms} />
        { this._renderResults() }
      </section>
    );
  }
}
