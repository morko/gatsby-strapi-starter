import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LogoSmall from "../LogoSmall"
import "./index.css"


const Header = ({ siteTitle, className }) => {

  return (
    <header className={"header " + className}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="logo" to="/"><LogoSmall /></Link>
        <Link className="pl-lg-3" to="/">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-toggle" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-toggle">
          <ul className="navbar-nav pl-3 mr-auto mt-2 mt-lg-0">
            <li className="nav-item mb-0">
              <Link to="/" className="nav-link" activeClassName="active">Home</Link>
            </li>
            <li className="nav-item mb-0">
              <Link to="/example" className="nav-link" activeClassName="active">Example</Link>
            </li>
            <li className="nav-item mb-0">
              <Link to="/example" className="nav-link" activeClassName="active">Articles</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
