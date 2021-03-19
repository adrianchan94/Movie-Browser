import { useState, useEffect, React} from 'react'
import Hero from './Hero'
import MovieCard from './MovieCard'

const GetUpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=17d4a2274a993dc278559c3122a5c7b1&language=en-US&page=1')
      .then(response => response.json())
      .then(data => {
      setUpcomingMovies(data.results)
      setIsLoading(false)
      })
  }, [upcomingMovies])


  const resultsHTML = upcomingMovies.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  return (
    <>
      <div className="container">
        <div className="row">
          {
            isLoading ?
              <p className="lead my-5 unavailable">Loading...</p>
              : resultsHTML
          }
        </div>
      </div>
    </>
  )
}



const UpcomingMovies = () => {

  return (
    <>
      <Hero text="Coming Soon" />
      <GetUpcomingMovies />
    </>
  )
}
  
export default UpcomingMovies;

