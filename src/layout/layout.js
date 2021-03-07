import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from './Navbar'

const Layout = ({ children }) => {

  return (
    <>
        <Navbar />
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
