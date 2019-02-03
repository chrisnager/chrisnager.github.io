import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, description },
      },
    }) => (
      <>
        <Header {...{ title, description }} />
        <main
          style={
            {
              // marginRight: 'auto',
              // marginLeft: 'auto',
              // maxWidth: '50rem',
              // padding: '1rem',
            }
          }
          {...{ children }}
        />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
