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
  career: {
    name: 'Career',
    entries: [
      {
        name: 'IEX',
        description: '2015 - present',
        url: 'https://iextrading.com/',
        tags: ['job'],
      },
      {
        name: 'Salesforce',
        description: '2011 - 2015',
        url: 'https://www.salesforce.com/',
        tags: ['job'],
      },
      {
        name: 'Luckie',
        description: '2010 -2011',
        url: 'http://www.luckie.com/',
        tags: ['job'],
      },
    ],
  },
  projects: {
    name: 'Works',
    entries: [
      {
        name: '> Signum majoritatis',
        description: 'A side-scrolling game built in a single string',
        url: 'http://bit.ly/smajor',
        tags: ['javascript', 'game'],
      },
      {
        name: 'hexcodes',
        description: 'All 4,096 shorthand hexcodes',
        url: 'https://chrisnager.github.io/hexcodes/',
        tags: ['color'],
      },
      {
        name: 'short-color-names',
        description: 'The 45 CSS color names that are as short as or shorter than their corresponding hexcodes',
        url: 'https://chrisnager.github.io/short-color-names/',
        tags: ['color'],
      },
      {
        name: 'simple-palette',
        description: 'A simple color palette',
        url: 'http://chrisnager.github.io/simple-palette/',
        tags: ['color'],
      },
      {
        name: 'ungrid',
        description: 'The simplest responsive css grid',
        url: 'http://chrisnager.github.io/ungrid/',
        tags: ['layout', 'grid'],
      },
      {
        name: 'simple-debug.css',
        description: 'Debug your layouts with one line of CSS',
        url: 'https://chrisnager.github.io/simple-debug.css/',
        tags: ['layout'],
      },
      {
        name: 'Emoonji',
        description: 'A chatbot',
        url: 'https://bit.do/emoonji',
        tags: ['chatbot', 'javascript', 'firebase'],
      },
      {
        name: 'Give \'n\' Go',
        description: 'A curated gallery of Dribbble shots reworked as interactive CodePen pens',
        url: 'http://give-n-go.co/',
        tags: ['css', 'design', 'community', 'app', 'site'],
      },
      {
        name: 'Cheer me up',
        description: 'Fun, custom pages in seconds',
        url: 'http://cheermeup.io/',
        tags: ['css', 'javascript', 'gif'],
      },
      {
        name: 'ungrid',
        description: 'the simplest responsive css grid',
        url: 'http://chrisnager.github.io/ungrid/',
        tags: ['css', 'grid'],
      },
      {
        name: 'Until',
        description: 'Are we there yet?',
        url: 'http://chrisnager.github.io/until/',
        tags: ['css', 'react', 'javascript'],
      },
      {
        name: 'UN Disaster Response',
        description: 'Currently working with the Harvard Humanitarian Initiative on a disaster and humanitarian response survey building app to be used by the United Nations',
        url: 'https://vimeo.com/71911497',
        tags: ['css'],
      },
      {
        name: 'Jaunt',
        description: 'Let your friends be your city guides. (TechCrunch Disrupt Hackathon app entry)',
        url: 'https://disruptnyhackathon.devpost.com/submissions/23514-jaunt',
        tags: ['css', 'hackathon'],
      },
      {
        name: 'Cursors',
        description: 'All available cursors',
        url: 'http://chrisnager.github.io/cursors/',
        tags: ['html', 'css'],
      },
      {
        name: 'simple-debug.css',
        description: 'Debug your layouts with one line of CSS',
        url: 'http://chrisnager.github.io/simple-debug.css/',
        tags: ['css', 'layout', 'debugger'],
      },
      {
        name: 'simple palette',
        description: 'A simple color palette',
        url: 'http://chrisnager.github.io/simple-palette/',
        tags: ['color'],
      },
      {
        name: '✂ short color names',
        description: 'The 44 CSS color names that are as short as or shorter than their corresponding hexcodes.',
        url: 'http://chrisnager.github.io/short-color-names/',
        tags: ['color', 'css'],
      },
      {
        name: 'hexcodes',
        description: 'All possible three digit hexcodes',
        url: 'http://chrisnager.github.io/hexcodes/',
        tags: ['color'],
      },
      {
        name: 'tiny google fonts',
        description: 'Strip down your google fonts significantly to only include the characters you\'re actually using',
        url: 'http://chrisnager.github.io/tiny-google-fonts/',
        tags: ['fonts', 'javascript'],
      },
      {
        name: 'Birthday hex',
        description: 'Find your birthday hexcode',
        url: 'http://chrisnager.github.io/birthday-hex/',
        tags: ['color', 'css', 'javascript'],
      },
      {
        name: 'SVG Please',
        description: 'Simple script to replace your bitmap icons with inline SVGs with bitmap fallback built in',
        url: 'http://chrisnager.github.io/svg-please/',
        tags: ['svg', 'javascript'],
      },
      {
        name: '#Fav5',
        description: 'What are your five most important items?',
        url: 'http://fav5.co/',
        tags: ['css'],
      },
      {
        name: 'Twadlib!',
        description: 'Ad-lib your tweets',
        url: 'http://chrisnager.com/twadlib/',
        tags: ['javascript', 'css', 'competition', 'twitter', '10k'],
      },
      {
        name: 'Bliss',
        description: 'Beautifully lean, ideal style sheets',
        url: 'http://chrisnager.github.io/bliss/',
        tags: ['css'],
      },
      {
        name: 'Crafted CSS',
        description: 'A personal compilation of CSS practices I follow',
        url: 'https://github.com/chrisnager/crafted-css',
        tags: ['css', 'code guidelines'],
      },
      {
        name: 'Social Logos',
        description: 'Download official social logos',
        url: 'http://chrisnager.com/social-logos/',
        tags: ['css'],
      },
      {
        name: 'chrisnager.com v1',
        description: 'Origins',
        url: 'https://web.archive.org/web/20110808135606/http://chrisnager.com/portfolio/#chrisnager-v1',
        tags: ['site', 'html', 'css', 'javascript'],
      },
      {
        name: 'chrisnager.com v2',
        description: 'Care to reminisce?',
        url: 'https://web.archive.org/web/20110809085951/http://chrisnager.com/',
        tags: ['site', 'html', 'css', 'javascript'],
      },
      {
        name: 'chrisnager.com v3',
        description: 'Iterate',
        url: 'https://web.archive.org/web/20161001182013/http://chrisnager.com/',
        tags: ['site', 'html', 'css', 'javascript'],
      },
      {
        name: 'Ben Thomson Photo',
        description: 'Awwwards Site of the Day',
        url: 'https://www.awwwards.com/sites/ben-thomson-photography',
        tags: ['site', 'html', 'css', 'branding', 'logo', 'ux', 'research', 'ui'],
      },
      {
        name: 'Totally Fresh',
        description: 'Experimental CSS3 design featured on Smashing Magazine',
        url: 'https://www.smashingmagazine.com/2010/07/css3-design-contest-results/',
        tags: ['css', 'competition'],
      },
      {
        name: 'Center and crop images with a single line of CSS',
        description: '19 Jan 2015',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Bespoke SVG Reference',
        description: '23 May 2014',
        url: '#',
        tags: ['svg', 'post'],
      },
      {
        name: 'Analog-style LED clock concept',
        description: '25 Mar 2014',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Simple vertical centering with CSS',
        description: '10 Jan 2014',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'NYC Subway Lines reimagined with long shadow design',
        description: '29 Jun 2013',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Time-based media queries',
        description: '25 Mar 2013',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Hue bump with Sass @for control directive',
        description: '17 Jan 2013',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Display icons with custom data-attributes',
        description: '21 Dec 2012',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Circles',
        description: '19 Dec 2012',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Video and audio in CSS',
        description: '04 Dec 2012',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Natural curves',
        description: '08 Nov 2012',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'My initials',
        description: '23 Oct 2012',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Touchable textures with CSS - can you feel me?',
        description: '18 Oct 2012',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Further simplified hexcodes',
        description: '18 Sep 2012',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Box sizing for pseudo elements',
        description: '09 Sep 2012',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'An Event Apart and a Designer’s View of the Web',
        description: '23 Sep 2011',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'CSS3 ::selection background color trick',
        description: '09 Sep 2011',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'Chris Nager 2012 (Responsive Design)',
        description: '18 Aug 2011',
        url: '#',
        tags: ['css', 'post'],
      },
      {
        name: 'ChrisNager.com v2 is live',
        description: '12 Jun 2011',
        url: '#',
        tags: ['css', 'post'],
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

const Tag = ({label}) => <i>{label}</i>

const Intro = ({data}) => (
  <header>
    <div>
      <b>{data.logo}</b>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <div>
        <h2>Stuff I enjoy</h2>
        {data.skills.map((skill, index) => <Tag key={index} label={skill} />)}
      </div>
      <Social />
    </div>

    <style jsx>{`
      h1 {
        font-size: 3rem;
      }

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
  <section id="entries">
    <h1><a href={`#${data.name.toLowerCase()}`}>{data.name}</a></h1>

    <hr />

    <ul>
      {data.entries.map(({url, name, description, tags}, index) => (
        <li key={index}>
          <a href={url} style={{fontFamily: tags.indexOf('post') !== -1 ? 'Georgia, serif' : tags.indexOf('job') !== -1 ? 'inherit' : 'monospace'}}>
            <h2>{name}</h2>
            <p>{description}</p>
          {tags && tags.map((tag, index) => <Tag key={index} label={tag} />)}
          </a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      @media (min-width: 60em) {
        ul {
          margin-right: -1rem;
          margin-left: -1rem;
        }

        li {
          width: 50%;
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

      h2 {
        margin-bottom: 0;
        font-size: 1rem;
      }

      p {
        margin-top: 0;
      }

      ul {
        list-style-type: none;
        padding-left: 0;
      }

      li {
        /* margin-bottom: 4rem; */
      }

      li > a {
        box-sizing: border-box;
        min-height: 300px;
        min-height: 15vw;
        padding: 1rem;
        display: block;
      }
    `}</style>
  </section>
)

const Outro = () => (
  <footer>
    <div>
      <Social />
      <p>
        <small>&copy; {year} Chris Nager &middot; Built in vim with next.js.</small>
      </p>
    </div>
  </footer>
)

export default () => (
  <div>
    <Head>
      <title>Chris Nager</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Intro data={data.intro} />
    <main>
      <Section data={data.projects} />
      <Section data={data.career} />
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

      i {
        margin-right: .5rem;
        font-size: .75rem;
        color: #888;
      }

      a:hover,
      a:focus {
        text-decoration: underline;
        color: red;
        background-color: #0cf;
      }
    `}</style>
  </div>
)
