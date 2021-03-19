import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom';


const NavBar = ({searchText, setSearchText}) => {
  const history = useHistory()

  const updateSearchText = (e) => {

    history.push("/search")
    setSearchText(e.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault();
    
    let searchQuery = event.target.elements[0].value
    history.push("/search")
    setSearchText(searchQuery)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faFilm}/> <b>Movie Browser</b></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming">Coming Soon</Link>
            </li>
          </ul>
          <form onSubmit={formSubmit} className="d-flex">
            <input className="form-control me-2" 
            type="text" 
            placeholder="Search" 
            value={searchText}
            onChange={updateSearchText}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;