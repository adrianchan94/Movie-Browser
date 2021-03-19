import { useEffect, useState, React } from 'react'
import Hero from './Hero'
import MovieCard from './MovieCard'

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=17d4a2274a993dc278559c3122a5c7b1')
      .then(response => response.json())
      .then(data => {
        setTrendingMovies(data.results)
        setIsLoading(false)
        console.log(trendingMovies)
      })
  }, [trendingMovies])


  const resultsHTML = trendingMovies.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  return (
    <>
      <div className="container">
        <div className="row">
          {
            isLoading ?
              <p className="lead my-5">Loading...</p>
              : resultsHTML
          }
        </div>
      </div>
    </>
  )
}



const Home = () => {

  return (
    <>
      <Hero text="Trending Movies" />
      <TrendingMovies />
    </>
  )
}

export default Home;