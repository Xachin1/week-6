import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import Footer from './components/Footer';
import Categories from './components/Categories';
import './components/categories.css';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movies/search/:query' element={<Movies />}></Route>
          <Route path='/movies/:imdbID' element={<MovieInfo />}></Route>
        </Routes>
        <Categories />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
