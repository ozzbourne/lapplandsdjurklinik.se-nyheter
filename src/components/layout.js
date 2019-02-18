import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import "./customStyles.css"

const Layout = ({ children }) => (
      <div id="outer-container">
        <Header />
        <div 
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main id="page-wrap">{children}</main>
        </div>
      </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

