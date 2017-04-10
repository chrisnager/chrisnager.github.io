'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var year = new Date().getFullYear();

var data = {
  intro: {
    logo: 'CN',
    name: 'Chris Nager',
    description: 'Minimalist developer-designer in Brooklyn, NY',
    skills: ['javascript', 'es' + (year + 1), 'node', 'css', 'css-in-js', 'single-purpose css classes', 'css-animations', 'postcss', 'html', 'react', 'react native', 'redux', 'react-router', 'jsx', 'jest', 'git', 'next.js', 'now', 'webpack', 'gulp', 'vim', 'mobile apps', 'ux', 'ui', 'branding', 'icons', 'design systems', 'typography', 'accessibility']
  },
  profile: {
    name: 'Profile',
    entries: []
  },
  career: {
    name: 'Career',
    entries: [{
      name: 'IEX',
      description: '2015 - present',
      url: 'https://iextrading.com/',
      tags: ['job']
    }, {
      name: 'Salesforce',
      description: '2011 - 2015',
      url: 'https://www.salesforce.com/',
      tags: ['job']
    }, {
      name: 'Luckie',
      description: '2010 -2011',
      url: 'http://www.luckie.com/',
      tags: ['job']
    }]
  },
  projects: {
    name: 'Works',
    entries: [{
      name: '> Signum majoritatis',
      description: 'A side-scrolling game built in a single string',
      url: 'http://bit.ly/smajor',
      tags: ['javascript', 'game']
    }, {
      name: 'hexcodes',
      description: 'All 4,096 shorthand hexcodes',
      url: 'https://chrisnager.github.io/hexcodes/',
      tags: ['color']
    }, {
      name: 'short-color-names',
      description: 'The 45 CSS color names that are as short as or shorter than their corresponding hexcodes',
      url: 'https://chrisnager.github.io/short-color-names/',
      tags: ['color']
    }, {
      name: 'simple-palette',
      description: 'A simple color palette',
      url: 'http://chrisnager.github.io/simple-palette/',
      tags: ['color']
    }, {
      name: 'ungrid',
      description: 'The simplest responsive css grid',
      url: 'http://chrisnager.github.io/ungrid/',
      tags: ['layout', 'grid']
    }, {
      name: 'simple-debug.css',
      description: 'Debug your layouts with one line of CSS',
      url: 'https://chrisnager.github.io/simple-debug.css/',
      tags: ['layout']
    }, {
      name: 'Emoonji',
      description: 'A chatbot',
      url: 'https://bit.do/emoonji',
      tags: ['chatbot', 'javascript', 'firebase']
    }, {
      name: 'Give \'n\' Go',
      description: 'A curated gallery of Dribbble shots reworked as interactive CodePen pens',
      url: 'http://give-n-go.co/',
      tags: ['css', 'design', 'community', 'app', 'site']
    }, {
      name: 'Cheer me up',
      description: 'Fun, custom pages in seconds',
      url: 'http://cheermeup.io/',
      tags: ['css', 'javascript', 'gif']
    }, {
      name: 'ungrid',
      description: 'the simplest responsive css grid',
      url: 'http://chrisnager.github.io/ungrid/',
      tags: ['css', 'grid']
    }, {
      name: 'Until',
      description: 'Are we there yet?',
      url: 'http://chrisnager.github.io/until/',
      tags: ['css', 'react', 'javascript']
    }, {
      name: 'UN Disaster Response',
      description: 'Currently working with the Harvard Humanitarian Initiative on a disaster and humanitarian response survey building app to be used by the United Nations',
      url: 'https://vimeo.com/71911497',
      tags: ['css']
    }, {
      name: 'Jaunt',
      description: 'Let your friends be your city guides. (TechCrunch Disrupt Hackathon app entry)',
      url: 'https://disruptnyhackathon.devpost.com/submissions/23514-jaunt',
      tags: ['css', 'hackathon']
    }, {
      name: 'Cursors',
      description: 'All available cursors',
      url: 'http://chrisnager.github.io/cursors/',
      tags: ['html', 'css']
    }, {
      name: 'simple-debug.css',
      description: 'Debug your layouts with one line of CSS',
      url: 'http://chrisnager.github.io/simple-debug.css/',
      tags: ['css', 'layout', 'debugger']
    }, {
      name: 'simple palette',
      description: 'A simple color palette',
      url: 'http://chrisnager.github.io/simple-palette/',
      tags: ['color']
    }, {
      name: '✂ short color names',
      description: 'The 44 CSS color names that are as short as or shorter than their corresponding hexcodes.',
      url: 'http://chrisnager.github.io/short-color-names/',
      tags: ['color', 'css']
    }, {
      name: 'hexcodes',
      description: 'All possible three digit hexcodes',
      url: 'http://chrisnager.github.io/hexcodes/',
      tags: ['color']
    }, {
      name: 'tiny google fonts',
      description: 'Strip down your google fonts significantly to only include the characters you\'re actually using',
      url: 'http://chrisnager.github.io/tiny-google-fonts/',
      tags: ['fonts', 'javascript']
    }, {
      name: 'Birthday hex',
      description: 'Find your birthday hexcode',
      url: 'http://chrisnager.github.io/birthday-hex/',
      tags: ['color', 'css', 'javascript']
    }, {
      name: 'SVG Please',
      description: 'Simple script to replace your bitmap icons with inline SVGs with bitmap fallback built in',
      url: 'http://chrisnager.github.io/svg-please/',
      tags: ['svg', 'javascript']
    }, {
      name: '#Fav5',
      description: 'What are your five most important items?',
      url: 'http://fav5.co/',
      tags: ['css']
    }, {
      name: 'Twadlib!',
      description: 'Ad-lib your tweets',
      url: 'http://chrisnager.com/twadlib/',
      tags: ['javascript', 'css', 'competition', 'twitter', '10k']
    }, {
      name: 'Bliss',
      description: 'Beautifully lean, ideal style sheets',
      url: 'http://chrisnager.github.io/bliss/',
      tags: ['css']
    }, {
      name: 'Crafted CSS',
      description: 'A personal compilation of CSS practices I follow',
      url: 'https://github.com/chrisnager/crafted-css',
      tags: ['css', 'code guidelines']
    }, {
      name: 'Social Logos',
      description: 'Download official social logos',
      url: 'http://chrisnager.com/social-logos/',
      tags: ['css']
    }, {
      name: 'chrisnager.com v1',
      description: 'Origins',
      url: 'https://web.archive.org/web/20110808135606/http://chrisnager.com/portfolio/#chrisnager-v1',
      tags: ['site', 'html', 'css', 'javascript']
    }, {
      name: 'chrisnager.com v2',
      description: 'Care to reminisce?',
      url: 'https://web.archive.org/web/20110809085951/http://chrisnager.com/',
      tags: ['site', 'html', 'css', 'javascript']
    }, {
      name: 'chrisnager.com v3',
      description: 'Iterate',
      url: 'https://web.archive.org/web/20161001182013/http://chrisnager.com/',
      tags: ['site', 'html', 'css', 'javascript']
    }, {
      name: 'Ben Thomson Photo',
      description: 'Awwwards Site of the Day',
      url: 'https://www.awwwards.com/sites/ben-thomson-photography',
      tags: ['site', 'html', 'css', 'branding', 'logo', 'ux', 'research', 'ui']
    }, {
      name: 'Totally Fresh',
      description: 'Experimental CSS3 design featured on Smashing Magazine',
      url: 'https://www.smashingmagazine.com/2010/07/css3-design-contest-results/',
      tags: ['css', 'competition']
    }, {
      name: 'Center and crop images with a single line of CSS',
      description: '19 Jan 2015',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Bespoke SVG Reference',
      description: '23 May 2014',
      url: '#',
      tags: ['svg', 'post']
    }, {
      name: 'Analog-style LED clock concept',
      description: '25 Mar 2014',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Simple vertical centering with CSS',
      description: '10 Jan 2014',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'NYC Subway Lines reimagined with long shadow design',
      description: '29 Jun 2013',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Time-based media queries',
      description: '25 Mar 2013',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Hue bump with Sass @for control directive',
      description: '17 Jan 2013',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Display icons with custom data-attributes',
      description: '21 Dec 2012',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Circles',
      description: '19 Dec 2012',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Video and audio in CSS',
      description: '04 Dec 2012',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Natural curves',
      description: '08 Nov 2012',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'My initials',
      description: '23 Oct 2012',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Touchable textures with CSS - can you feel me?',
      description: '18 Oct 2012',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Further simplified hexcodes',
      description: '18 Sep 2012',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Box sizing for pseudo elements',
      description: '09 Sep 2012',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'An Event Apart and a Designer’s View of the Web',
      description: '23 Sep 2011',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'CSS3 ::selection background color trick',
      description: '09 Sep 2011',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'Chris Nager 2012 (Responsive Design)',
      description: '18 Aug 2011',
      url: '#',
      tags: ['css', 'post']
    }, {
      name: 'ChrisNager.com v2 is live',
      description: '12 Jun 2011',
      url: '#',
      tags: ['css', 'post']
    }]
  }
};

