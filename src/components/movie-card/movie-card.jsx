import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props
    //conditional to check if death year is present for Director.Death and Actors.Death 
    //actors.Death and Director.Death
   /* if(Actors.Death in this.props === null 
      || Director.Death in this.props === null){
      console.log("no death year")
    }*/


    return (
    <div className="movie-card" onClick={()=>
        onMovieClick(movie)}> {movie.Title} </div>
    )}
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string,
    Description: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};