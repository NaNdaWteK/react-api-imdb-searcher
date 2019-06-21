import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Film}from './Film';


export class List extends Component {
  static propTypes = {
    films: PropTypes.array
  }

  render() {
    const {films} = this.props;
    return (
      <div className="List">
      {
        films.map((film, index) => {
          return (
            <div key={film.imdbID} className="List-item">
              <Film
                id={film.imdbID}
                title={film.Title}
                image={film.Poster}
                year={film.Year} />
            </div>
          );
        })
      }
      </div>
    )

  }
}
