import React from 'react'

const Nav = ({ style, links }) => (
  <nav
    style={{
      boxSizing: 'border-box',
      display: 'flex',
      // marginRight: '-1rem',
      // marginLeft: '-1rem',
      // padding: '.5rem',
      // borderTop: '3px solid',
      // borderBottom: '3px solid',
      overflowX: 'auto',
      alignItems: 'center',
      ...style,
    }}
  >
    {links.map(props => (
      <a
        key={props.href}
        children={props.children}
        style={{
          boxSizing: 'border-box',
          padding: '1px 0.5rem',
          fontWeight: '600',
          fontSize: '20px', // Reduce at small sizes
          // textTransform: 'uppercase',
          // letterSpacing: '.15em',
          // color: '#e2b3cf',
          // color: '#34cbaf',
          color: '#a2ecdf',
        }}
        {...props}
      />
    ))}
  </nav>
)

export default Nav
