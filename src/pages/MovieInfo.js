import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const { imdbID } = useParams();

  async function fetchMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?&apikey=bdc05ce&i=${imdbID}`
    );
    setMovieInfo(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchMovieInfo();
  }, [fetchMovieInfo]);
  useEffect(() => {}, [movieInfo]);

  return (
    <>
      <Navigation />
      <section id='movie'>
        <div className='row'>
          <div className='movie__container'>
            <div className='movie__container--img animate__animated animate__bounceInUp'>
              <Link to='/'>
                <button className='back '>← Back</button>
              </Link>
              {loading && <p>Loading...</p>} {/* Display loading indicator */}
              {movieInfo && (
                <figure className='movie__img--wrapper'>
                  <img className='movie__img' src={movieInfo.Poster} alt='' />
                </figure>
              )}
            </div>
            <div className='movie__container--info'>
              {movieInfo && (
                <div className='movie__title animate__animated animate__bounceInUp'>
                  {movieInfo.Title}
                </div>
              )}
              {movieInfo && (
                <div className='movie__year animate__animated animate__bounceInUp'>
                  {movieInfo.Year}
                </div>
              )}
              {movieInfo && (
                <h3 className='movie__genre animate__animated animate__bounceInUp'>
                  {movieInfo.Genre}
                </h3>
              )}
              <h3 className='summary animate__animated animate__bounceInUp'>
                Summary
              </h3>
              {movieInfo && (
                <p className='movie__plot animate__animated animate__bounceInUp'>
                  {movieInfo.Plot}
                </p>
              )}
              {movieInfo && (
                <h4 className='animate__animated animate__bounceInUp'>
                  Total Box Office: {movieInfo.BoxOffice}
                </h4>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieInfo;
