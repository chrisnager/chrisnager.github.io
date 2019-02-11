import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Nav from './nav'

const links = [
  // { children: 'Profile', href: '#profile' },
  { children: 'Projects', href: '/projects' },
  { children: 'Writing', href: '/writing' },
  { children: 'Speaking', href: '/speaking' },
  { children: 'Experience', href: '/#experience' },
]

const Header = ({ title }) => (
  <header
    style={{
      boxSizing: 'border-box',
      // height: '100vh',
      padding: '1rem',
      // backgroundColor: '#eac600',
      // backgroundColor: 'hsl(344, 100%, 46%)',
      // backgroundColor: '#f83636',
      backgroundColor: '#365ff8',
    }}
  >
    <div
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '70rem',
        // borderBottom: '2px solid',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}
    >
      <h1
        style={{
          // marginTop: '4rem',
          marginTop: '90px',
          marginBottom: '.5rem',
          fontWeight: 500,
          fontSize: '2.25rem',
          fontFamily: 'Futura, "Trebuchet MS", system-ui, sans-serif',
          lineHeight: 1.3,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#fff',
          textShadow: '2px 8px 24px rgba(0, 0, 0, .6)', // on hover: #000 -1px 3px 0
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          {title.replace(' ', '')}
        </Link>
      </h1>
      <Nav
        style={
          {
            // marginBottom: '12px', // '3.25rem',
          }
        }
        {...{ links }}
      />
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
