import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Nav from './nav'

const links = [
  // { children: 'Profile', href: '#profile' },
  { children: 'Projects', href: '#projects' },
  { children: 'Writing', href: '#writing' },
  { children: 'Speaking', href: '#speaking' },
  { children: 'Experience', href: '#experience' },
]

const Header = ({ title, description }) => (
  <header
    style={{
      boxSizing: 'border-box',
      height: '100vh',
      padding: '1rem',
      // backgroundColor: '#eac600',
      backgroundColor: 'hsla(344, 100%, 46%, 1)',
    }}
  >
    <div
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '70rem',
        // borderBottom: '2px solid',
      }}
    >
      <h1
        style={{
          marginTop: '4rem',
          marginBottom: '.5rem',
          fontWeight: 500,
          fontSize: '2.25rem',
          fontFamily: 'Futura, "Trebuchet MS", system-ui, sans-serif',
          lineHeight: 1.3,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#fff',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          {title.replace(' ', '')}
        </Link>
      </h1>
      <Nav
        style={{
          marginBottom: '3.25rem',
        }}
        {...{ links }}
      />
      <p
        style={{
          marginBottom: '5rem',
          fontWeight: 600,
          fontSize: '5.55vw',
          lineHeight: '1.25em',
          letterSpacing: '-0.015em',
        }}
      >
        {description}
      </p>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
  description: ``,
}

export default Header
