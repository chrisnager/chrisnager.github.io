import React from 'react'

const Nav = ({ style, links }) => (
  <nav
    style={{
      boxSizing: 'border-box',
      display: 'flex',
      marginRight: '-1rem',
      marginLeft: '-1rem',
      padding: '.5rem',
      // borderTop: '3px solid',
      // borderBottom: '3px solid',
      overflowX: 'auto',
      ...style,
    }}
  >
    {links.map(props => (
      <a
        key={props.href}
        children={props.children}
        style={{
          boxSizing: 'border-box',
          padding: '.5rem',
          fontWeight: '600',
          fontSize: '17px',
          // textTransform: 'uppercase',
          // letterSpacing: '.15em',
        }}
        {...props}
      />
    ))}
  </nav>
)

export default Nav
