import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../components/profile.mdx'
import Projects from '../components/projects.mdx'
import Writing from '../components/writing.mdx'
import Speaking from '../components/home-speaking.mdx'
import Experience from '../components/experience.mdx'
import Hero from '../components/hero'
import Section from '../components/section'

const sections = [
  { title: 'Things I love', content: <Profile />, backgroundColor: '#34cbaf' },
  { title: 'Projects', content: <Projects />, backgroundColor: '#f83636' },
  { title: 'Writing', content: <Writing />, backgroundColor: 'gold' },
  { title: 'Speaking', content: <Speaking />, backgroundColor: '#afa' },
  { title: 'Experience', content: <Experience />, backgroundColor: '#0cf' },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero children="Hi, I'm Chris, a designer & developer in Brooklyn, NY with a clean aesthetic and a focus on performance." />
    {sections.map(({ title: key, title, content, backgroundColor }) => (
      <Section {...{ key, title, content, backgroundColor, home: true }} />
    ))}
  </Layout>
)

export default IndexPage
