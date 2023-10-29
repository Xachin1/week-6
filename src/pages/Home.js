import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  let navigate = useNavigate();
  function searchDatabase() {
    navigate(`/movies/search/${query}`);
  }

  const [query, setQuery] = useState('');

  return (
    <>
      <section id='home'>
        <Navigation query={query} setQuery={setQuery} />
        <div className='content__wrapper'>
          <h1 className='title animate__animated animate__zoomIn'>
            Browse our Movies
          </h1>
          <form className='input__wrapper animate__animated animate__backInLeft'>
            <input
              id='searchInput'
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search by Title or Year'
              value={query}
            />
            <button
              className='content__search--button'
              onClick={() => searchDatabase()}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
