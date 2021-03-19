import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailURL = `/movies/${movie.id}`
    const unavailablePoster = "https://images.unsplash.com/photo-1604975701397-6365ccbd028a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Y2luZW1hfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 my-4">
            <div className="card" style={{ width: "16rem" }}>
                {movie.poster_path ?
                    <img className="card-img-top" src={posterURL} alt={movie.original_title} />
                    : <img className="card-img-top" src={unavailablePoster} alt={movie.original_title} />
                }
                <div className="card-body">
                    <h5 className="card-title pb-2">{movie.original_title}</h5>
                    <Link to={detailURL} className="btn btn-warning w-100">Show Details</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieCard