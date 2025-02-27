import React from 'react';
import { Movie } from '../../types/Movie';

import './MovieCard.scss';

type Prop = {
  movie: Movie;
};

export const MovieCard: React.FC<Prop> = ({ movie }) => {
  const {
    title, description, imgUrl, imdbUrl, imdbId,
  } = movie;

  return (
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            data-cy="MovieImage"
            src={imgUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p className="title is-8" data-cy="Movie">
              {title}
            </p>
          </div>
        </div>

        <div className="content">
          <p data-cy="MovieDescription">
            {description}
          </p>

          <a
            href={`${imdbUrl.slice(0, -imdbId.length)}${imdbId}`}
            data-cy="MovieLink"
          >
            IMDB
          </a>
        </div>
      </div>
    </div>
  );
};
