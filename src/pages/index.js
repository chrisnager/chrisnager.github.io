import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../components/profile.mdx'
import Projects from '../components/projects.mdx'
import Writing from '../components/writing.mdx'
import Speaking from '../components/speaking.mdx'
import Experience from '../components/experience.mdx'
import Section from '../components/section'

const sections = [
  { title: 'Profile', content: <Profile />, backgroundColor: '#aaa' },
  { title: 'Projects', content: <Projects />, backgroundColor: 'red' },
  { title: 'Writing', content: <Writing />, backgroundColor: 'gold' },
  { title: 'Speaking', content: <Speaking />, backgroundColor: '#afa' },
  { title: 'Experience', content: <Experience />, backgroundColor: '#0cf' },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {sections.map(({ title: key, title, content, backgroundColor }) => (
      <Section {...{ key, title, content, backgroundColor }} />
    ))}
  </Layout>
)

export default IndexPage
