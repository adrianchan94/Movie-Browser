import { useState, useEffect, React } from 'react'
import Hero from './Hero'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player"

const MovieView = () => {
    const { id } = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [trailerURL, setTrailerURL] = useState({})

    useEffect(() => {
        console.log('make an api request', id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=17d4a2274a993dc278559c3122a5c7b1&language=en-US`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovieDetails(data)
                setIsLoading(false)
            })

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=17d4a2274a993dc278559c3122a5c7b1&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setTrailerURL(data.results[0])
            })

    }, [id])

    function renderMovieDetails() {
        let movieTrailerURL;

        if (trailerURL) {
            movieTrailerURL = `https://www.youtube.com/watch?v=${trailerURL.key}`
        }

        if (isLoading) {
            return <Hero text="Loading..." />
        }

        if (movieDetails) {
            let posterPath;
            let backdropURL;

            if (movieDetails.poster_path) {
                posterPath = `http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                backdropURL = `http://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

            } else {
                posterPath = "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2luZW1hfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
            }

            return (
                <>
                    <Hero movieView={true} text={movieDetails.original_title} backdrop={backdropURL} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3 bg-dark py-2">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                            </div>
                            <div className="col-md-9 py-4">
                                <div className="container">

                                    <h2>{movieDetails.original_title}</h2>
                                    <p className="lead py-2"><i>{movieDetails.overview}</i></p>
                                    <p>Release Date: {movieDetails.release_date}</p>
                                    <p>Vote Average: {movieDetails.vote_average}</p>
                                    <p>No. of Votes: {movieDetails.vote_count}</p>
                                    <div className="player-wrapper">
                                        {
                                            movieTrailerURL &&
                                            <ReactPlayer
                                                className="react-player"
                                                width="100%"
                                                height="100%"
                                                url={movieTrailerURL} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetails()
}


export default MovieView