var Social = function Social() {
  return _react2.default.createElement('nav', {
    'data-jsx': 1669409179
  }, _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179
  }, 'Twitter'), _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179
  }, 'Github'), _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179
  }, 'LinkedIn'), _react2.default.createElement(_style2.default, {
    styleId: 1669409179,
    css: 'a[data-jsx="1669409179"] {margin-right: 1rem;}'
  }));
};

var Tag = function Tag(_ref) {
  var label = _ref.label;
  return _react2.default.createElement('i', null, label);
};

var Intro = function Intro(_ref2) {
  var data = _ref2.data;
  return _react2.default.createElement('header', {
    'data-jsx': 2550302918
  }, _react2.default.createElement('div', {
    'data-jsx': 2550302918
  }, _react2.default.createElement('svg', { width: '200', viewBox: '0 0 35 16', xmlns: 'http://www.w3.org/2000/svg', 'data-jsx': 2550302918
  }, _react2.default.createElement('circle', { cx: '8', cy: '8', r: '8', 'data-jsx': 2550302918
  }), _react2.default.createElement('rect', { x: '20', y: '1', width: '14', height: '14', 'data-jsx': 2550302918
  })), _react2.default.createElement('b', {
    'data-jsx': 2550302918
  }, false && data.logo), _react2.default.createElement('h1', {
    'data-jsx': 2550302918
  }, data.name), _react2.default.createElement('p', {
    'data-jsx': 2550302918
  }, data.description), _react2.default.createElement('div', {
    'data-jsx': 2550302918
  }, _react2.default.createElement('h2', {
    'data-jsx': 2550302918
  }, 'Stuff I enjoy'), data.skills.map(function (skill, index) {
    return _react2.default.createElement(Tag, { key: index, label: skill });
  })), _react2.default.createElement(Social, null)), _react2.default.createElement(_style2.default, {
    styleId: 2550302918,
    css: 'svg[data-jsx="2550302918"] {margin-left: calc(-200px / 35);display: block;}h1[data-jsx="2550302918"] {font-weight: normal;font-size: 3rem;font-family: Futura;text-transform: uppercase;letter-spacing: .2em;}b[data-jsx="2550302918"] {font-weight: normal;font-size: 6rem;font-family: Futura;}div[data-jsx="2550302918"] > div[data-jsx="2550302918"] {margin-top: 3rem;margin-bottom: 3rem;}'
  }));
};

