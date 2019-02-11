import React from 'react'

export default props => (
  <section
    id="hero"
    style={{
      boxSizing: 'border-box',
      // height: 'calc(100vh - 224px)',
      // height: 'calc(100vh - 150px)',
      padding: '60px 1rem 96px 1rem',
      // backgroundColor: '#eac600',
      // backgroundColor: 'hsl(344, 100%, 46%)',
      // backgroundColor: '#f83636',
      backgroundColor: '#365ff8',
      // backgroundImage: 'linear-gradient(transparent, #e7ff6e)',
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
      <p
        {...props}
        style={{
          marginBottom: 0,
          // marginBottom: '54px', // '5rem',
          fontWeight: 600,
          fontSize: '5rem', // '5.55vw',
          lineHeight: '1.25em',
          letterSpacing: '-0.015em',
          color: 'rgba(0, 0, 0, 0.85)',
        }}
      />
    </div>
  </section>
)
