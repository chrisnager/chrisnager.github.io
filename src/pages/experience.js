import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Experience from '../components/experience.mdx'

const ExperiencePage = () => (
  <Layout>
    <SEO title="Experience" keywords={[`gatsby`, `application`, `react`]} />
    <Hero children="Hmm…" />
    <Experience />
  </Layout>
)

export default ExperiencePage