var Section = function Section(_ref3) {
  var data = _ref3.data;
  return _react2.default.createElement('section', { id: 'entries', 'data-jsx': 935095139
  }, _react2.default.createElement('h1', {
    'data-jsx': 935095139
  }, _react2.default.createElement('a', { href: '#' + data.name.toLowerCase(), 'data-jsx': 935095139
  }, data.name)), _react2.default.createElement('hr', {
    'data-jsx': 935095139
  }), _react2.default.createElement('ul', {
    'data-jsx': 935095139
  }, data.entries.map(function (_ref4, index) {
    var url = _ref4.url,
        name = _ref4.name,
        description = _ref4.description,
        tags = _ref4.tags;
    return _react2.default.createElement('li', { key: index, 'data-jsx': 935095139
    }, _react2.default.createElement('a', { href: url, style: { fontFamily: tags.indexOf('post') !== -1 ? 'Georgia, serif' : tags.indexOf('job') !== -1 ? 'inherit' : 'monospace' }, 'data-jsx': 935095139
    }, _react2.default.createElement('h2', {
      'data-jsx': 935095139
    }, name), _react2.default.createElement('p', {
      'data-jsx': 935095139
    }, description), tags && tags.map(function (tag, index) {
      return _react2.default.createElement(Tag, { key: index, label: tag });
    })));
  })), _react2.default.createElement(_style2.default, {
    styleId: 935095139,
    css: '@media (min-width: 60em) {ul[data-jsx="935095139"] {margin-right: -1rem;margin-left: -1rem;}li[data-jsx="935095139"] {width: 50%;display: inline-block;vertical-align: top;}}@media (min-width: 80em) {li[data-jsx="935095139"] {width: 25%;}}h1[data-jsx="935095139"] {font-size: 2rem;}h1[data-jsx="935095139"] > a[data-jsx="935095139"]:hover::after,h1[data-jsx="935095139"] > a[data-jsx="935095139"]:focus::after {content: " #";}h2[data-jsx="935095139"] {margin-bottom: 0;font-size: 1rem;}p[data-jsx="935095139"] {margin-top: 0;}ul[data-jsx="935095139"] {list-style-type: none;padding-left: 0;}li[data-jsx="935095139"] {}li[data-jsx="935095139"] > a[data-jsx="935095139"] {box-sizing: border-box;min-height: 300px;min-height: 15vw;padding: 1rem;display: block;}'
  }));
};

