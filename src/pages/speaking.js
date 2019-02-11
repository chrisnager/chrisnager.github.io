import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import Speaking from '../components/speaking.mdx'

const SpeakingPage = () => (
  <Layout>
    <SEO title="Speaking" keywords={[`gatsby`, `application`, `react`]} />
    <Section {...{ title: 'Speaking', content: <Speaking />, backgroundColor: '#80b780' }} />
  </Layout>
)

export default SpeakingPage
