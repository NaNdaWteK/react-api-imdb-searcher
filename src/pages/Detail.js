import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {BackToHome} from '../components/BackToHome';
import {Spinner} from '../components/Spinner';

import fetchService from '../services/fetch';

export class Detail extends Component{
  constructor(props) {
    super();
    this.state = {
      film: {},
      needsToRender: false
    };
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    })
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this._fetchFilm(id);
  }

  _fetchFilm = (id) => {
    const findById = 'i';
    fetchService(id, findById)
      .then(film => {
        this.setState({film});
        this.setState({needsToRender: true});
      })
  }

  _executeRender() {
    const {Title, Poster, Actors, Plot, Ratings = [], Website, Director, Runtime, Awards} = this.state.film
    return (
      <article>
        <BackToHome />
        <div className="card">
          <h2 className="title">{Title}</h2>
          <strong>{Awards}</strong>
          <div className="card-image">
            <figure className="image">
              <img src={Poster} alt={"Image of "+Title} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{Director}</p>
                <small>{Plot}</small>
              </div>
            </div>
            <hr />
            <div className="content">
              {Ratings.map((rating, index) => {
                return <p key={index}><strong>{rating.Source}: </strong>{rating.Value}</p>
              })}
              <a href={Website}>{Title} website</a>
              <hr />
              <p className="subtitle is-6">{Actors}</p>
              <time>{Runtime}</time>
            </div>
          </div>
        </div>
      </article>
    )
  }

  render() {
    return this.state.needsToRender ? this._executeRender() : <Spinner />;
  }
}
