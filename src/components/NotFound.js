import React from 'react';
import Hero from './Hero'
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
      <Hero text="Error 404"/>
        <div className="container">
        <div className="row">
          <div className="col-lg-10 my-5">
            <p className="lead">
           Sorry this page does not exist
            </p>
            <Link to="/">
      Go Home
    </Link>
          </div>
        </div>
      </div>
  </>
);

export default NotFound;