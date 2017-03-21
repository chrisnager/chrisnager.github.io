import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const year = new Date().getFullYear()

const data = {
  intro: {
    logo: 'CN',
    name: 'Chris Nager',
    description: 'Minimalist developer-designer in Brooklyn, NY',
    skills: [
      'javascript',
      `es${year + 1}`,
      'node',
      'css',
      'css-in-js',
      'single-purpose css classes',
      'css-animations',
      'postcss',
      'html',
      'react',
      'react native',
      'redux',
      'react-router',
      'jsx',
      'jest',
      'git',
      'next.js',
      'now',
      'webpack',
      'gulp',
      'vim',
      'mobile apps',
      'ux',
      'ui',
      'branding',
      'icons',
      'design systems',
      'typography',
      'accessibility',
    ],
  },
  profile: {
    name: 'Profile',
    entries: [],
  },
  posts: {
    name: 'Posts',
    entries: [
      {
        id: 0,
        name: 'Center and crop images with a single line of CSS',
        description: '19 Jan 2015',
        url: '',
        tags: ['css'],
      },
      {
        id: 1,
        name: 'Bespoke SVG Reference',
        description: '23 May 2014',
        url: '',
        tags: ['css'],
      },
      {
        id: 2,
        name: 'Analog-style LED clock concept',
        description: '25 Mar 2014',
        url: '',
        tags: ['css'],
      },
      {
        id: 3,
        name: 'Simple vertical centering with CSS',
        description: '10 Jan 2014',
        url: '',
        tags: ['css'],
      },
      {
        id: 4,
        name: 'NYC Subway Lines reimagined with long shadow design',
        description: '29 Jun 2013',
        url: '',
        tags: ['css'],
      },
      {
        id: 5,
        name: 'Time-based media queries',
        description: '25 Mar 2013',
        url: '',
        tags: ['css'],
      },
      {
        id: 6,
        name: 'Hue bump with Sass @for control directive',
        description: '17 Jan 2013',
        url: '',
        tags: ['css'],
      },
      {
        id: 7,
        name: 'Display icons with custom data-attributes',
        description: '21 Dec 2012',
        url: '',
        tags: ['css'],
      },
      {
        id: 8,
        name: 'Circles',
        description: '19 Dec 2012',
        url: '',
        tags: ['css'],
      },
      {
        id: 9,
        name: 'Video and audio in CSS',
        description: '04 Dec 2012',
        url: '',
        tags: ['css'],
      },
      {
        id: 10,
        name: 'Natural curves',
        description: '08 Nov 2012',
        url: '',
        tags: ['css'],
      },
      {
        id: 11,
        name: 'My initials',
        description: '23 Oct 2012',
        url: '',
        tags: ['css'],
      },
      {
        id: 12,
        name: 'Touchable textures with CSS - can you feel me?',
        description: '18 Oct 2012',
        url: '',
        tags: ['css'],
      },
      {
        id: 13,
        name: 'Further simplified hexcodes',
        description: '18 Sep 2012',
        url: '',
        tags: ['css'],
      },
      {
        id: 14,
        name: 'Box sizing for pseudo elements',
        description: '09 Sep 2012',
        url: '',
        tags: ['css'],
      },
      {
        id: 15,
        name: 'An Event Apart and a Designer’s View of the Web',
        description: '23 Sep 2011',
        url: '',
        tags: ['css'],
      },
      {
        id: 16,
        name: 'CSS3 ::selection background color trick',
        description: '09 Sep 2011',
        url: '',
        tags: ['css'],
      },
      {
        id: 17,
        name: 'Chris Nager 2012 (Responsive Design)',
        description: '18 Aug 2011',
        url: '',
        tags: ['css'],
      },
      {
        id: 18,
        name: 'ChrisNager.com v2 is live',
        description: '12 Jun 2011',
        url: '',
        tags: ['css'],
      },
    ],
  },
  projects: {
    name: 'Projects',
    entries: [
      {
        id: 0,
        name: 'hexcodes',
        description: 'All 4,096 shorthand hexcodes',
        url: 'https://chrisnager.github.io/hexcodes/',
        tags: ['color'],
      },
      {
        id: 1,
        name: 'short-color-names',
        description: 'The 45 CSS color names that are as short as or shorter than their corresponding hexcodes',
        url: 'https://chrisnager.github.io/short-color-names/',
        tags: ['color'],
      },
      {
        id: 2,
        name: 'simple-palette',
        description: 'A simple color palette',
        url: 'http://chrisnager.github.io/simple-palette/',
        tags: ['color'],
      },
      {
        id: 3,
        name: 'ungrid',
        description: 'The simplest responsive css grid',
        url: 'http://chrisnager.github.io/ungrid/',
        tags: ['layout', 'grid'],
      },
      {
        id: 4,
        name: 'simple-debug.css',
        description: 'Debug your layouts with one line of CSS',
        url: 'https://chrisnager.github.io/simple-debug.css/',
        tags: ['layout'],
      },
      {
        id: 5,
        name: 'Emoonji',
        description: 'A chatbot',
        url: 'https://bit.do/emoonji',
        tags: ['chatbot', '🌝'],
      },
      {
        id: 6,
        name: 'Give \'n\' Go',
        description: 'A curated gallery of Dribbble shots reworked as interactive CodePen pens',
        url: '',
        tags: ['css'],
      },
      {
        id: 7,
        name: 'Cheer me up',
        description: 'Fun, custom pages in seconds',
        url: '',
        tags: ['css'],
      },
      {
        id: 8,
        name: 'ungrid',
        description: 'the simplest responsive css grid',
        url: '',
        tags: ['css'],
      },
      {
        id: 9,
        name: 'Until',
        description: 'Are we there yet?',
        url: '',
        tags: ['css'],
      },
      {
        id: 10,
        name: 'UN Disaster Response',
        description: 'Currently working with the Harvard Humanitarian Initiative on a disaster and humanitarian response survey building app to be used by the United Nations',
        url: '',
        tags: ['css'],
      },
      {
        id: 11,
        name: 'Jaunt',
        description: 'Let your friends be your city guides. (TechCrunch Disrupt Hackathon app entry)',
        url: '',
        tags: ['css'],
      },
      {
        id: 12,
        name: 'Cursors',
        description: 'All available cursors',
        url: '',
        tags: ['css'],
      },
      {
        id: 13,
        name: 'simple-debug.css',
        description: 'Debug your layouts with one line of CSS',
        url: '',
        tags: ['css'],
      },
      {
        id: 14,
        name: 'palette',
        description: 'A simple color palette',
        url: '',
        tags: ['css'],
      },
      {
        id: 15,
        name: '✂ short color names',
        description: 'The 44 CSS color names that are as short as or shorter than their corresponding hexcodes.',
        url: '',
        tags: ['css'],
      },
      {
        id: 16,
        name: 'hexcodes',
        description: 'All possible three digit hexcodes',
        url: '',
        tags: ['css'],
      },
      {
        id: 17,
        name: 'tiny google fonts',
        description: 'Strip down your google fonts significantly to only include the characters you\'re actually using',
        url: '',
        tags: ['css'],
      },
      {
        id: 18,
        name: 'Birthday hex',
        description: 'Find your birthday hexcode',
        url: '',
        tags: ['css'],
      },
      {
        id: 19,
        name: 'SVG Please',
        description: 'Simple script to replace your bitmap icons with inline SVGs with bitmap fallback built in',
        url: '',
        tags: ['css'],
      },
      {
        id: 20,
        name: '#Fav5',
        description: 'What are your five most important items?',
        url: '',
        tags: ['css'],
      },
      {
        id: 21,
        name: 'Twadlib!',
        description: 'Ad-lib your tweets',
        url: '',
        tags: ['css'],
      },
      {
        id: 22,
        name: 'Bliss',
        description: 'Beautifully lean, ideal style sheets',
        url: '',
        tags: ['css'],
      },
      {
        id: 23,
        name: 'Crafted CSS',
        description: 'A personal compilation of CSS practices I follow',
        url: '',
        tags: ['css'],
      },
      {
        id: 24,
        name: 'Social Logos',
        description: 'Download official social logos',
        url: '',
        tags: ['css'],
      },
      {
        id: 25,
        name: 'chrisnager.com v2',
        description: 'Care to reminisce?',
        url: '',
        tags: ['css'],
      },
      {
        id: 26,
        name: 'Ben Thomson Photo',
        description: 'Awwwards Site of the Day',
        url: '',
        tags: ['css'],
      },
      {
        id: 27,
        name: 'Totally Fresh',
        description: 'Experimental CSS3 design featured on Smashing Magazine',
        url: '',
        tags: ['css'],
      },
    ],
  },
}

