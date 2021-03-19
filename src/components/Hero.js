import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons'

const Hero = ({text, backdrop, movieView}) => {
    return (
        <>
        {
            movieView ?


            <header className='bg-dark text-white p-5 tall-hero-container'>
            <h1 className='movie-hero-text'> {text}</h1>
            {
                backdrop && 
            <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
            }
        </header>

            :

            <header className='bg-dark text-white p-5 hero-container'>
            <h1 className='hero-text'><FontAwesomeIcon icon={faPlayCircle}/> {text}</h1>
            {
                backdrop && 
            <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
            }
        </header>

        }
        </>
    )
}

export default Hero;