import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import Writing from '../components/writing.mdx'

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" keywords={[`gatsby`, `application`, `react`]} />
    <Section {...{ title: 'Writing', content: <Writing />, backgroundColor: 'gold' }} />
  </Layout>
)

export default WritingPage
