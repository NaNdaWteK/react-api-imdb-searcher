import React, {Component} from 'react';

import fetchService from '../services/fetch';

export class Search extends Component{
  constructor(props) {
    super();
    this.state = {
      film: '',
    };
    this.props = props;
  }
  _searchChange = (event) => {
    this.setState({film: event.target.value});
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    const findOcurrences = 's';
    fetchService(this.state.film, findOcurrences)
      .then(data => {
        const { Search = [] } = data;
        this.props.onFilms(Search)
      })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this._searchChange}
              className="input"
              type="text"
              placeholder="Película..." />
          </div>
          <div className="control">
            <button className="button is-primary">
              <strong>BUSCAR</strong>
            </button>
          </div>
        </div>
      </form>
    )
  }
}
