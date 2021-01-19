import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Playa from "../images/beach_icon.png"
import './header.css'
const Header = ({ siteTitle }) => (
  <header className="header">

    {siteTitle} <img className="header--img" src={withPrefix("../images/beach_icon.png")} alt="icono playa"/>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
