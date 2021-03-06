import React from 'react'
import Hero from './Hero'

const AboutView = () => {
  return (
    <>
      <Hero text="About Us"/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            Movie Browser is a very simple application that allows you to browse, search, watch movie trailers, read synopsis, and see rating for your favorite movies. 
            <br /><br/>
            Built with React, Bootstrap & TMDb API.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}


export default AboutView