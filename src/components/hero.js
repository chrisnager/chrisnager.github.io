import React from 'react'

export default props => (
  <section
    style={{
      boxSizing: 'border-box',
      // height: '100vh',
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
      <p
        {...props}
        style={{
          marginBottom: '5rem',
          fontWeight: 600,
          fontSize: '5.55vw',
          lineHeight: '1.25em',
          letterSpacing: '-0.015em',
        }}
      />
    </div>
  </section>
)
