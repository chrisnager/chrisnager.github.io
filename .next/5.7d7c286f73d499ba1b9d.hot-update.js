webpackHotUpdate(5,{

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(559);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(198);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(558);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/chrisnager/Dropbox/Chris/Projects/chrisnager.com/pages/index.js?entry';


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
    'data-jsx': 1669409179,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    }
  }, _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    }
  }, 'Twitter'), _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    }
  }, 'Github'), _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    }
  }, 'LinkedIn'), _react2.default.createElement(_style2.default, {
    styleId: 1669409179,
    css: 'a[data-jsx="1669409179"] {margin-right: 1rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStYZ0IsQUFDUCwwQkFDa0IsbUJBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc25hZ2VyL0Ryb3Bib3gvQ2hyaXMvUHJvamVjdHMvY2hyaXNuYWdlci5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuY29uc3QgZGF0YSA9IHtcbiAgaW50cm86IHtcbiAgICBsb2dvOiAnQ04nLFxuICAgIG5hbWU6ICdDaHJpcyBOYWdlcicsXG4gICAgZGVzY3JpcHRpb246ICdNaW5pbWFsaXN0IGRldmVsb3Blci1kZXNpZ25lciBpbiBCcm9va2x5biwgTlknLFxuICAgIHNraWxsczogW1xuICAgICAgJ2phdmFzY3JpcHQnLFxuICAgICAgYGVzJHt5ZWFyICsgMX1gLFxuICAgICAgJ25vZGUnLFxuICAgICAgJ2NzcycsXG4gICAgICAnY3NzLWluLWpzJyxcbiAgICAgICdzaW5nbGUtcHVycG9zZSBjc3MgY2xhc3NlcycsXG4gICAgICAnY3NzLWFuaW1hdGlvbnMnLFxuICAgICAgJ3Bvc3Rjc3MnLFxuICAgICAgJ2h0bWwnLFxuICAgICAgJ3JlYWN0JyxcbiAgICAgICdyZWFjdCBuYXRpdmUnLFxuICAgICAgJ3JlZHV4JyxcbiAgICAgICdyZWFjdC1yb3V0ZXInLFxuICAgICAgJ2pzeCcsXG4gICAgICAnamVzdCcsXG4gICAgICAnZ2l0JyxcbiAgICAgICduZXh0LmpzJyxcbiAgICAgICdub3cnLFxuICAgICAgJ3dlYnBhY2snLFxuICAgICAgJ2d1bHAnLFxuICAgICAgJ3ZpbScsXG4gICAgICAnbW9iaWxlIGFwcHMnLFxuICAgICAgJ3V4JyxcbiAgICAgICd1aScsXG4gICAgICAnYnJhbmRpbmcnLFxuICAgICAgJ2ljb25zJyxcbiAgICAgICdkZXNpZ24gc3lzdGVtcycsXG4gICAgICAndHlwb2dyYXBoeScsXG4gICAgICAnYWNjZXNzaWJpbGl0eScsXG4gICAgXSxcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBlbnRyaWVzOiBbXSxcbiAgfSxcbiAgY2FyZWVyOiB7XG4gICAgbmFtZTogJ0NhcmVlcicsXG4gICAgZW50cmllczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnSUVYJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDE1IC0gcHJlc2VudCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vaWV4dHJhZGluZy5jb20vJyxcbiAgICAgICAgdGFnczogWydqb2InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDExIC0gMjAxNScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnNhbGVzZm9yY2UuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnam9iJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTHVja2llJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDEwIC0yMDExJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5sdWNraWUuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnam9iJ10sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHByb2plY3RzOiB7XG4gICAgbmFtZTogJ1dvcmtzJyxcbiAgICBlbnRyaWVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICc+IFNpZ251bSBtYWpvcml0YXRpcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBzaWRlLXNjcm9sbGluZyBnYW1lIGJ1aWx0IGluIGEgc2luZ2xlIHN0cmluZycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9iaXQubHkvc21ham9yJyxcbiAgICAgICAgdGFnczogWydqYXZhc2NyaXB0JywgJ2dhbWUnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIDQsMDk2IHNob3J0aGFuZCBoZXhjb2RlcycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vY2hyaXNuYWdlci5naXRodWIuaW8vaGV4Y29kZXMvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3Nob3J0LWNvbG9yLW5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDUgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2ltcGxlLXBhbGV0dGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Egc2ltcGxlIGNvbG9yIHBhbGV0dGUnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2ltcGxlLXBhbGV0dGUvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3VuZ3JpZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHNpbXBsZXN0IHJlc3BvbnNpdmUgY3NzIGdyaWQnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW5ncmlkLycsXG4gICAgICAgIHRhZ3M6IFsnbGF5b3V0JywgJ2dyaWQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwczovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1kZWJ1Zy5jc3MvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdFbW9vbmppJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGNoYXRib3QnLFxuICAgICAgICB1cmw6ICdodHRwczovL2JpdC5kby9lbW9vbmppJyxcbiAgICAgICAgdGFnczogWydjaGF0Ym90JywgJ2phdmFzY3JpcHQnLCAnZmlyZWJhc2UnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHaXZlIFxcJ25cXCcgR28nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgY3VyYXRlZCBnYWxsZXJ5IG9mIERyaWJiYmxlIHNob3RzIHJld29ya2VkIGFzIGludGVyYWN0aXZlIENvZGVQZW4gcGVucycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9naXZlLW4tZ28uY28vJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnZGVzaWduJywgJ2NvbW11bml0eScsICdhcHAnLCAnc2l0ZSddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NoZWVyIG1lIHVwJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdGdW4sIGN1c3RvbSBwYWdlcyBpbiBzZWNvbmRzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NoZWVybWV1cC5pby8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdqYXZhc2NyaXB0JywgJ2dpZiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3VuZ3JpZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGhlIHNpbXBsZXN0IHJlc3BvbnNpdmUgY3NzIGdyaWQnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW5ncmlkLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ2dyaWQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdVbnRpbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQXJlIHdlIHRoZXJlIHlldD8nLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW50aWwvJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncmVhY3QnLCAnamF2YXNjcmlwdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1VOIERpc2FzdGVyIFJlc3BvbnNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDdXJyZW50bHkgd29ya2luZyB3aXRoIHRoZSBIYXJ2YXJkIEh1bWFuaXRhcmlhbiBJbml0aWF0aXZlIG9uIGEgZGlzYXN0ZXIgYW5kIGh1bWFuaXRhcmlhbiByZXNwb25zZSBzdXJ2ZXkgYnVpbGRpbmcgYXBwIHRvIGJlIHVzZWQgYnkgdGhlIFVuaXRlZCBOYXRpb25zJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly92aW1lby5jb20vNzE5MTE0OTcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0phdW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMZXQgeW91ciBmcmllbmRzIGJlIHlvdXIgY2l0eSBndWlkZXMuIChUZWNoQ3J1bmNoIERpc3J1cHQgSGFja2F0aG9uIGFwcCBlbnRyeSknLFxuICAgICAgICB1cmw6ICdodHRwczovL2Rpc3J1cHRueWhhY2thdGhvbi5kZXZwb3N0LmNvbS9zdWJtaXNzaW9ucy8yMzUxNC1qYXVudCcsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ2hhY2thdGhvbiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0N1cnNvcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCBhdmFpbGFibGUgY3Vyc29ycycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9jdXJzb3JzLycsXG4gICAgICAgIHRhZ3M6IFsnaHRtbCcsICdjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2ltcGxlLWRlYnVnLmNzcy8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdsYXlvdXQnLCAnZGVidWdnZXInXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUgcGFsZXR0ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBzaW1wbGUgY29sb3IgcGFsZXR0ZScsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaW1wbGUtcGFsZXR0ZS8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn4pyCIHNob3J0IGNvbG9yIG5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDQgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzLicsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJywgJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hleGNvZGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgcG9zc2libGUgdGhyZWUgZGlnaXQgaGV4Y29kZXMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vaGV4Y29kZXMvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RpbnkgZ29vZ2xlIGZvbnRzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTdHJpcCBkb3duIHlvdXIgZ29vZ2xlIGZvbnRzIHNpZ25pZmljYW50bHkgdG8gb25seSBpbmNsdWRlIHRoZSBjaGFyYWN0ZXJzIHlvdVxcJ3JlIGFjdHVhbGx5IHVzaW5nJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3RpbnktZ29vZ2xlLWZvbnRzLycsXG4gICAgICAgIHRhZ3M6IFsnZm9udHMnLCAnamF2YXNjcmlwdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JpcnRoZGF5IGhleCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmluZCB5b3VyIGJpcnRoZGF5IGhleGNvZGUnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vYmlydGhkYXktaGV4LycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTVkcgUGxlYXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaW1wbGUgc2NyaXB0IHRvIHJlcGxhY2UgeW91ciBiaXRtYXAgaWNvbnMgd2l0aCBpbmxpbmUgU1ZHcyB3aXRoIGJpdG1hcCBmYWxsYmFjayBidWlsdCBpbicsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zdmctcGxlYXNlLycsXG4gICAgICAgIHRhZ3M6IFsnc3ZnJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICcjRmF2NScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2hhdCBhcmUgeW91ciBmaXZlIG1vc3QgaW1wb3J0YW50IGl0ZW1zPycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9mYXY1LmNvLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVHdhZGxpYiEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FkLWxpYiB5b3VyIHR3ZWV0cycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmNvbS90d2FkbGliLycsXG4gICAgICAgIHRhZ3M6IFsnamF2YXNjcmlwdCcsICdjc3MnLCAnY29tcGV0aXRpb24nLCAndHdpdHRlcicsICcxMGsnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCbGlzcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmVhdXRpZnVsbHkgbGVhbiwgaWRlYWwgc3R5bGUgc2hlZXRzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL2JsaXNzLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ3JhZnRlZCBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcGVyc29uYWwgY29tcGlsYXRpb24gb2YgQ1NTIHByYWN0aWNlcyBJIGZvbGxvdycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc25hZ2VyL2NyYWZ0ZWQtY3NzJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnY29kZSBndWlkZWxpbmVzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU29jaWFsIExvZ29zJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEb3dubG9hZCBvZmZpY2lhbCBzb2NpYWwgbG9nb3MnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5jb20vc29jaWFsLWxvZ29zLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2hyaXNuYWdlci5jb20gdjEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ09yaWdpbnMnLFxuICAgICAgICB1cmw6ICdodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMTA4MDgxMzU2MDYvaHR0cDovL2NocmlzbmFnZXIuY29tL3BvcnRmb2xpby8jY2hyaXNuYWdlci12MScsXG4gICAgICAgIHRhZ3M6IFsnc2l0ZScsICdodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2hyaXNuYWdlci5jb20gdjInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NhcmUgdG8gcmVtaW5pc2NlPycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDExMDgwOTA4NTk1MS9odHRwOi8vY2hyaXNuYWdlci5jb20vJyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdjaHJpc25hZ2VyLmNvbSB2MycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSXRlcmF0ZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE2MTAwMTE4MjAxMy9odHRwOi8vY2hyaXNuYWdlci5jb20vJyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZW4gVGhvbXNvbiBQaG90bycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQXd3d2FyZHMgU2l0ZSBvZiB0aGUgRGF5JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYXd3d2FyZHMuY29tL3NpdGVzL2Jlbi10aG9tc29uLXBob3RvZ3JhcGh5JyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2JyYW5kaW5nJywgJ2xvZ28nLCAndXgnLCAncmVzZWFyY2gnLCAndWknXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUb3RhbGx5IEZyZXNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFeHBlcmltZW50YWwgQ1NTMyBkZXNpZ24gZmVhdHVyZWQgb24gU21hc2hpbmcgTWFnYXppbmUnLFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8yMDEwLzA3L2NzczMtZGVzaWduLWNvbnRlc3QtcmVzdWx0cy8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdjb21wZXRpdGlvbiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NlbnRlciBhbmQgY3JvcCBpbWFnZXMgd2l0aCBhIHNpbmdsZSBsaW5lIG9mIENTUycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgSmFuIDIwMTUnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Jlc3Bva2UgU1ZHIFJlZmVyZW5jZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjMgTWF5IDIwMTQnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydzdmcnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FuYWxvZy1zdHlsZSBMRUQgY2xvY2sgY29uY2VwdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjUgTWFyIDIwMTQnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NpbXBsZSB2ZXJ0aWNhbCBjZW50ZXJpbmcgd2l0aCBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzEwIEphbiAyMDE0JyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOWUMgU3Vid2F5IExpbmVzIHJlaW1hZ2luZWQgd2l0aCBsb25nIHNoYWRvdyBkZXNpZ24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI5IEp1biAyMDEzJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUaW1lLWJhc2VkIG1lZGlhIHF1ZXJpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI1IE1hciAyMDEzJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdIdWUgYnVtcCB3aXRoIFNhc3MgQGZvciBjb250cm9sIGRpcmVjdGl2ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTcgSmFuIDIwMTMnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Rpc3BsYXkgaWNvbnMgd2l0aCBjdXN0b20gZGF0YS1hdHRyaWJ1dGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMSBEZWMgMjAxMicsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2lyY2xlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgRGVjIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1ZpZGVvIGFuZCBhdWRpbyBpbiBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA0IERlYyAyMDEyJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOYXR1cmFsIGN1cnZlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDggTm92IDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ015IGluaXRpYWxzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBPY3QgMjAxMicsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVG91Y2hhYmxlIHRleHR1cmVzIHdpdGggQ1NTIC0gY2FuIHlvdSBmZWVsIG1lPycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggT2N0IDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Z1cnRoZXIgc2ltcGxpZmllZCBoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JveCBzaXppbmcgZm9yIHBzZXVkbyBlbGVtZW50cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDkgU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FuIEV2ZW50IEFwYXJ0IGFuZCBhIERlc2lnbmVy4oCZcyBWaWV3IG9mIHRoZSBXZWInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIzIFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDU1MzIDo6c2VsZWN0aW9uIGJhY2tncm91bmQgY29sb3IgdHJpY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA5IFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDaHJpcyBOYWdlciAyMDEyIChSZXNwb25zaXZlIERlc2lnbiknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE4IEF1ZyAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDaHJpc05hZ2VyLmNvbSB2MiBpcyBsaXZlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcxMiBKdW4gMjAxMScsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmNvbnN0IFNvY2lhbCA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8YSBocmVmPVwiXCI+VHdpdHRlcjwvYT5cbiAgICA8YSBocmVmPVwiXCI+R2l0aHViPC9hPlxuICAgIDxhIGhyZWY9XCJcIj5MaW5rZWRJbjwvYT5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbilcblxuY29uc3QgVGFnID0gKHtsYWJlbH0pID0+IDxpPntsYWJlbH08L2k+XG5cbmNvbnN0IEludHJvID0gKHtkYXRhfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXY+XG4gICAgICA8Yj57ZGF0YS5sb2dvfTwvYj5cbiAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U3R1ZmYgSSBlbmpveTwvaDI+XG4gICAgICAgIHtkYXRhLnNraWxscy5tYXAoKHNraWxsLCBpbmRleCkgPT4gPFRhZyBrZXk9e2luZGV4fSBsYWJlbD17c2tpbGx9IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFNvY2lhbCAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIGIge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmE7XG4gICAgICB9XG5cbiAgICAgIGRpdiA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuY29uc3QgU2VjdGlvbiA9ICh7ZGF0YX0pID0+IChcbiAgPHNlY3Rpb24gaWQ9XCJlbnRyaWVzXCI+XG4gICAgPGgxPjxhIGhyZWY9e2AjJHtkYXRhLm5hbWUudG9Mb3dlckNhc2UoKX1gfT57ZGF0YS5uYW1lfTwvYT48L2gxPlxuXG4gICAgPGhyIC8+XG5cbiAgICA8dWw+XG4gICAgICB7ZGF0YS5lbnRyaWVzLm1hcCgoe3VybCwgbmFtZSwgZGVzY3JpcHRpb24sIHRhZ3N9LCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgPGEgaHJlZj17dXJsfSBzdHlsZT17e2ZvbnRGYW1pbHk6IHRhZ3MuaW5kZXhPZigncG9zdCcpICE9PSAtMSA/ICdHZW9yZ2lhLCBzZXJpZicgOiB0YWdzLmluZGV4T2YoJ2pvYicpICE9PSAtMSA/ICdpbmhlcml0JyA6ICdtb25vc3BhY2UnfX0+XG4gICAgICAgICAgICA8aDI+e25hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAge3RhZ3MgJiYgdGFncy5tYXAoKHRhZywgaW5kZXgpID0+IDxUYWcga2V5PXtpbmRleH0gbGFiZWw9e3RhZ30gLz4pfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cblxuICAgICAgaDEgPiBhOmhvdmVyOjphZnRlcixcbiAgICAgIGgxID4gYTpmb2N1czo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAjXCI7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiA0cmVtOyAqL1xuICAgICAgfVxuXG4gICAgICBsaSA+IGEge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTV2dztcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmNvbnN0IE91dHJvID0gKCkgPT4gKFxuICA8Zm9vdGVyPlxuICAgIDxkaXY+XG4gICAgICA8U29jaWFsIC8+XG4gICAgICA8cD5cbiAgICAgICAgPHNtYWxsPiZjb3B5OyB7eWVhcn0gQ2hyaXMgTmFnZXIgJm1pZGRvdDsgQnVpbHQgaW4gdmltIHdpdGggbmV4dC5qcy48L3NtYWxsPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkNocmlzIE5hZ2VyPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxJbnRybyBkYXRhPXtkYXRhLmludHJvfSAvPlxuICAgIDxtYWluPlxuICAgICAgPFNlY3Rpb24gZGF0YT17ZGF0YS5wcm9qZWN0c30gLz5cbiAgICAgIDxTZWN0aW9uIGRhdGE9e2RhdGEuY2FyZWVyfSAvPlxuICAgIDwvbWFpbj5cbiAgICA8T3V0cm8gLz5cbiAgICA8c3R5bGU+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQ6IDEwMCUvMS41IEJsaW5rTWFjU3lzdGVtRm9udDtcbiAgICAgIH1cblxuICAgICAgaGVhZGVyLFxuICAgICAgc2VjdGlvbixcbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGhlYWRlciA+IGRpdixcbiAgICAgIHNlY3Rpb24gPiBkaXYsXG4gICAgICBmb290ZXIgPiBkaXYge1xuICAgICAgICBtYXgtd2lkdGg6IDYwZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyLFxuICAgICAgYTpmb2N1cyB7XG4gICAgICAgICFjb2xvcjogI2YwNjtcbiAgICAgICAgIWJhY2tncm91bmQtY29sb3I6ICMwY2Y7XG4gICAgICB9XG5cbiAgICAgIGhyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHRyYW5zcGFyZW50IDRweCwgIzAwMCA1cHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA0cHgsICMwMDAgNXB4LCB0cmFuc3BhcmVudCAwKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEzcHggMTBweDtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBjZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

var Tag = function Tag(_ref) {
  var label = _ref.label;
  return _react2.default.createElement('i', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    }
  }, label);
};

