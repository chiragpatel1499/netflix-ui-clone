import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainMovie from './components/MainMovie/MainMovie';
import MovieCarousel from './components/MovieCarousel/MovieCarousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MainMovie />
      <MovieCarousel carouselTitle="Award Winning Films"/>
      <MovieCarousel carouselTitle="Continue Watching for Chirag"/>
      <MovieCarousel carouselTitle="Trending Now"/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
