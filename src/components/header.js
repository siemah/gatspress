import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            paddingRight: 10,
          }}
        >
          {siteTitle}
      </Link>
      <Link
        to="/blog"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Blog
      </Link>
      
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
