import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Profile from '../components/profile.mdx'
import Projects from '../components/home-projects.mdx'
import Writing from '../components/writing.mdx'
import Speaking from '../components/home-speaking.mdx'
import Experience from '../components/experience.mdx'
import Hero from '../components/hero'
import Section from '../components/section'

const sections = [
  { title: 'Things I like', content: <Profile />, backgroundColor: '#a2ecdf' /*'#34cbaf'*/ },
  { title: 'Projects', content: <Projects />, backgroundColor: '#f83636' },
  { title: 'Writing', content: <Writing />, backgroundColor: 'gold' },
  { title: 'Speaking', content: <Speaking />, backgroundColor: '#80b780' },
  { title: 'Experience', content: <Experience />, backgroundColor: '#a984bb' },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero
      children={
        <span>
          Hi, <mark>I'm</mark> Chris, <mark>a designer & developer in Brooklyn</mark>, NY with a clean aesthetic and a
          focus on performance<mark>.</mark>
        </span>
      }
    />
    {sections.map(({ title: key, title, content, backgroundColor }) => (
      <Section {...{ key, title, content, backgroundColor, home: true }} />
    ))}
  </Layout>
)

export default IndexPage