var Intro = function Intro(_ref2) {
  var data = _ref2.data;
  return _react2.default.createElement('header', {
    'data-jsx': 1282536041,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 1282536041,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    }
  }, _react2.default.createElement('b', {
    'data-jsx': 1282536041,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    }
  }, data.logo), _react2.default.createElement('h1', {
    'data-jsx': 1282536041,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    }
  }, data.name), _react2.default.createElement('p', {
    'data-jsx': 1282536041,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    }
  }, data.description), _react2.default.createElement('div', {
    'data-jsx': 1282536041,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    }
  }, _react2.default.createElement('h2', {
    'data-jsx': 1282536041,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    }
  }, 'Stuff I enjoy'), data.skills.map(function (skill, index) {
    return _react2.default.createElement(Tag, { key: index, label: skill, __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      }
    });
  })), _react2.default.createElement(Social, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 1282536041,
    css: 'h1[data-jsx="1282536041"] {font-size: 3rem;}b[data-jsx="1282536041"] {font-weight: normal;font-size: 6rem;font-family: Futura;}div[data-jsx="1282536041"] > div[data-jsx="1282536041"] {margin-top: 3rem;margin-bottom: 3rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNaZ0IsQUFDTiwyQkFDYyxnQkFDakIsQ0FFRSwwQkFDbUIsb0JBQ0osZ0JBQ0ksb0JBQ3JCLENBRVUseURBQ1EsaUJBQ0csb0JBQ3JCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc25hZ2VyL0Ryb3Bib3gvQ2hyaXMvUHJvamVjdHMvY2hyaXNuYWdlci5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuY29uc3QgZGF0YSA9IHtcbiAgaW50cm86IHtcbiAgICBsb2dvOiAnQ04nLFxuICAgIG5hbWU6ICdDaHJpcyBOYWdlcicsXG4gICAgZGVzY3JpcHRpb246ICdNaW5pbWFsaXN0IGRldmVsb3Blci1kZXNpZ25lciBpbiBCcm9va2x5biwgTlknLFxuICAgIHNraWxsczogW1xuICAgICAgJ2phdmFzY3JpcHQnLFxuICAgICAgYGVzJHt5ZWFyICsgMX1gLFxuICAgICAgJ25vZGUnLFxuICAgICAgJ2NzcycsXG4gICAgICAnY3NzLWluLWpzJyxcbiAgICAgICdzaW5nbGUtcHVycG9zZSBjc3MgY2xhc3NlcycsXG4gICAgICAnY3NzLWFuaW1hdGlvbnMnLFxuICAgICAgJ3Bvc3Rjc3MnLFxuICAgICAgJ2h0bWwnLFxuICAgICAgJ3JlYWN0JyxcbiAgICAgICdyZWFjdCBuYXRpdmUnLFxuICAgICAgJ3JlZHV4JyxcbiAgICAgICdyZWFjdC1yb3V0ZXInLFxuICAgICAgJ2pzeCcsXG4gICAgICAnamVzdCcsXG4gICAgICAnZ2l0JyxcbiAgICAgICduZXh0LmpzJyxcbiAgICAgICdub3cnLFxuICAgICAgJ3dlYnBhY2snLFxuICAgICAgJ2d1bHAnLFxuICAgICAgJ3ZpbScsXG4gICAgICAnbW9iaWxlIGFwcHMnLFxuICAgICAgJ3V4JyxcbiAgICAgICd1aScsXG4gICAgICAnYnJhbmRpbmcnLFxuICAgICAgJ2ljb25zJyxcbiAgICAgICdkZXNpZ24gc3lzdGVtcycsXG4gICAgICAndHlwb2dyYXBoeScsXG4gICAgICAnYWNjZXNzaWJpbGl0eScsXG4gICAgXSxcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBlbnRyaWVzOiBbXSxcbiAgfSxcbiAgY2FyZWVyOiB7XG4gICAgbmFtZTogJ0NhcmVlcicsXG4gICAgZW50cmllczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnSUVYJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDE1IC0gcHJlc2VudCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vaWV4dHJhZGluZy5jb20vJyxcbiAgICAgICAgdGFnczogWydqb2InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDExIC0gMjAxNScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnNhbGVzZm9yY2UuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnam9iJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTHVja2llJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDEwIC0yMDExJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5sdWNraWUuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnam9iJ10sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHByb2plY3RzOiB7XG4gICAgbmFtZTogJ1dvcmtzJyxcbiAgICBlbnRyaWVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICc+IFNpZ251bSBtYWpvcml0YXRpcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBzaWRlLXNjcm9sbGluZyBnYW1lIGJ1aWx0IGluIGEgc2luZ2xlIHN0cmluZycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9iaXQubHkvc21ham9yJyxcbiAgICAgICAgdGFnczogWydqYXZhc2NyaXB0JywgJ2dhbWUnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIDQsMDk2IHNob3J0aGFuZCBoZXhjb2RlcycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vY2hyaXNuYWdlci5naXRodWIuaW8vaGV4Y29kZXMvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3Nob3J0LWNvbG9yLW5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDUgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2ltcGxlLXBhbGV0dGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Egc2ltcGxlIGNvbG9yIHBhbGV0dGUnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2ltcGxlLXBhbGV0dGUvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3VuZ3JpZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHNpbXBsZXN0IHJlc3BvbnNpdmUgY3NzIGdyaWQnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW5ncmlkLycsXG4gICAgICAgIHRhZ3M6IFsnbGF5b3V0JywgJ2dyaWQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwczovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1kZWJ1Zy5jc3MvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdFbW9vbmppJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGNoYXRib3QnLFxuICAgICAgICB1cmw6ICdodHRwczovL2JpdC5kby9lbW9vbmppJyxcbiAgICAgICAgdGFnczogWydjaGF0Ym90JywgJ2phdmFzY3JpcHQnLCAnZmlyZWJhc2UnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHaXZlIFxcJ25cXCcgR28nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgY3VyYXRlZCBnYWxsZXJ5IG9mIERyaWJiYmxlIHNob3RzIHJld29ya2VkIGFzIGludGVyYWN0aXZlIENvZGVQZW4gcGVucycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9naXZlLW4tZ28uY28vJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnZGVzaWduJywgJ2NvbW11bml0eScsICdhcHAnLCAnc2l0ZSddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NoZWVyIG1lIHVwJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdGdW4sIGN1c3RvbSBwYWdlcyBpbiBzZWNvbmRzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NoZWVybWV1cC5pby8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdqYXZhc2NyaXB0JywgJ2dpZiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3VuZ3JpZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGhlIHNpbXBsZXN0IHJlc3BvbnNpdmUgY3NzIGdyaWQnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW5ncmlkLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ2dyaWQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdVbnRpbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQXJlIHdlIHRoZXJlIHlldD8nLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW50aWwvJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncmVhY3QnLCAnamF2YXNjcmlwdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1VOIERpc2FzdGVyIFJlc3BvbnNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDdXJyZW50bHkgd29ya2luZyB3aXRoIHRoZSBIYXJ2YXJkIEh1bWFuaXRhcmlhbiBJbml0aWF0aXZlIG9uIGEgZGlzYXN0ZXIgYW5kIGh1bWFuaXRhcmlhbiByZXNwb25zZSBzdXJ2ZXkgYnVpbGRpbmcgYXBwIHRvIGJlIHVzZWQgYnkgdGhlIFVuaXRlZCBOYXRpb25zJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly92aW1lby5jb20vNzE5MTE0OTcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0phdW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMZXQgeW91ciBmcmllbmRzIGJlIHlvdXIgY2l0eSBndWlkZXMuIChUZWNoQ3J1bmNoIERpc3J1cHQgSGFja2F0aG9uIGFwcCBlbnRyeSknLFxuICAgICAgICB1cmw6ICdodHRwczovL2Rpc3J1cHRueWhhY2thdGhvbi5kZXZwb3N0LmNvbS9zdWJtaXNzaW9ucy8yMzUxNC1qYXVudCcsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ2hhY2thdGhvbiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0N1cnNvcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCBhdmFpbGFibGUgY3Vyc29ycycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9jdXJzb3JzLycsXG4gICAgICAgIHRhZ3M6IFsnaHRtbCcsICdjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2ltcGxlLWRlYnVnLmNzcy8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdsYXlvdXQnLCAnZGVidWdnZXInXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUgcGFsZXR0ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBzaW1wbGUgY29sb3IgcGFsZXR0ZScsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaW1wbGUtcGFsZXR0ZS8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn4pyCIHNob3J0IGNvbG9yIG5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDQgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzLicsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJywgJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hleGNvZGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgcG9zc2libGUgdGhyZWUgZGlnaXQgaGV4Y29kZXMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vaGV4Y29kZXMvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RpbnkgZ29vZ2xlIGZvbnRzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTdHJpcCBkb3duIHlvdXIgZ29vZ2xlIGZvbnRzIHNpZ25pZmljYW50bHkgdG8gb25seSBpbmNsdWRlIHRoZSBjaGFyYWN0ZXJzIHlvdVxcJ3JlIGFjdHVhbGx5IHVzaW5nJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3RpbnktZ29vZ2xlLWZvbnRzLycsXG4gICAgICAgIHRhZ3M6IFsnZm9udHMnLCAnamF2YXNjcmlwdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JpcnRoZGF5IGhleCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmluZCB5b3VyIGJpcnRoZGF5IGhleGNvZGUnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vYmlydGhkYXktaGV4LycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTVkcgUGxlYXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaW1wbGUgc2NyaXB0IHRvIHJlcGxhY2UgeW91ciBiaXRtYXAgaWNvbnMgd2l0aCBpbmxpbmUgU1ZHcyB3aXRoIGJpdG1hcCBmYWxsYmFjayBidWlsdCBpbicsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zdmctcGxlYXNlLycsXG4gICAgICAgIHRhZ3M6IFsnc3ZnJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICcjRmF2NScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2hhdCBhcmUgeW91ciBmaXZlIG1vc3QgaW1wb3J0YW50IGl0ZW1zPycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9mYXY1LmNvLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVHdhZGxpYiEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FkLWxpYiB5b3VyIHR3ZWV0cycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmNvbS90d2FkbGliLycsXG4gICAgICAgIHRhZ3M6IFsnamF2YXNjcmlwdCcsICdjc3MnLCAnY29tcGV0aXRpb24nLCAndHdpdHRlcicsICcxMGsnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCbGlzcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmVhdXRpZnVsbHkgbGVhbiwgaWRlYWwgc3R5bGUgc2hlZXRzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL2JsaXNzLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ3JhZnRlZCBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcGVyc29uYWwgY29tcGlsYXRpb24gb2YgQ1NTIHByYWN0aWNlcyBJIGZvbGxvdycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc25hZ2VyL2NyYWZ0ZWQtY3NzJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnY29kZSBndWlkZWxpbmVzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU29jaWFsIExvZ29zJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEb3dubG9hZCBvZmZpY2lhbCBzb2NpYWwgbG9nb3MnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5jb20vc29jaWFsLWxvZ29zLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2hyaXNuYWdlci5jb20gdjEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ09yaWdpbnMnLFxuICAgICAgICB1cmw6ICdodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMTA4MDgxMzU2MDYvaHR0cDovL2NocmlzbmFnZXIuY29tL3BvcnRmb2xpby8jY2hyaXNuYWdlci12MScsXG4gICAgICAgIHRhZ3M6IFsnc2l0ZScsICdodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2hyaXNuYWdlci5jb20gdjInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NhcmUgdG8gcmVtaW5pc2NlPycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDExMDgwOTA4NTk1MS9odHRwOi8vY2hyaXNuYWdlci5jb20vJyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdjaHJpc25hZ2VyLmNvbSB2MycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSXRlcmF0ZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE2MTAwMTE4MjAxMy9odHRwOi8vY2hyaXNuYWdlci5jb20vJyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZW4gVGhvbXNvbiBQaG90bycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQXd3d2FyZHMgU2l0ZSBvZiB0aGUgRGF5JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYXd3d2FyZHMuY29tL3NpdGVzL2Jlbi10aG9tc29uLXBob3RvZ3JhcGh5JyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2JyYW5kaW5nJywgJ2xvZ28nLCAndXgnLCAncmVzZWFyY2gnLCAndWknXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUb3RhbGx5IEZyZXNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFeHBlcmltZW50YWwgQ1NTMyBkZXNpZ24gZmVhdHVyZWQgb24gU21hc2hpbmcgTWFnYXppbmUnLFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8yMDEwLzA3L2NzczMtZGVzaWduLWNvbnRlc3QtcmVzdWx0cy8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdjb21wZXRpdGlvbiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NlbnRlciBhbmQgY3JvcCBpbWFnZXMgd2l0aCBhIHNpbmdsZSBsaW5lIG9mIENTUycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgSmFuIDIwMTUnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Jlc3Bva2UgU1ZHIFJlZmVyZW5jZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjMgTWF5IDIwMTQnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydzdmcnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FuYWxvZy1zdHlsZSBMRUQgY2xvY2sgY29uY2VwdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjUgTWFyIDIwMTQnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NpbXBsZSB2ZXJ0aWNhbCBjZW50ZXJpbmcgd2l0aCBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzEwIEphbiAyMDE0JyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOWUMgU3Vid2F5IExpbmVzIHJlaW1hZ2luZWQgd2l0aCBsb25nIHNoYWRvdyBkZXNpZ24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI5IEp1biAyMDEzJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUaW1lLWJhc2VkIG1lZGlhIHF1ZXJpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI1IE1hciAyMDEzJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdIdWUgYnVtcCB3aXRoIFNhc3MgQGZvciBjb250cm9sIGRpcmVjdGl2ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTcgSmFuIDIwMTMnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Rpc3BsYXkgaWNvbnMgd2l0aCBjdXN0b20gZGF0YS1hdHRyaWJ1dGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMSBEZWMgMjAxMicsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2lyY2xlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgRGVjIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1ZpZGVvIGFuZCBhdWRpbyBpbiBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA0IERlYyAyMDEyJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOYXR1cmFsIGN1cnZlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDggTm92IDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ015IGluaXRpYWxzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBPY3QgMjAxMicsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVG91Y2hhYmxlIHRleHR1cmVzIHdpdGggQ1NTIC0gY2FuIHlvdSBmZWVsIG1lPycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggT2N0IDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Z1cnRoZXIgc2ltcGxpZmllZCBoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JveCBzaXppbmcgZm9yIHBzZXVkbyBlbGVtZW50cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDkgU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FuIEV2ZW50IEFwYXJ0IGFuZCBhIERlc2lnbmVy4oCZcyBWaWV3IG9mIHRoZSBXZWInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIzIFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDU1MzIDo6c2VsZWN0aW9uIGJhY2tncm91bmQgY29sb3IgdHJpY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA5IFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDaHJpcyBOYWdlciAyMDEyIChSZXNwb25zaXZlIERlc2lnbiknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE4IEF1ZyAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDaHJpc05hZ2VyLmNvbSB2MiBpcyBsaXZlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcxMiBKdW4gMjAxMScsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmNvbnN0IFNvY2lhbCA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8YSBocmVmPVwiXCI+VHdpdHRlcjwvYT5cbiAgICA8YSBocmVmPVwiXCI+R2l0aHViPC9hPlxuICAgIDxhIGhyZWY9XCJcIj5MaW5rZWRJbjwvYT5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbilcblxuY29uc3QgVGFnID0gKHtsYWJlbH0pID0+IDxpPntsYWJlbH08L2k+XG5cbmNvbnN0IEludHJvID0gKHtkYXRhfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXY+XG4gICAgICA8Yj57ZGF0YS5sb2dvfTwvYj5cbiAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U3R1ZmYgSSBlbmpveTwvaDI+XG4gICAgICAgIHtkYXRhLnNraWxscy5tYXAoKHNraWxsLCBpbmRleCkgPT4gPFRhZyBrZXk9e2luZGV4fSBsYWJlbD17c2tpbGx9IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFNvY2lhbCAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIGIge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmE7XG4gICAgICB9XG5cbiAgICAgIGRpdiA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuY29uc3QgU2VjdGlvbiA9ICh7ZGF0YX0pID0+IChcbiAgPHNlY3Rpb24gaWQ9XCJlbnRyaWVzXCI+XG4gICAgPGgxPjxhIGhyZWY9e2AjJHtkYXRhLm5hbWUudG9Mb3dlckNhc2UoKX1gfT57ZGF0YS5uYW1lfTwvYT48L2gxPlxuXG4gICAgPGhyIC8+XG5cbiAgICA8dWw+XG4gICAgICB7ZGF0YS5lbnRyaWVzLm1hcCgoe3VybCwgbmFtZSwgZGVzY3JpcHRpb24sIHRhZ3N9LCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgPGEgaHJlZj17dXJsfSBzdHlsZT17e2ZvbnRGYW1pbHk6IHRhZ3MuaW5kZXhPZigncG9zdCcpICE9PSAtMSA/ICdHZW9yZ2lhLCBzZXJpZicgOiB0YWdzLmluZGV4T2YoJ2pvYicpICE9PSAtMSA/ICdpbmhlcml0JyA6ICdtb25vc3BhY2UnfX0+XG4gICAgICAgICAgICA8aDI+e25hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAge3RhZ3MgJiYgdGFncy5tYXAoKHRhZywgaW5kZXgpID0+IDxUYWcga2V5PXtpbmRleH0gbGFiZWw9e3RhZ30gLz4pfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cblxuICAgICAgaDEgPiBhOmhvdmVyOjphZnRlcixcbiAgICAgIGgxID4gYTpmb2N1czo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAjXCI7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiA0cmVtOyAqL1xuICAgICAgfVxuXG4gICAgICBsaSA+IGEge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTV2dztcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmNvbnN0IE91dHJvID0gKCkgPT4gKFxuICA8Zm9vdGVyPlxuICAgIDxkaXY+XG4gICAgICA8U29jaWFsIC8+XG4gICAgICA8cD5cbiAgICAgICAgPHNtYWxsPiZjb3B5OyB7eWVhcn0gQ2hyaXMgTmFnZXIgJm1pZGRvdDsgQnVpbHQgaW4gdmltIHdpdGggbmV4dC5qcy48L3NtYWxsPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkNocmlzIE5hZ2VyPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxJbnRybyBkYXRhPXtkYXRhLmludHJvfSAvPlxuICAgIDxtYWluPlxuICAgICAgPFNlY3Rpb24gZGF0YT17ZGF0YS5wcm9qZWN0c30gLz5cbiAgICAgIDxTZWN0aW9uIGRhdGE9e2RhdGEuY2FyZWVyfSAvPlxuICAgIDwvbWFpbj5cbiAgICA8T3V0cm8gLz5cbiAgICA8c3R5bGU+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQ6IDEwMCUvMS41IEJsaW5rTWFjU3lzdGVtRm9udDtcbiAgICAgIH1cblxuICAgICAgaGVhZGVyLFxuICAgICAgc2VjdGlvbixcbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGhlYWRlciA+IGRpdixcbiAgICAgIHNlY3Rpb24gPiBkaXYsXG4gICAgICBmb290ZXIgPiBkaXYge1xuICAgICAgICBtYXgtd2lkdGg6IDYwZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyLFxuICAgICAgYTpmb2N1cyB7XG4gICAgICAgICFjb2xvcjogI2YwNjtcbiAgICAgICAgIWJhY2tncm91bmQtY29sb3I6ICMwY2Y7XG4gICAgICB9XG5cbiAgICAgIGhyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHRyYW5zcGFyZW50IDRweCwgIzAwMCA1cHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA0cHgsICMwMDAgNXB4LCB0cmFuc3BhcmVudCAwKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEzcHggMTBweDtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBjZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

var Section = function Section(_ref3) {
  var data = _ref3.data;
  return _react2.default.createElement('section', { id: 'entries', 'data-jsx': 935095139,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 935095139,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    }
  }, _react2.default.createElement('a', { href: '#' + data.name.toLowerCase(), 'data-jsx': 935095139,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    }
  }, data.name)), _react2.default.createElement('hr', {
    'data-jsx': 935095139,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 935095139,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    }
  }, data.entries.map(function (_ref4, index) {
    var url = _ref4.url,
        name = _ref4.name,
        description = _ref4.description,
        tags = _ref4.tags;
    return _react2.default.createElement('li', { key: index, 'data-jsx': 935095139,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      }
    }, _react2.default.createElement('a', { href: url, style: { fontFamily: tags.indexOf('post') !== -1 ? 'Georgia, serif' : tags.indexOf('job') !== -1 ? 'inherit' : 'monospace' }, 'data-jsx': 935095139,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      }
    }, _react2.default.createElement('h2', {
      'data-jsx': 935095139,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      }
    }, name), _react2.default.createElement('p', {
      'data-jsx': 935095139,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      }
    }, description), tags && tags.map(function (tag, index) {
      return _react2.default.createElement(Tag, { key: index, label: tag, __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      });
    })));
  })), _react2.default.createElement(_style2.default, {
    styleId: 935095139,
    css: '@media (min-width: 60em) {ul[data-jsx="935095139"] {margin-right: -1rem;margin-left: -1rem;}li[data-jsx="935095139"] {width: 50%;display: inline-block;vertical-align: top;}}@media (min-width: 80em) {li[data-jsx="935095139"] {width: 25%;}}h1[data-jsx="935095139"] {font-size: 2rem;}h1[data-jsx="935095139"] > a[data-jsx="935095139"]:hover::after,h1[data-jsx="935095139"] > a[data-jsx="935095139"]:focus::after {content: " #";}h2[data-jsx="935095139"] {margin-bottom: 0;font-size: 1rem;}p[data-jsx="935095139"] {margin-top: 0;}ul[data-jsx="935095139"] {list-style-type: none;padding-left: 0;}li[data-jsx="935095139"] {}li[data-jsx="935095139"] > a[data-jsx="935095139"] {box-sizing: border-box;min-height: 300px;min-height: 15vw;padding: 1rem;display: block;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJiZ0IsQUFDZ0IsMEJBQ3BCLDBCQUNrQixvQkFDRCxtQkFDcEIsQ0FFRywwQkFDUyxXQUNXLHNCQUNGLG9CQUNyQixDQUNGLENBRXlCLDBCQUNwQiwwQkFDUyxXQUNaLENBQ0YsQ0FFRywwQkFDYyxnQkFDakIsQ0FHb0IsaUlBQ0wsY0FDZixDQUVHLDBCQUNlLGlCQUNELGdCQUNqQixDQUVFLHlCQUNhLGNBQ2YsQ0FFRywwQkFDb0Isc0JBQ04sZ0JBQ2pCLENBRUcsMEJBRUgsQ0FFTyxvREFDaUIsdUJBQ0wsa0JBQ0QsaUJBQ0gsY0FDQyxlQUNoQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvY2hyaXNuYWdlci9Ecm9wYm94L0NocmlzL1Byb2plY3RzL2NocmlzbmFnZXIuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG5cbmNvbnN0IGRhdGEgPSB7XG4gIGludHJvOiB7XG4gICAgbG9nbzogJ0NOJyxcbiAgICBuYW1lOiAnQ2hyaXMgTmFnZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnTWluaW1hbGlzdCBkZXZlbG9wZXItZGVzaWduZXIgaW4gQnJvb2tseW4sIE5ZJyxcbiAgICBza2lsbHM6IFtcbiAgICAgICdqYXZhc2NyaXB0JyxcbiAgICAgIGBlcyR7eWVhciArIDF9YCxcbiAgICAgICdub2RlJyxcbiAgICAgICdjc3MnLFxuICAgICAgJ2Nzcy1pbi1qcycsXG4gICAgICAnc2luZ2xlLXB1cnBvc2UgY3NzIGNsYXNzZXMnLFxuICAgICAgJ2Nzcy1hbmltYXRpb25zJyxcbiAgICAgICdwb3N0Y3NzJyxcbiAgICAgICdodG1sJyxcbiAgICAgICdyZWFjdCcsXG4gICAgICAncmVhY3QgbmF0aXZlJyxcbiAgICAgICdyZWR1eCcsXG4gICAgICAncmVhY3Qtcm91dGVyJyxcbiAgICAgICdqc3gnLFxuICAgICAgJ2plc3QnLFxuICAgICAgJ2dpdCcsXG4gICAgICAnbmV4dC5qcycsXG4gICAgICAnbm93JyxcbiAgICAgICd3ZWJwYWNrJyxcbiAgICAgICdndWxwJyxcbiAgICAgICd2aW0nLFxuICAgICAgJ21vYmlsZSBhcHBzJyxcbiAgICAgICd1eCcsXG4gICAgICAndWknLFxuICAgICAgJ2JyYW5kaW5nJyxcbiAgICAgICdpY29ucycsXG4gICAgICAnZGVzaWduIHN5c3RlbXMnLFxuICAgICAgJ3R5cG9ncmFwaHknLFxuICAgICAgJ2FjY2Vzc2liaWxpdHknLFxuICAgIF0sXG4gIH0sXG4gIHByb2ZpbGU6IHtcbiAgICBuYW1lOiAnUHJvZmlsZScsXG4gICAgZW50cmllczogW10sXG4gIH0sXG4gIGNhcmVlcjoge1xuICAgIG5hbWU6ICdDYXJlZXInLFxuICAgIGVudHJpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0lFWCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjAxNSAtIHByZXNlbnQnLFxuICAgICAgICB1cmw6ICdodHRwczovL2lleHRyYWRpbmcuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnam9iJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2FsZXNmb3JjZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjAxMSAtIDIwMTUnLFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy5zYWxlc2ZvcmNlLmNvbS8nLFxuICAgICAgICB0YWdzOiBbJ2pvYiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0x1Y2tpZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjAxMCAtMjAxMScsXG4gICAgICAgIHVybDogJ2h0dHA6Ly93d3cubHVja2llLmNvbS8nLFxuICAgICAgICB0YWdzOiBbJ2pvYiddLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBwcm9qZWN0czoge1xuICAgIG5hbWU6ICdXb3JrcycsXG4gICAgZW50cmllczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnPiBTaWdudW0gbWFqb3JpdGF0aXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Egc2lkZS1zY3JvbGxpbmcgZ2FtZSBidWlsdCBpbiBhIHNpbmdsZSBzdHJpbmcnLFxuICAgICAgICB1cmw6ICdodHRwOi8vYml0Lmx5L3NtYWpvcicsXG4gICAgICAgIHRhZ3M6IFsnamF2YXNjcmlwdCcsICdnYW1lJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnaGV4Y29kZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCA0LDA5NiBzaG9ydGhhbmQgaGV4Y29kZXMnLFxuICAgICAgICB1cmw6ICdodHRwczovL2NocmlzbmFnZXIuZ2l0aHViLmlvL2hleGNvZGVzLycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaG9ydC1jb2xvci1uYW1lcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDQ1IENTUyBjb2xvciBuYW1lcyB0aGF0IGFyZSBhcyBzaG9ydCBhcyBvciBzaG9ydGVyIHRoYW4gdGhlaXIgY29ycmVzcG9uZGluZyBoZXhjb2RlcycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2hvcnQtY29sb3ItbmFtZXMvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3NpbXBsZS1wYWxldHRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHNpbXBsZSBjb2xvciBwYWxldHRlJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1wYWxldHRlLycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd1bmdyaWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBzaW1wbGVzdCByZXNwb25zaXZlIGNzcyBncmlkJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3VuZ3JpZC8nLFxuICAgICAgICB0YWdzOiBbJ2xheW91dCcsICdncmlkJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2ltcGxlLWRlYnVnLmNzcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGVidWcgeW91ciBsYXlvdXRzIHdpdGggb25lIGxpbmUgb2YgQ1NTJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaW1wbGUtZGVidWcuY3NzLycsXG4gICAgICAgIHRhZ3M6IFsnbGF5b3V0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRW1vb25qaScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjaGF0Ym90JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9iaXQuZG8vZW1vb25qaScsXG4gICAgICAgIHRhZ3M6IFsnY2hhdGJvdCcsICdqYXZhc2NyaXB0JywgJ2ZpcmViYXNlJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnR2l2ZSBcXCduXFwnIEdvJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGN1cmF0ZWQgZ2FsbGVyeSBvZiBEcmliYmJsZSBzaG90cyByZXdvcmtlZCBhcyBpbnRlcmFjdGl2ZSBDb2RlUGVuIHBlbnMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vZ2l2ZS1uLWdvLmNvLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ2Rlc2lnbicsICdjb21tdW5pdHknLCAnYXBwJywgJ3NpdGUnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDaGVlciBtZSB1cCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRnVuLCBjdXN0b20gcGFnZXMgaW4gc2Vjb25kcycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaGVlcm1ldXAuaW8vJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnamF2YXNjcmlwdCcsICdnaWYnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd1bmdyaWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoZSBzaW1wbGVzdCByZXNwb25zaXZlIGNzcyBncmlkJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3VuZ3JpZC8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdncmlkJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVW50aWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FyZSB3ZSB0aGVyZSB5ZXQ/JyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3VudGlsLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3JlYWN0JywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdVTiBEaXNhc3RlciBSZXNwb25zZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ3VycmVudGx5IHdvcmtpbmcgd2l0aCB0aGUgSGFydmFyZCBIdW1hbml0YXJpYW4gSW5pdGlhdGl2ZSBvbiBhIGRpc2FzdGVyIGFuZCBodW1hbml0YXJpYW4gcmVzcG9uc2Ugc3VydmV5IGJ1aWxkaW5nIGFwcCB0byBiZSB1c2VkIGJ5IHRoZSBVbml0ZWQgTmF0aW9ucycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vdmltZW8uY29tLzcxOTExNDk3JyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdKYXVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTGV0IHlvdXIgZnJpZW5kcyBiZSB5b3VyIGNpdHkgZ3VpZGVzLiAoVGVjaENydW5jaCBEaXNydXB0IEhhY2thdGhvbiBhcHAgZW50cnkpJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9kaXNydXB0bnloYWNrYXRob24uZGV2cG9zdC5jb20vc3VibWlzc2lvbnMvMjM1MTQtamF1bnQnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdoYWNrYXRob24nXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDdXJzb3JzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgYXZhaWxhYmxlIGN1cnNvcnMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vY3Vyc29ycy8nLFxuICAgICAgICB0YWdzOiBbJ2h0bWwnLCAnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2ltcGxlLWRlYnVnLmNzcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRGVidWcgeW91ciBsYXlvdXRzIHdpdGggb25lIGxpbmUgb2YgQ1NTJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1kZWJ1Zy5jc3MvJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnbGF5b3V0JywgJ2RlYnVnZ2VyJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2ltcGxlIHBhbGV0dGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Egc2ltcGxlIGNvbG9yIHBhbGV0dGUnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2ltcGxlLXBhbGV0dGUvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ+KcgiBzaG9ydCBjb2xvciBuYW1lcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDQ0IENTUyBjb2xvciBuYW1lcyB0aGF0IGFyZSBhcyBzaG9ydCBhcyBvciBzaG9ydGVyIHRoYW4gdGhlaXIgY29ycmVzcG9uZGluZyBoZXhjb2Rlcy4nLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2hvcnQtY29sb3ItbmFtZXMvJyxcbiAgICAgICAgdGFnczogWydjb2xvcicsICdjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIHBvc3NpYmxlIHRocmVlIGRpZ2l0IGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL2hleGNvZGVzLycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0aW55IGdvb2dsZSBmb250cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU3RyaXAgZG93biB5b3VyIGdvb2dsZSBmb250cyBzaWduaWZpY2FudGx5IHRvIG9ubHkgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyB5b3VcXCdyZSBhY3R1YWxseSB1c2luZycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby90aW55LWdvb2dsZS1mb250cy8nLFxuICAgICAgICB0YWdzOiBbJ2ZvbnRzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCaXJ0aGRheSBoZXgnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbmQgeW91ciBiaXJ0aGRheSBoZXhjb2RlJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL2JpcnRoZGF5LWhleC8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJywgJ2NzcycsICdqYXZhc2NyaXB0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU1ZHIFBsZWFzZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2ltcGxlIHNjcmlwdCB0byByZXBsYWNlIHlvdXIgYml0bWFwIGljb25zIHdpdGggaW5saW5lIFNWR3Mgd2l0aCBiaXRtYXAgZmFsbGJhY2sgYnVpbHQgaW4nLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc3ZnLXBsZWFzZS8nLFxuICAgICAgICB0YWdzOiBbJ3N2ZycsICdqYXZhc2NyaXB0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnI0ZhdjUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1doYXQgYXJlIHlvdXIgZml2ZSBtb3N0IGltcG9ydGFudCBpdGVtcz8nLFxuICAgICAgICB1cmw6ICdodHRwOi8vZmF2NS5jby8nLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1R3YWRsaWIhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBZC1saWIgeW91ciB0d2VldHMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5jb20vdHdhZGxpYi8nLFxuICAgICAgICB0YWdzOiBbJ2phdmFzY3JpcHQnLCAnY3NzJywgJ2NvbXBldGl0aW9uJywgJ3R3aXR0ZXInLCAnMTBrJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmxpc3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JlYXV0aWZ1bGx5IGxlYW4sIGlkZWFsIHN0eWxlIHNoZWV0cycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9ibGlzcy8nLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NyYWZ0ZWQgQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHBlcnNvbmFsIGNvbXBpbGF0aW9uIG9mIENTUyBwcmFjdGljZXMgSSBmb2xsb3cnLFxuICAgICAgICB1cmw6ICdodHRwczovL2dpdGh1Yi5jb20vY2hyaXNuYWdlci9jcmFmdGVkLWNzcycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ2NvZGUgZ3VpZGVsaW5lcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NvY2lhbCBMb2dvcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRG93bmxvYWQgb2ZmaWNpYWwgc29jaWFsIGxvZ29zJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuY29tL3NvY2lhbC1sb2dvcy8nLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NocmlzbmFnZXIuY29tIHYxJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdPcmlnaW5zJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTEwODA4MTM1NjA2L2h0dHA6Ly9jaHJpc25hZ2VyLmNvbS9wb3J0Zm9saW8vI2NocmlzbmFnZXItdjEnLFxuICAgICAgICB0YWdzOiBbJ3NpdGUnLCAnaHRtbCcsICdjc3MnLCAnamF2YXNjcmlwdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NocmlzbmFnZXIuY29tIHYyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYXJlIHRvIHJlbWluaXNjZT8nLFxuICAgICAgICB1cmw6ICdodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMTA4MDkwODU5NTEvaHR0cDovL2NocmlzbmFnZXIuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnc2l0ZScsICdodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2hyaXNuYWdlci5jb20gdjMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0l0ZXJhdGUnLFxuICAgICAgICB1cmw6ICdodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNjEwMDExODIwMTMvaHR0cDovL2NocmlzbmFnZXIuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnc2l0ZScsICdodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVuIFRob21zb24gUGhvdG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0F3d3dhcmRzIFNpdGUgb2YgdGhlIERheScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmF3d3dhcmRzLmNvbS9zaXRlcy9iZW4tdGhvbXNvbi1waG90b2dyYXBoeScsXG4gICAgICAgIHRhZ3M6IFsnc2l0ZScsICdodG1sJywgJ2NzcycsICdicmFuZGluZycsICdsb2dvJywgJ3V4JywgJ3Jlc2VhcmNoJywgJ3VpJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVG90YWxseSBGcmVzaCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRXhwZXJpbWVudGFsIENTUzMgZGVzaWduIGZlYXR1cmVkIG9uIFNtYXNoaW5nIE1hZ2F6aW5lJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuc21hc2hpbmdtYWdhemluZS5jb20vMjAxMC8wNy9jc3MzLWRlc2lnbi1jb250ZXN0LXJlc3VsdHMvJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnY29tcGV0aXRpb24nXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDZW50ZXIgYW5kIGNyb3AgaW1hZ2VzIHdpdGggYSBzaW5nbGUgbGluZSBvZiBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE5IEphbiAyMDE1JyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXNwb2tlIFNWRyBSZWZlcmVuY2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIzIE1heSAyMDE0JyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnc3ZnJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbmFsb2ctc3R5bGUgTEVEIGNsb2NrIGNvbmNlcHQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI1IE1hciAyMDE0JyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTaW1wbGUgdmVydGljYWwgY2VudGVyaW5nIHdpdGggQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcxMCBKYW4gMjAxNCcsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTllDIFN1YndheSBMaW5lcyByZWltYWdpbmVkIHdpdGggbG9uZyBzaGFkb3cgZGVzaWduJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyOSBKdW4gMjAxMycsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVGltZS1iYXNlZCBtZWRpYSBxdWVyaWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyNSBNYXIgMjAxMycsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnSHVlIGJ1bXAgd2l0aCBTYXNzIEBmb3IgY29udHJvbCBkaXJlY3RpdmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE3IEphbiAyMDEzJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdEaXNwbGF5IGljb25zIHdpdGggY3VzdG9tIGRhdGEtYXR0cmlidXRlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjEgRGVjIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NpcmNsZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE5IERlYyAyMDEyJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdWaWRlbyBhbmQgYXVkaW8gaW4gQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcwNCBEZWMgMjAxMicsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTmF0dXJhbCBjdXJ2ZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA4IE5vdiAyMDEyJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNeSBpbml0aWFscycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjMgT2N0IDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RvdWNoYWJsZSB0ZXh0dXJlcyB3aXRoIENTUyAtIGNhbiB5b3UgZmVlbCBtZT8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE4IE9jdCAyMDEyJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdGdXJ0aGVyIHNpbXBsaWZpZWQgaGV4Y29kZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE4IFNlcCAyMDEyJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCb3ggc2l6aW5nIGZvciBwc2V1ZG8gZWxlbWVudHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA5IFNlcCAyMDEyJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbiBFdmVudCBBcGFydCBhbmQgYSBEZXNpZ25lcuKAmXMgVmlldyBvZiB0aGUgV2ViJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBTZXAgMjAxMScsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ1NTMyA6OnNlbGVjdGlvbiBiYWNrZ3JvdW5kIGNvbG9yIHRyaWNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcwOSBTZXAgMjAxMScsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2hyaXMgTmFnZXIgMjAxMiAoUmVzcG9uc2l2ZSBEZXNpZ24pJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcxOCBBdWcgMjAxMScsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2hyaXNOYWdlci5jb20gdjIgaXMgbGl2ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTIgSnVuIDIwMTEnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufVxuXG5jb25zdCBTb2NpYWwgPSAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPGEgaHJlZj1cIlwiPlR3aXR0ZXI8L2E+XG4gICAgPGEgaHJlZj1cIlwiPkdpdGh1YjwvYT5cbiAgICA8YSBocmVmPVwiXCI+TGlua2VkSW48L2E+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pXG5cbmNvbnN0IFRhZyA9ICh7bGFiZWx9KSA9PiA8aT57bGFiZWx9PC9pPlxuXG5jb25zdCBJbnRybyA9ICh7ZGF0YX0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2PlxuICAgICAgPGI+e2RhdGEubG9nb308L2I+XG4gICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlN0dWZmIEkgZW5qb3k8L2gyPlxuICAgICAgICB7ZGF0YS5za2lsbHMubWFwKChza2lsbCwgaW5kZXgpID0+IDxUYWcga2V5PXtpbmRleH0gbGFiZWw9e3NraWxsfSAvPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTb2NpYWwgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgfVxuXG4gICAgICBiIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICBmb250LWZhbWlseTogRnV0dXJhO1xuICAgICAgfVxuXG4gICAgICBkaXYgPiBkaXYge1xuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9oZWFkZXI+XG4pXG5cbmNvbnN0IFNlY3Rpb24gPSAoe2RhdGF9KSA9PiAoXG4gIDxzZWN0aW9uIGlkPVwiZW50cmllc1wiPlxuICAgIDxoMT48YSBocmVmPXtgIyR7ZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+e2RhdGEubmFtZX08L2E+PC9oMT5cblxuICAgIDxociAvPlxuXG4gICAgPHVsPlxuICAgICAge2RhdGEuZW50cmllcy5tYXAoKHt1cmwsIG5hbWUsIGRlc2NyaXB0aW9uLCB0YWdzfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgIDxhIGhyZWY9e3VybH0gc3R5bGU9e3tmb250RmFtaWx5OiB0YWdzLmluZGV4T2YoJ3Bvc3QnKSAhPT0gLTEgPyAnR2VvcmdpYSwgc2VyaWYnIDogdGFncy5pbmRleE9mKCdqb2InKSAhPT0gLTEgPyAnaW5oZXJpdCcgOiAnbW9ub3NwYWNlJ319PlxuICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XG4gICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIHt0YWdzICYmIHRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiA8VGFnIGtleT17aW5kZXh9IGxhYmVsPXt0YWd9IC8+KX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwZW0pIHtcbiAgICAgICAgdWwge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTFyZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGgxID4gYTpob3Zlcjo6YWZ0ZXIsXG4gICAgICBoMSA+IGE6Zm9jdXM6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgI1wiO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIGxpIHtcbiAgICAgICAgLyogbWFyZ2luLWJvdHRvbTogNHJlbTsgKi9cbiAgICAgIH1cblxuICAgICAgbGkgPiBhIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1dnc7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9zZWN0aW9uPlxuKVxuXG5jb25zdCBPdXRybyA9ICgpID0+IChcbiAgPGZvb3Rlcj5cbiAgICA8ZGl2PlxuICAgICAgPFNvY2lhbCAvPlxuICAgICAgPHA+XG4gICAgICAgIDxzbWFsbD4mY29weTsge3llYXJ9IENocmlzIE5hZ2VyICZtaWRkb3Q7IEJ1aWx0IGluIHZpbSB3aXRoIG5leHQuanMuPC9zbWFsbD5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DaHJpcyBOYWdlcjwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8SW50cm8gZGF0YT17ZGF0YS5pbnRyb30gLz5cbiAgICA8bWFpbj5cbiAgICAgIDxTZWN0aW9uIGRhdGE9e2RhdGEucHJvamVjdHN9IC8+XG4gICAgICA8U2VjdGlvbiBkYXRhPXtkYXRhLmNhcmVlcn0gLz5cbiAgICA8L21haW4+XG4gICAgPE91dHJvIC8+XG4gICAgPHN0eWxlPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiAxMDAlLzEuNSBCbGlua01hY1N5c3RlbUZvbnQ7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlcixcbiAgICAgIHNlY3Rpb24sXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgfVxuXG4gICAgICBoZWFkZXIgPiBkaXYsXG4gICAgICBzZWN0aW9uID4gZGl2LFxuICAgICAgZm9vdGVyID4gZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MGVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICAhY29sb3I6ICNmMDY7XG4gICAgICAgICFiYWNrZ3JvdW5kLWNvbG9yOiAjMGNmO1xuICAgICAgfVxuXG4gICAgICBociB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB0cmFuc3BhcmVudCA0cHgsICMwMDAgNXB4LCB0cmFuc3BhcmVudCAwKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNHB4LCAjMDAwIDVweCwgdHJhbnNwYXJlbnQgMCk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxM3B4IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIsXG4gICAgICBhOmZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwY2Y7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

var Outro = function Outro() {
  return _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    }
  }, _react2.default.createElement(Social, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    }
  }, _react2.default.createElement('small', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    }
  }, '\xA9 ', year, ' Chris Nager \xB7 Built in vim with next.js.'))));
};

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    }
  }, 'Chris Nager'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    }
  })), _react2.default.createElement(Intro, { data: data.intro, __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    }
  }), _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    }
  }, _react2.default.createElement(Section, { data: data.projects, __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    }
  }), _react2.default.createElement(Section, { data: data.career, __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    }
  })), _react2.default.createElement(Outro, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    }
  }, '\n      body {\n        margin: 0;\n        font: 100%/1.5 BlinkMacSystemFont;\n      }\n\n      header,\n      section,\n      footer {\n        padding: 2rem;\n      }\n\n      header > div,\n      section > div,\n      footer > div {\n        max-width: 60em;\n        margin-right: auto;\n        margin-left: auto;\n      }\n\n      a {\n        text-decoration: none;\n        color: inherit;\n      }\n\n      a:hover,\n      a:focus {\n        !color: #f06;\n        !background-color: #0cf;\n      }\n\n      hr {\n        border: none;\n        height: 7px;\n        background: linear-gradient(-135deg, transparent 4px, #000 5px, transparent 0), linear-gradient(135deg, transparent 4px, #000 5px, transparent 0);\n        background-repeat: repeat-x;\n        background-size: 13px 10px;\n      }\n\n      i {\n        margin-right: .5rem;\n        font-size: .75rem;\n        color: #888;\n      }\n\n      a:hover,\n      a:focus {\n        text-decoration: underline;\n        color: red;\n        background-color: #0cf;\n      }\n    '));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/chrisnager/Dropbox/Chris/Projects/chrisnager.com/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/chrisnager/Dropbox/Chris/Projects/chrisnager.com/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OztBQUVQLElBQU0sT0FBTyxJQUFJLE9BQU87O0FBRXhCLElBQU07O1VBR0Y7VUFDQTtpQkFDQTtZQUFRLENBQ04sc0JBQ0ssT0FBTyxJQUNaLFFBQ0EsT0FDQSxhQUNBLDhCQUNBLGtCQUNBLFdBQ0EsUUFDQSxTQUNBLGdCQUNBLFNBQ0EsZ0JBQ0EsT0FDQSxRQUNBLE9BQ0EsV0FDQSxPQUNBLFdBQ0EsUUFDQSxPQUNBLGVBQ0EsTUFDQSxNQUNBLFlBQ0EsU0FDQSxrQkFDQSxjQUlKO0FBbkNFOztVQXFDQTthQUVGO0FBSEU7O1VBS0E7O1lBR0k7bUJBQ0E7V0FDQTtZQUFNLENBQUM7QUFIUCxLQUZLO1lBU0w7bUJBQ0E7V0FDQTtZQUFNLENBQUM7QUFIUDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUlaO0FBUE07QUFmSjs7VUF3QkE7O1lBR0k7bUJBQ0E7V0FDQTtZQUFNLENBQUMsY0FBYztBQUhyQixLQUZLO1lBU0w7bUJBQ0E7V0FDQTtZQUFNLENBQUM7QUFIUDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDO0FBSFA7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQztBQUhQO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUMsVUFBVTtBQUhqQjtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDO0FBSFA7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQyxXQUFXLGNBQWM7QUFIaEM7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQyxPQUFPLFVBQVUsYUFBYSxPQUFPO0FBSDVDO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUMsT0FBTyxjQUFjO0FBSDVCO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUMsT0FBTztBQUhkO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUMsT0FBTyxTQUFTO0FBSHZCO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUM7QUFIUDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLFFBQVE7QUFIZjtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU8sVUFBVTtBQUh4QjtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDO0FBSFA7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQyxTQUFTO0FBSGhCO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUM7QUFIUDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLFNBQVM7QUFIaEI7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQyxTQUFTLE9BQU87QUFIdkI7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQyxPQUFPO0FBSGQ7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQztBQUhQO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUMsY0FBYyxPQUFPLGVBQWUsV0FBVztBQUh0RDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDO0FBSFA7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQyxPQUFPO0FBSGQ7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQztBQUhQO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUMsUUFBUSxRQUFRLE9BQU87QUFIOUI7WUFPQTttQkFDQTtXQUNBO1lBQU0sQ0FBQyxRQUFRLFFBQVEsT0FBTztBQUg5QjtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLFFBQVEsUUFBUSxPQUFPO0FBSDlCO1lBT0E7bUJBQ0E7V0FDQTtZQUFNLENBQUMsUUFBUSxRQUFRLE9BQU8sWUFBWSxRQUFRLE1BQU0sWUFBWTtBQUhwRTtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtZQU9BO21CQUNBO1dBQ0E7WUFBTSxDQUFDLE9BQU87QUFIZDtBQXpTSjtBQWhFRjs7QUFrWEYsSUFBTSxTQUFTO3lCQUNiO2dCQUFBOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0UscUJBQUcsTUFBSyxnQkFBUjs7Z0JBQUE7a0JBQUE7QUFBQTtLQUNBLGlEQUFHLE1BQUssZ0JBQVI7O2dCQUFBO2tCQUFBO0FBQUE7S0FDQSxnREFBRyxNQUFLLGdCQUFSOztnQkFBQTtrQkFBQTtBQUFBO0tBQUE7YUFIRjtTQUFBO0FBQUE7QUFERjs7QUFjQSxJQUFNLE1BQU07TUFBRTt5QkFBVzs7Z0JBQUE7a0JBQUk7QUFBSjtBQUFBO0FBQXpCOztBQUVBLElBQU0sUUFBUTtNQUFFO3lCQUNkO2dCQUFBOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0U7Z0JBQUE7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRTtnQkFBQTs7Z0JBQUE7a0JBQUk7QUFBSjtBQUFBLFVBQ0E7Z0JBQUE7O2dCQUFBO2tCQUFLO0FBQUw7QUFBQSxVQUNBO2dCQUFBOztnQkFBQTtrQkFBSTtBQUFKO0FBQUEsVUFDQTtnQkFBQTs7Z0JBQUE7a0JBQ0U7QUFERjtBQUFBLHFCQUNFO2dCQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FDQyx1QkFBSyxPQUFPLElBQUksVUFBQyxPQUFPLE9BQVI7eUNBQW1CLE9BQUksS0FBSyxPQUFPLE9BQU87a0JBQXhCO29CQUFBO0FBQUE7S0FBQTtBQUVyQyxxQ0FBQzs7Z0JBQUQ7a0JBQUE7QUFBQTtBQUFBO2FBVEo7U0FBQTtBQUFBO0FBREY7O0FBZ0NBLElBQU0sVUFBVTtNQUFFO3lCQUNoQiwyQkFBUyxJQUFHLHVCQUFaOztnQkFBQTtrQkFDRTtBQURGO0dBQUEsa0JBQ0U7Z0JBQUE7O2dCQUFBO2tCQUFJO0FBQUo7QUFBQSxxQkFBSSxxQkFBRyxZQUFVLEtBQUssS0FBSywyQkFBdkI7O2dCQUFBO2tCQUF5QztBQUF6QztVQUVKO2dCQUFBOztnQkFBQTtrQkFFQTtBQUZBO0FBQUEsc0JBRUE7Z0JBQUE7O2dCQUFBO2tCQUNHO0FBREg7QUFBQSxVQUNRLFFBQVEsSUFBSSxpQkFBaUMsT0FBakM7UUFBRTtRQUFLO1FBQU07UUFBYTsyQkFDMUMsc0JBQUksS0FBSyxtQkFBVDs7a0JBQUE7b0JBQ0U7QUFERjtLQUFBLGtCQUNFLHFCQUFHLE1BQU0sS0FBSyxPQUFPLEVBQUMsWUFBWSxLQUFLLFFBQVEsWUFBWSxDQUFDLElBQUksbUJBQW1CLEtBQUssUUFBUSxXQUFXLENBQUMsSUFBSSxZQUFZLDJCQUE1SDs7a0JBQUE7b0JBQ0U7QUFERjt1QkFDRTtrQkFBQTs7a0JBQUE7b0JBQUs7QUFBTDtBQUFBLE9BQ0E7a0JBQUE7O2tCQUFBO29CQUFJO0FBQUo7QUFBQSxPQUNELDJCQUFhLElBQUksVUFBQyxLQUFLLE9BQU47MkNBQWlCLE9BQUksS0FBSyxPQUFPLE9BQU87b0JBQXhCO3NCQUFBO0FBQUE7T0FBQTtBQUF6QjtBQUxaO2FBTkw7U0FBQTtBQUFBO0FBREY7O0FBNEVBLElBQU0sUUFBUTt5QkFDWjs7Z0JBQUE7a0JBQ0U7QUFERjtBQUFBLHFCQUNFOztnQkFBQTtrQkFDRTtBQURGO0FBQUEsbUNBQ0c7O2dCQUFEO2tCQUNBO0FBREE7QUFBQSxzQkFDQTs7Z0JBQUE7a0JBQ0U7QUFERjtBQUFBLHFCQUNFOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FBZSxTQUFmO0FBTVI7O2tCQUFlO3lCQUNiOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0c7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSxxQkFDRTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQ0Esd0RBQU0sU0FBUTtnQkFBZDtrQkFDQTtBQURBOzhDQUNNLE1BQUssWUFBVyxTQUFRO2dCQUE5QjtrQkFFRjtBQUZFO3FDQUVELFNBQU0sTUFBTSxLQUFLO2dCQUFsQjtrQkFDQTtBQURBO3NCQUNBOztnQkFBQTtrQkFDRTtBQURGO0FBQUEsbUNBQ0csV0FBUSxNQUFNLEtBQUs7Z0JBQXBCO2tCQUNBO0FBREE7b0NBQ0MsV0FBUSxNQUFNLEtBQUs7Z0JBQXBCO2tCQUVGO0FBRkU7cUNBRUQ7O2dCQUFEO2tCQUNBO0FBREE7QUFBQSxzQkFDQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBO0FBYkosRSIsImZpbGUiOiI1LjdkN2MyODZmNzNkNDk5YmExYjlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuY29uc3QgZGF0YSA9IHtcbiAgaW50cm86IHtcbiAgICBsb2dvOiAnQ04nLFxuICAgIG5hbWU6ICdDaHJpcyBOYWdlcicsXG4gICAgZGVzY3JpcHRpb246ICdNaW5pbWFsaXN0IGRldmVsb3Blci1kZXNpZ25lciBpbiBCcm9va2x5biwgTlknLFxuICAgIHNraWxsczogW1xuICAgICAgJ2phdmFzY3JpcHQnLFxuICAgICAgYGVzJHt5ZWFyICsgMX1gLFxuICAgICAgJ25vZGUnLFxuICAgICAgJ2NzcycsXG4gICAgICAnY3NzLWluLWpzJyxcbiAgICAgICdzaW5nbGUtcHVycG9zZSBjc3MgY2xhc3NlcycsXG4gICAgICAnY3NzLWFuaW1hdGlvbnMnLFxuICAgICAgJ3Bvc3Rjc3MnLFxuICAgICAgJ2h0bWwnLFxuICAgICAgJ3JlYWN0JyxcbiAgICAgICdyZWFjdCBuYXRpdmUnLFxuICAgICAgJ3JlZHV4JyxcbiAgICAgICdyZWFjdC1yb3V0ZXInLFxuICAgICAgJ2pzeCcsXG4gICAgICAnamVzdCcsXG4gICAgICAnZ2l0JyxcbiAgICAgICduZXh0LmpzJyxcbiAgICAgICdub3cnLFxuICAgICAgJ3dlYnBhY2snLFxuICAgICAgJ2d1bHAnLFxuICAgICAgJ3ZpbScsXG4gICAgICAnbW9iaWxlIGFwcHMnLFxuICAgICAgJ3V4JyxcbiAgICAgICd1aScsXG4gICAgICAnYnJhbmRpbmcnLFxuICAgICAgJ2ljb25zJyxcbiAgICAgICdkZXNpZ24gc3lzdGVtcycsXG4gICAgICAndHlwb2dyYXBoeScsXG4gICAgICAnYWNjZXNzaWJpbGl0eScsXG4gICAgXSxcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBlbnRyaWVzOiBbXSxcbiAgfSxcbiAgY2FyZWVyOiB7XG4gICAgbmFtZTogJ0NhcmVlcicsXG4gICAgZW50cmllczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnSUVYJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDE1IC0gcHJlc2VudCcsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vaWV4dHJhZGluZy5jb20vJyxcbiAgICAgICAgdGFnczogWydqb2InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDExIC0gMjAxNScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnNhbGVzZm9yY2UuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnam9iJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTHVja2llJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMDEwIC0yMDExJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5sdWNraWUuY29tLycsXG4gICAgICAgIHRhZ3M6IFsnam9iJ10sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHByb2plY3RzOiB7XG4gICAgbmFtZTogJ1dvcmtzJyxcbiAgICBlbnRyaWVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICc+IFNpZ251bSBtYWpvcml0YXRpcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBzaWRlLXNjcm9sbGluZyBnYW1lIGJ1aWx0IGluIGEgc2luZ2xlIHN0cmluZycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9iaXQubHkvc21ham9yJyxcbiAgICAgICAgdGFnczogWydqYXZhc2NyaXB0JywgJ2dhbWUnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIDQsMDk2IHNob3J0aGFuZCBoZXhjb2RlcycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vY2hyaXNuYWdlci5naXRodWIuaW8vaGV4Y29kZXMvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3Nob3J0LWNvbG9yLW5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDUgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnc2ltcGxlLXBhbGV0dGUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Egc2ltcGxlIGNvbG9yIHBhbGV0dGUnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2ltcGxlLXBhbGV0dGUvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3VuZ3JpZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHNpbXBsZXN0IHJlc3BvbnNpdmUgY3NzIGdyaWQnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW5ncmlkLycsXG4gICAgICAgIHRhZ3M6IFsnbGF5b3V0JywgJ2dyaWQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwczovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1kZWJ1Zy5jc3MvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdFbW9vbmppJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIGNoYXRib3QnLFxuICAgICAgICB1cmw6ICdodHRwczovL2JpdC5kby9lbW9vbmppJyxcbiAgICAgICAgdGFnczogWydjaGF0Ym90JywgJ2phdmFzY3JpcHQnLCAnZmlyZWJhc2UnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdHaXZlIFxcJ25cXCcgR28nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgY3VyYXRlZCBnYWxsZXJ5IG9mIERyaWJiYmxlIHNob3RzIHJld29ya2VkIGFzIGludGVyYWN0aXZlIENvZGVQZW4gcGVucycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9naXZlLW4tZ28uY28vJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnZGVzaWduJywgJ2NvbW11bml0eScsICdhcHAnLCAnc2l0ZSddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NoZWVyIG1lIHVwJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdGdW4sIGN1c3RvbSBwYWdlcyBpbiBzZWNvbmRzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NoZWVybWV1cC5pby8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdqYXZhc2NyaXB0JywgJ2dpZiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3VuZ3JpZCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndGhlIHNpbXBsZXN0IHJlc3BvbnNpdmUgY3NzIGdyaWQnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW5ncmlkLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ2dyaWQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdVbnRpbCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQXJlIHdlIHRoZXJlIHlldD8nLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vdW50aWwvJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncmVhY3QnLCAnamF2YXNjcmlwdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1VOIERpc2FzdGVyIFJlc3BvbnNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDdXJyZW50bHkgd29ya2luZyB3aXRoIHRoZSBIYXJ2YXJkIEh1bWFuaXRhcmlhbiBJbml0aWF0aXZlIG9uIGEgZGlzYXN0ZXIgYW5kIGh1bWFuaXRhcmlhbiByZXNwb25zZSBzdXJ2ZXkgYnVpbGRpbmcgYXBwIHRvIGJlIHVzZWQgYnkgdGhlIFVuaXRlZCBOYXRpb25zJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly92aW1lby5jb20vNzE5MTE0OTcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0phdW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMZXQgeW91ciBmcmllbmRzIGJlIHlvdXIgY2l0eSBndWlkZXMuIChUZWNoQ3J1bmNoIERpc3J1cHQgSGFja2F0aG9uIGFwcCBlbnRyeSknLFxuICAgICAgICB1cmw6ICdodHRwczovL2Rpc3J1cHRueWhhY2thdGhvbi5kZXZwb3N0LmNvbS9zdWJtaXNzaW9ucy8yMzUxNC1qYXVudCcsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ2hhY2thdGhvbiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0N1cnNvcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCBhdmFpbGFibGUgY3Vyc29ycycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9jdXJzb3JzLycsXG4gICAgICAgIHRhZ3M6IFsnaHRtbCcsICdjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vc2ltcGxlLWRlYnVnLmNzcy8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdsYXlvdXQnLCAnZGVidWdnZXInXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaW1wbGUgcGFsZXR0ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBzaW1wbGUgY29sb3IgcGFsZXR0ZScsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaW1wbGUtcGFsZXR0ZS8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAn4pyCIHNob3J0IGNvbG9yIG5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDQgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzLicsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJywgJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hleGNvZGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgcG9zc2libGUgdGhyZWUgZGlnaXQgaGV4Y29kZXMnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vaGV4Y29kZXMvJyxcbiAgICAgICAgdGFnczogWydjb2xvciddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RpbnkgZ29vZ2xlIGZvbnRzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTdHJpcCBkb3duIHlvdXIgZ29vZ2xlIGZvbnRzIHNpZ25pZmljYW50bHkgdG8gb25seSBpbmNsdWRlIHRoZSBjaGFyYWN0ZXJzIHlvdVxcJ3JlIGFjdHVhbGx5IHVzaW5nJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3RpbnktZ29vZ2xlLWZvbnRzLycsXG4gICAgICAgIHRhZ3M6IFsnZm9udHMnLCAnamF2YXNjcmlwdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JpcnRoZGF5IGhleCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmluZCB5b3VyIGJpcnRoZGF5IGhleGNvZGUnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5naXRodWIuaW8vYmlydGhkYXktaGV4LycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTVkcgUGxlYXNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdTaW1wbGUgc2NyaXB0IHRvIHJlcGxhY2UgeW91ciBiaXRtYXAgaWNvbnMgd2l0aCBpbmxpbmUgU1ZHcyB3aXRoIGJpdG1hcCBmYWxsYmFjayBidWlsdCBpbicsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zdmctcGxlYXNlLycsXG4gICAgICAgIHRhZ3M6IFsnc3ZnJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICcjRmF2NScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnV2hhdCBhcmUgeW91ciBmaXZlIG1vc3QgaW1wb3J0YW50IGl0ZW1zPycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9mYXY1LmNvLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVHdhZGxpYiEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FkLWxpYiB5b3VyIHR3ZWV0cycsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmNvbS90d2FkbGliLycsXG4gICAgICAgIHRhZ3M6IFsnamF2YXNjcmlwdCcsICdjc3MnLCAnY29tcGV0aXRpb24nLCAndHdpdHRlcicsICcxMGsnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCbGlzcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQmVhdXRpZnVsbHkgbGVhbiwgaWRlYWwgc3R5bGUgc2hlZXRzJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL2JsaXNzLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ3JhZnRlZCBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcGVyc29uYWwgY29tcGlsYXRpb24gb2YgQ1NTIHByYWN0aWNlcyBJIGZvbGxvdycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc25hZ2VyL2NyYWZ0ZWQtY3NzJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAnY29kZSBndWlkZWxpbmVzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU29jaWFsIExvZ29zJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEb3dubG9hZCBvZmZpY2lhbCBzb2NpYWwgbG9nb3MnLFxuICAgICAgICB1cmw6ICdodHRwOi8vY2hyaXNuYWdlci5jb20vc29jaWFsLWxvZ29zLycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2hyaXNuYWdlci5jb20gdjEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ09yaWdpbnMnLFxuICAgICAgICB1cmw6ICdodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMTA4MDgxMzU2MDYvaHR0cDovL2NocmlzbmFnZXIuY29tL3BvcnRmb2xpby8jY2hyaXNuYWdlci12MScsXG4gICAgICAgIHRhZ3M6IFsnc2l0ZScsICdodG1sJywgJ2NzcycsICdqYXZhc2NyaXB0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnY2hyaXNuYWdlci5jb20gdjInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NhcmUgdG8gcmVtaW5pc2NlPycsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDExMDgwOTA4NTk1MS9odHRwOi8vY2hyaXNuYWdlci5jb20vJyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdjaHJpc25hZ2VyLmNvbSB2MycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSXRlcmF0ZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE2MTAwMTE4MjAxMy9odHRwOi8vY2hyaXNuYWdlci5jb20vJyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2phdmFzY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZW4gVGhvbXNvbiBQaG90bycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQXd3d2FyZHMgU2l0ZSBvZiB0aGUgRGF5JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYXd3d2FyZHMuY29tL3NpdGVzL2Jlbi10aG9tc29uLXBob3RvZ3JhcGh5JyxcbiAgICAgICAgdGFnczogWydzaXRlJywgJ2h0bWwnLCAnY3NzJywgJ2JyYW5kaW5nJywgJ2xvZ28nLCAndXgnLCAncmVzZWFyY2gnLCAndWknXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUb3RhbGx5IEZyZXNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFeHBlcmltZW50YWwgQ1NTMyBkZXNpZ24gZmVhdHVyZWQgb24gU21hc2hpbmcgTWFnYXppbmUnLFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy5zbWFzaGluZ21hZ2F6aW5lLmNvbS8yMDEwLzA3L2NzczMtZGVzaWduLWNvbnRlc3QtcmVzdWx0cy8nLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdjb21wZXRpdGlvbiddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NlbnRlciBhbmQgY3JvcCBpbWFnZXMgd2l0aCBhIHNpbmdsZSBsaW5lIG9mIENTUycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgSmFuIDIwMTUnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Jlc3Bva2UgU1ZHIFJlZmVyZW5jZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjMgTWF5IDIwMTQnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydzdmcnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FuYWxvZy1zdHlsZSBMRUQgY2xvY2sgY29uY2VwdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjUgTWFyIDIwMTQnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NpbXBsZSB2ZXJ0aWNhbCBjZW50ZXJpbmcgd2l0aCBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzEwIEphbiAyMDE0JyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOWUMgU3Vid2F5IExpbmVzIHJlaW1hZ2luZWQgd2l0aCBsb25nIHNoYWRvdyBkZXNpZ24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI5IEp1biAyMDEzJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdUaW1lLWJhc2VkIG1lZGlhIHF1ZXJpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI1IE1hciAyMDEzJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdIdWUgYnVtcCB3aXRoIFNhc3MgQGZvciBjb250cm9sIGRpcmVjdGl2ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTcgSmFuIDIwMTMnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Rpc3BsYXkgaWNvbnMgd2l0aCBjdXN0b20gZGF0YS1hdHRyaWJ1dGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMSBEZWMgMjAxMicsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ2lyY2xlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgRGVjIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1ZpZGVvIGFuZCBhdWRpbyBpbiBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA0IERlYyAyMDEyJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdOYXR1cmFsIGN1cnZlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDggTm92IDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ015IGluaXRpYWxzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBPY3QgMjAxMicsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVG91Y2hhYmxlIHRleHR1cmVzIHdpdGggQ1NTIC0gY2FuIHlvdSBmZWVsIG1lPycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggT2N0IDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Z1cnRoZXIgc2ltcGxpZmllZCBoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JveCBzaXppbmcgZm9yIHBzZXVkbyBlbGVtZW50cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDkgU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgdGFnczogWydjc3MnLCAncG9zdCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0FuIEV2ZW50IEFwYXJ0IGFuZCBhIERlc2lnbmVy4oCZcyBWaWV3IG9mIHRoZSBXZWInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIzIFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDU1MzIDo6c2VsZWN0aW9uIGJhY2tncm91bmQgY29sb3IgdHJpY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA5IFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDaHJpcyBOYWdlciAyMDEyIChSZXNwb25zaXZlIERlc2lnbiknLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE4IEF1ZyAyMDExJyxcbiAgICAgICAgdXJsOiAnIycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJywgJ3Bvc3QnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDaHJpc05hZ2VyLmNvbSB2MiBpcyBsaXZlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcxMiBKdW4gMjAxMScsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICB0YWdzOiBbJ2NzcycsICdwb3N0J10sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmNvbnN0IFNvY2lhbCA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8YSBocmVmPVwiXCI+VHdpdHRlcjwvYT5cbiAgICA8YSBocmVmPVwiXCI+R2l0aHViPC9hPlxuICAgIDxhIGhyZWY9XCJcIj5MaW5rZWRJbjwvYT5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbilcblxuY29uc3QgVGFnID0gKHtsYWJlbH0pID0+IDxpPntsYWJlbH08L2k+XG5cbmNvbnN0IEludHJvID0gKHtkYXRhfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXY+XG4gICAgICA8Yj57ZGF0YS5sb2dvfTwvYj5cbiAgICAgIDxoMT57ZGF0YS5uYW1lfTwvaDE+XG4gICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+U3R1ZmYgSSBlbmpveTwvaDI+XG4gICAgICAgIHtkYXRhLnNraWxscy5tYXAoKHNraWxsLCBpbmRleCkgPT4gPFRhZyBrZXk9e2luZGV4fSBsYWJlbD17c2tpbGx9IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPFNvY2lhbCAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIGIge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmE7XG4gICAgICB9XG5cbiAgICAgIGRpdiA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuY29uc3QgU2VjdGlvbiA9ICh7ZGF0YX0pID0+IChcbiAgPHNlY3Rpb24gaWQ9XCJlbnRyaWVzXCI+XG4gICAgPGgxPjxhIGhyZWY9e2AjJHtkYXRhLm5hbWUudG9Mb3dlckNhc2UoKX1gfT57ZGF0YS5uYW1lfTwvYT48L2gxPlxuXG4gICAgPGhyIC8+XG5cbiAgICA8dWw+XG4gICAgICB7ZGF0YS5lbnRyaWVzLm1hcCgoe3VybCwgbmFtZSwgZGVzY3JpcHRpb24sIHRhZ3N9LCBpbmRleCkgPT4gKFxuICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgPGEgaHJlZj17dXJsfSBzdHlsZT17e2ZvbnRGYW1pbHk6IHRhZ3MuaW5kZXhPZigncG9zdCcpICE9PSAtMSA/ICdHZW9yZ2lhLCBzZXJpZicgOiB0YWdzLmluZGV4T2YoJ2pvYicpICE9PSAtMSA/ICdpbmhlcml0JyA6ICdtb25vc3BhY2UnfX0+XG4gICAgICAgICAgICA8aDI+e25hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAge3RhZ3MgJiYgdGFncy5tYXAoKHRhZywgaW5kZXgpID0+IDxUYWcga2V5PXtpbmRleH0gbGFiZWw9e3RhZ30gLz4pfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cblxuICAgICAgaDEgPiBhOmhvdmVyOjphZnRlcixcbiAgICAgIGgxID4gYTpmb2N1czo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAjXCI7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiA0cmVtOyAqL1xuICAgICAgfVxuXG4gICAgICBsaSA+IGEge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMTV2dztcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NlY3Rpb24+XG4pXG5cbmNvbnN0IE91dHJvID0gKCkgPT4gKFxuICA8Zm9vdGVyPlxuICAgIDxkaXY+XG4gICAgICA8U29jaWFsIC8+XG4gICAgICA8cD5cbiAgICAgICAgPHNtYWxsPiZjb3B5OyB7eWVhcn0gQ2hyaXMgTmFnZXIgJm1pZGRvdDsgQnVpbHQgaW4gdmltIHdpdGggbmV4dC5qcy48L3NtYWxsPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkNocmlzIE5hZ2VyPC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxJbnRybyBkYXRhPXtkYXRhLmludHJvfSAvPlxuICAgIDxtYWluPlxuICAgICAgPFNlY3Rpb24gZGF0YT17ZGF0YS5wcm9qZWN0c30gLz5cbiAgICAgIDxTZWN0aW9uIGRhdGE9e2RhdGEuY2FyZWVyfSAvPlxuICAgIDwvbWFpbj5cbiAgICA8T3V0cm8gLz5cbiAgICA8c3R5bGU+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQ6IDEwMCUvMS41IEJsaW5rTWFjU3lzdGVtRm9udDtcbiAgICAgIH1cblxuICAgICAgaGVhZGVyLFxuICAgICAgc2VjdGlvbixcbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGhlYWRlciA+IGRpdixcbiAgICAgIHNlY3Rpb24gPiBkaXYsXG4gICAgICBmb290ZXIgPiBkaXYge1xuICAgICAgICBtYXgtd2lkdGg6IDYwZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyLFxuICAgICAgYTpmb2N1cyB7XG4gICAgICAgICFjb2xvcjogI2YwNjtcbiAgICAgICAgIWJhY2tncm91bmQtY29sb3I6ICMwY2Y7XG4gICAgICB9XG5cbiAgICAgIGhyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xMzVkZWcsIHRyYW5zcGFyZW50IDRweCwgIzAwMCA1cHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA0cHgsICMwMDAgNXB4LCB0cmFuc3BhcmVudCAwKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEzcHggMTBweDtcbiAgICAgIH1cblxuICAgICAgaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBjZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9