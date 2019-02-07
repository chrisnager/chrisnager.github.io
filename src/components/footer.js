import React from 'react'
import Nav from './nav'

const links = [
  { children: 'Twitter', href: 'https://twitter.com/chrisnager' },
  { children: 'GitHub', href: 'https://github.com/chrisnager' },
  { children: 'CodePen', href: 'https://codepen.io/chrisnager' },
  { children: 'LinkedIn', href: 'https://www.linkedin.com/in/chrisnager' },
  // { children: 'Dribbble', href: 'https://dribbble.com/chrisnager' },
]

const Footer = () => (
  <footer
    style={{
      boxSizing: 'border-box',
      padding: '4rem 1rem',
      // backgroundColor: '#eac600',
      // backgroundColor: 'hsla(344, 100%, 46%, 1)',
      backgroundColor: '#365ff8',
      color: '#fff',
    }}
  >
    <div
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '70rem',
        // borderBottom: '2px solid',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
      }}
    >
      <Nav {...{ links }} />
      <div
      // style={{
      //   paddingTop: '3rem',
      // }}
      >
        {/* <p>
        I'm currently working as a Senior Software Developer at{' '}
        <a href="https://www.aircamera.com">Air</a> and was previously at{' '}
        <a href="https://iextrading.com">IEX</a> and{' '}
        <a href="https://www.salesforce.com">Salesforce</a>. I'm not taking on
        new work, but feel free to{' '}
        <a href="mailto:chris@chrisnager.com">get in touch</a>.
      </p> */}

        <p style={{ marginBottom: 0 }}>
          <small>
            © {new Date().getFullYear()} Chris Nager ·{' '}
            <a href="https://github.com/chrisnager/chrisnager.github.io">View source</a>.
          </small>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
