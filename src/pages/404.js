import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
    <p>This route does not exist.</p>
  </Layout>
)

export default NotFoundPage
