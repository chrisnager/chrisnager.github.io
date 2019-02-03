import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Writing from '../components/writing.mdx'

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" keywords={[`gatsby`, `application`, `react`]} />
    <Hero children="Thoughts" />
    <Writing />
  </Layout>
)

export default WritingPage
