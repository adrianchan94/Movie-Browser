import React from 'react'
import Hero from './Hero'
import MovieCard from './MovieCard'

//TMdb API KEY = 17d4a2274a993dc278559c3122a5c7b1

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`
    console.log(searchResults, "are the search results")

    const resultsHTML = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })

    return (
        <>
            <Hero text={title} />
            {searchResults.length === 0 ?
                <div className="container my-5">
                    <div className="row">
                        <p className="lead unavailable">No results available</p>
                    </div>
                </div>
                : <div className="container">
                    <div className="row">
                        {resultsHTML}
                    </div>
                </div>
            }
        </>
    )
}

export default SearchView;