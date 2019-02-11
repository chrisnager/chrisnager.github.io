import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import Projects from '../components/projects.mdx'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Section {...{ title: 'Projects', content: <Projects />, backgroundColor: '#f83636' }} />
  </Layout>
)

export default ProjectsPage
