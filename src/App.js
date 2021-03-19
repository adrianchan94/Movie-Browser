import { React, useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutView from './components/AboutView'
import SearchView from './components/SearchView'
import { HashRouter, Switch, Route } from 'react-router-dom'
import MovieView from './components/MovieView'
import NotFound from './components/NotFound'
import UpcomingMovies from './components/UpcomingMovies'
import './App.css';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=17d4a2274a993dc278559c3122a5c7b1&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })
    }

  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <HashRouter>

      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView}/>
        <Route path="/upcoming" component={UpcomingMovies} />
        <Route component={NotFound}/>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
