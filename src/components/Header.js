import React from 'react'
import PropTypes from 'prop-types'
import { Heading} from './Style/Styles';
import {  Link } from 'react-router-dom'

const Header =  ({branding}) => {
  return (
    <Heading>
      <h1  className = "heading">
        <Link to = "/" className = "link">
        {branding}
        </Link>
      </h1>
      <div className = "links">

        <Link to = "/contact" className = "link">Contact</Link>
        <Link to = "/about" className = "link">About</Link>

      </div>
    </Heading>
  )
}

Header.defaultProps ={
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string
};


export default Header