const Social = () => (
  <nav>
    <a href="">Twitter</a>
    <a href="">Github</a>
    <a href="">LinkedIn</a>

    <style jsx>{`
      a {
        margin-right: 1rem;
      }
    `}</style>
  </nav>
)

const Tag = ({label}) => <span>{label}</span>

const Intro = ({data}) => (
  <header>
    <div>
      <b>{data.logo}</b>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <div>
        <h2>Stuff I enjoy</h2>
        {data.skills.map(skill => <Tag label={skill} />)}
      </div>
      <Social />
    </div>

    <style jsx>{`
      b {
        font-weight: normal;
        font-size: 6rem;
        font-family: Futura;
      }

      div > div {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
    `}</style>
  </header>
)

const Section = ({data}) => (
  <section id={data.name.toLowerCase()}>
    <div>
      <h1>
        <a href={`#${data.name.toLowerCase()}`}>{data.name}</a>
      </h1>

      <hr />

      <ul>
        {data.entries.map(({id, url, name, description, tags}) => (
          <li key={id}>
            <a href={url}>
              <h2>{name}</h2>
              <p>{description}</p>
            </a>
            {tags.map((tag, index) => <Tag key={index} label={tag} />)}
          </li>
        ))}
      </ul>
    </div>

    <style jsx>{`
      @media (min-width: 60em) {
        ul {
          margin-right: -1rem;
          margin-left: -1rem;
        }

        li {
          box-sizing: border-box;
          width: 50%;
          padding: 1rem;
          display: inline-block;
          vertical-align: top;
        }
      }

      @media (min-width: 80em) {
        li {
          width: 25%;
        }
      }

      h1 {
        font-size: 2rem;
      }

      h1 > a:hover::after,
      h1 > a:focus::after {
        content: " #";
      }

      ul {
        list-style-type: none;
        padding-left: 0;
      }

      li {
        margin-bottom: 4rem;
      }

      a {
        display: block;
      }

      a:hover,
      a:focus {
        text-decoration: underline;
      }
    `}</style>
  </section>
)

