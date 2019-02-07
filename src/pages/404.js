import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section
      title="Page not found"
      content={<p style={{ minHeight: 'calc(100vh - 259px - 189px - 188px)' }}>This route does not exist.</p>}
      backgroundColor="hsl(344, 100%, 46%)"
    />
  </Layout>
)

export default NotFoundPage
