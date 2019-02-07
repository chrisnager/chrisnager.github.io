import { Link } from 'gatsby'
import React from 'react'

export default ({ title, content, backgroundColor, home }) => (
  <section
    id={title.toLowerCase()}
    style={{
      boxSizing: 'border-box',
      padding: '3rem 1rem',
      // backgroundColor: '#eac600',
      // backgroundColor: 'hsla(344, 100%, 46%, 1)',
      backgroundColor,
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
        style={
          {
            // marginTop: '4rem',
            // marginBottom: '.5rem',
            // fontWeight: 500,
            // fontSize: '2.25rem',
            // fontFamily: 'Futura, system-ui, sans-serif',
            // lineHeight: 1.3,
            // letterSpacing: '0.2em',
            // textTransform: 'uppercase',
            // color: '#fff',
          }
        }
      >
        <Link to={`#${title.toLowerCase()}`}>{title}</Link>
      </h1>
      <p
        style={{
          // marginBottom: '5rem',
          fontWeight: 600,
          fontSize: 18,
          // lineHeight: '1.25em',
        }}
      >
        {content}
      </p>
    </div>
  </section>
)