var Outro = function Outro() {
  return _react2.default.createElement('footer', null, _react2.default.createElement('div', null, _react2.default.createElement(Social, null), _react2.default.createElement('p', null, _react2.default.createElement('small', null, '\xA9 ', year, ' Chris Nager \xB7 Built in vim with next.js.'))));
};

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Chris Nager'), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement(Intro, { data: data.intro }), _react2.default.createElement('main', null, _react2.default.createElement(Section, { data: data.projects }), _react2.default.createElement(Section, { data: data.career })), _react2.default.createElement(Outro, null), _react2.default.createElement('style', null, '\n      body {\n        margin: 0;\n        font: 100%/1.5 BlinkMacSystemFont;\n      }\n\n      header,\n      section,\n      footer {\n        padding: 2rem;\n      }\n\n      header > div,\n      section > div,\n      footer > div {\n        max-width: 60em;\n        margin-right: auto;\n        margin-left: auto;\n      }\n\n      a {\n        text-decoration: none;\n        color: inherit;\n      }\n\n      a:hover,\n      a:focus {\n        !color: #f06;\n        !background-color: #0cf;\n      }\n\n      hr {\n        border: none;\n        height: 7px;\n        background: linear-gradient(-135deg, transparent 4px, #000 5px, transparent 0), linear-gradient(135deg, transparent 4px, #000 5px, transparent 0);\n        background-repeat: repeat-x;\n        background-size: 13px 10px;\n      }\n\n      i {\n        margin-right: .5rem;\n        font-size: .75rem;\n        color: #888;\n      }\n\n      a:hover,\n      a:focus {\n        text-decoration: underline;\n        color: red;\n        background-color: #0cf;\n      }\n    '));
};