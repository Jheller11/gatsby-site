import React from 'react'
import { Link } from 'gatsby'

const navStyle = {
  color: 'red',
  textDecoration: 'none',
  marginRight: '1em',
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'orange',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to="/" style={navStyle}>
        Posts
      </Link>
      <Link to="/articles" style={navStyle}>
        Articles
      </Link>
      <Link to="/resources" style={navStyle}>
        Resources
      </Link>
      <Link to="/jsrepl" style={navStyle}>
        JS REPL
      </Link>
      <Link to="/rubyrepl" style={navStyle}>
        Ruby REPL
      </Link>
    </div>
  </div>
)

export default Header
