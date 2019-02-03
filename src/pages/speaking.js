import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Speaking from '../components/speaking.mdx'

const SpeakingPage = () => (
  <Layout>
    <SEO title="Speaking" keywords={[`gatsby`, `application`, `react`]} />
    <Hero children="Hmm…" />
    <Speaking />
  </Layout>
)

export default SpeakingPage