const Outro = () => (
  <footer>
    <div>
      <Social />
      <p>
        <small>&copy; {year} Chris Nager &middot; Built in vim with react and next.js.</small>
      </p>
    </div>
  </footer>
)

export default ({profile, projects, posts}) => (
  <div>
    <Head>
      <title>Chris Nager</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Intro data={data.intro} />
    <main>
      <Section data={data.projects} />
      <Section data={data.posts} />
    </main>
    <Outro />
    <style>{`
      body {
        margin: 0;
        font: 100%/1.5 BlinkMacSystemFont;
      }

      header,
      section,
      footer {
        padding: 2rem;
      }

      header > div,
      section > div,
      footer > div {
        max-width: 60em;
        margin-right: auto;
        margin-left: auto;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      a:hover,
      a:focus {
        !color: #f06;
        !background-color: #0cf;
      }

      hr {
        border: none;
        height: 7px;
        background: linear-gradient(-135deg, transparent 4px, #000 5px, transparent 0), linear-gradient(135deg, transparent 4px, #000 5px, transparent 0);
        background-repeat: repeat-x;
        background-size: 13px 10px;
      }

      span {
        border: 1px solid;
        padding: .125rem .25rem;
        display: inline-block;
        margin-right: .5rem;
        margin-bottom: .5rem;
      }
    `}</style>
  </div>
)
