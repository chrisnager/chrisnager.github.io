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
  posts: {
    name: 'Posts',
    entries: [{
      id: 0,
      name: 'Center and crop images with a single line of CSS',
      description: '19 Jan 2015',
      url: '',
      tags: ['css']
    }, {
      id: 1,
      name: 'Bespoke SVG Reference',
      description: '23 May 2014',
      url: '',
      tags: ['css']
    }, {
      id: 2,
      name: 'Analog-style LED clock concept',
      description: '25 Mar 2014',
      url: '',
      tags: ['css']
    }, {
      id: 3,
      name: 'Simple vertical centering with CSS',
      description: '10 Jan 2014',
      url: '',
      tags: ['css']
    }, {
      id: 4,
      name: 'NYC Subway Lines reimagined with long shadow design',
      description: '29 Jun 2013',
      url: '',
      tags: ['css']
    }, {
      id: 5,
      name: 'Time-based media queries',
      description: '25 Mar 2013',
      url: '',
      tags: ['css']
    }, {
      id: 6,
      name: 'Hue bump with Sass @for control directive',
      description: '17 Jan 2013',
      url: '',
      tags: ['css']
    }, {
      id: 7,
      name: 'Display icons with custom data-attributes',
      description: '21 Dec 2012',
      url: '',
      tags: ['css']
    }, {
      id: 8,
      name: 'Circles',
      description: '19 Dec 2012',
      url: '',
      tags: ['css']
    }, {
      id: 9,
      name: 'Video and audio in CSS',
      description: '04 Dec 2012',
      url: '',
      tags: ['css']
    }, {
      id: 10,
      name: 'Natural curves',
      description: '08 Nov 2012',
      url: '',
      tags: ['css']
    }, {
      id: 11,
      name: 'My initials',
      description: '23 Oct 2012',
      url: '',
      tags: ['css']
    }, {
      id: 12,
      name: 'Touchable textures with CSS - can you feel me?',
      description: '18 Oct 2012',
      url: '',
      tags: ['css']
    }, {
      id: 13,
      name: 'Further simplified hexcodes',
      description: '18 Sep 2012',
      url: '',
      tags: ['css']
    }, {
      id: 14,
      name: 'Box sizing for pseudo elements',
      description: '09 Sep 2012',
      url: '',
      tags: ['css']
    }, {
      id: 15,
      name: 'An Event Apart and a Designer’s View of the Web',
      description: '23 Sep 2011',
      url: '',
      tags: ['css']
    }, {
      id: 16,
      name: 'CSS3 ::selection background color trick',
      description: '09 Sep 2011',
      url: '',
      tags: ['css']
    }, {
      id: 17,
      name: 'Chris Nager 2012 (Responsive Design)',
      description: '18 Aug 2011',
      url: '',
      tags: ['css']
    }, {
      id: 18,
      name: 'ChrisNager.com v2 is live',
      description: '12 Jun 2011',
      url: '',
      tags: ['css']
    }]
  },
  projects: {
    name: 'Projects',
    entries: [{
      id: 0,
      name: 'hexcodes',
      description: 'All 4,096 shorthand hexcodes',
      url: 'https://chrisnager.github.io/hexcodes/',
      tags: ['color']
    }, {
      id: 1,
      name: 'short-color-names',
      description: 'The 45 CSS color names that are as short as or shorter than their corresponding hexcodes',
      url: 'https://chrisnager.github.io/short-color-names/',
      tags: ['color']
    }, {
      id: 2,
      name: 'simple-palette',
      description: 'A simple color palette',
      url: 'http://chrisnager.github.io/simple-palette/',
      tags: ['color']
    }, {
      id: 3,
      name: 'ungrid',
      description: 'The simplest responsive css grid',
      url: 'http://chrisnager.github.io/ungrid/',
      tags: ['layout', 'grid']
    }, {
      id: 4,
      name: 'simple-debug.css',
      description: 'Debug your layouts with one line of CSS',
      url: 'https://chrisnager.github.io/simple-debug.css/',
      tags: ['layout']
    }, {
      id: 5,
      name: 'Emoonji',
      description: 'A chatbot',
      url: 'https://bit.do/emoonji',
      tags: ['chatbot', '🌝']
    }, {
      id: 6,
      name: 'Give \'n\' Go',
      description: 'A curated gallery of Dribbble shots reworked as interactive CodePen pens',
      url: '',
      tags: ['css']
    }, {
      id: 7,
      name: 'Cheer me up',
      description: 'Fun, custom pages in seconds',
      url: '',
      tags: ['css']
    }, {
      id: 8,
      name: 'ungrid',
      description: 'the simplest responsive css grid',
      url: '',
      tags: ['css']
    }, {
      id: 9,
      name: 'Until',
      description: 'Are we there yet?',
      url: '',
      tags: ['css']
    }, {
      id: 10,
      name: 'UN Disaster Response',
      description: 'Currently working with the Harvard Humanitarian Initiative on a disaster and humanitarian response survey building app to be used by the United Nations',
      url: '',
      tags: ['css']
    }, {
      id: 11,
      name: 'Jaunt',
      description: 'Let your friends be your city guides. (TechCrunch Disrupt Hackathon app entry)',
      url: '',
      tags: ['css']
    }, {
      id: 12,
      name: 'Cursors',
      description: 'All available cursors',
      url: '',
      tags: ['css']
    }, {
      id: 13,
      name: 'simple-debug.css',
      description: 'Debug your layouts with one line of CSS',
      url: '',
      tags: ['css']
    }, {
      id: 14,
      name: 'palette',
      description: 'A simple color palette',
      url: '',
      tags: ['css']
    }, {
      id: 15,
      name: '✂ short color names',
      description: 'The 44 CSS color names that are as short as or shorter than their corresponding hexcodes.',
      url: '',
      tags: ['css']
    }, {
      id: 16,
      name: 'hexcodes',
      description: 'All possible three digit hexcodes',
      url: '',
      tags: ['css']
    }, {
      id: 17,
      name: 'tiny google fonts',
      description: 'Strip down your google fonts significantly to only include the characters you\'re actually using',
      url: '',
      tags: ['css']
    }, {
      id: 18,
      name: 'Birthday hex',
      description: 'Find your birthday hexcode',
      url: '',
      tags: ['css']
    }, {
      id: 19,
      name: 'SVG Please',
      description: 'Simple script to replace your bitmap icons with inline SVGs with bitmap fallback built in',
      url: '',
      tags: ['css']
    }, {
      id: 20,
      name: '#Fav5',
      description: 'What are your five most important items?',
      url: '',
      tags: ['css']
    }, {
      id: 21,
      name: 'Twadlib!',
      description: 'Ad-lib your tweets',
      url: '',
      tags: ['css']
    }, {
      id: 22,
      name: 'Bliss',
      description: 'Beautifully lean, ideal style sheets',
      url: '',
      tags: ['css']
    }, {
      id: 23,
      name: 'Crafted CSS',
      description: 'A personal compilation of CSS practices I follow',
      url: '',
      tags: ['css']
    }, {
      id: 24,
      name: 'Social Logos',
      description: 'Download official social logos',
      url: '',
      tags: ['css']
    }, {
      id: 25,
      name: 'chrisnager.com v2',
      description: 'Care to reminisce?',
      url: '',
      tags: ['css']
    }, {
      id: 26,
      name: 'Ben Thomson Photo',
      description: 'Awwwards Site of the Day',
      url: '',
      tags: ['css']
    }, {
      id: 27,
      name: 'Totally Fresh',
      description: 'Experimental CSS3 design featured on Smashing Magazine',
      url: '',
      tags: ['css']
    }]
  }
};

var Social = function Social() {
  return _react2.default.createElement('nav', {
    'data-jsx': 1669409179,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    }
  }, _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    }
  }, 'Twitter'), _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    }
  }, 'Github'), _react2.default.createElement('a', { href: '', 'data-jsx': 1669409179,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    }
  }, 'LinkedIn'), _react2.default.createElement(_style2.default, {
    styleId: 1669409179,
    css: 'a[data-jsx="1669409179"] {margin-right: 1rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBZZ0IsQUFDUCwwQkFDa0IsbUJBQ3BCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc25hZ2VyL0Ryb3Bib3gvQ2hyaXMvUHJvamVjdHMvY2hyaXNuYWdlci5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuY29uc3QgZGF0YSA9IHtcbiAgaW50cm86IHtcbiAgICBsb2dvOiAnQ04nLFxuICAgIG5hbWU6ICdDaHJpcyBOYWdlcicsXG4gICAgZGVzY3JpcHRpb246ICdNaW5pbWFsaXN0IGRldmVsb3Blci1kZXNpZ25lciBpbiBCcm9va2x5biwgTlknLFxuICAgIHNraWxsczogW1xuICAgICAgJ2phdmFzY3JpcHQnLFxuICAgICAgYGVzJHt5ZWFyICsgMX1gLFxuICAgICAgJ25vZGUnLFxuICAgICAgJ2NzcycsXG4gICAgICAnY3NzLWluLWpzJyxcbiAgICAgICdzaW5nbGUtcHVycG9zZSBjc3MgY2xhc3NlcycsXG4gICAgICAnY3NzLWFuaW1hdGlvbnMnLFxuICAgICAgJ3Bvc3Rjc3MnLFxuICAgICAgJ2h0bWwnLFxuICAgICAgJ3JlYWN0JyxcbiAgICAgICdyZWFjdCBuYXRpdmUnLFxuICAgICAgJ3JlZHV4JyxcbiAgICAgICdyZWFjdC1yb3V0ZXInLFxuICAgICAgJ2pzeCcsXG4gICAgICAnamVzdCcsXG4gICAgICAnZ2l0JyxcbiAgICAgICduZXh0LmpzJyxcbiAgICAgICdub3cnLFxuICAgICAgJ3dlYnBhY2snLFxuICAgICAgJ2d1bHAnLFxuICAgICAgJ3ZpbScsXG4gICAgICAnbW9iaWxlIGFwcHMnLFxuICAgICAgJ3V4JyxcbiAgICAgICd1aScsXG4gICAgICAnYnJhbmRpbmcnLFxuICAgICAgJ2ljb25zJyxcbiAgICAgICdkZXNpZ24gc3lzdGVtcycsXG4gICAgICAndHlwb2dyYXBoeScsXG4gICAgICAnYWNjZXNzaWJpbGl0eScsXG4gICAgXSxcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBlbnRyaWVzOiBbXSxcbiAgfSxcbiAgcG9zdHM6IHtcbiAgICBuYW1lOiAnUG9zdHMnLFxuICAgIGVudHJpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICdDZW50ZXIgYW5kIGNyb3AgaW1hZ2VzIHdpdGggYSBzaW5nbGUgbGluZSBvZiBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE5IEphbiAyMDE1JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnQmVzcG9rZSBTVkcgUmVmZXJlbmNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBNYXkgMjAxNCcsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ0FuYWxvZy1zdHlsZSBMRUQgY2xvY2sgY29uY2VwdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjUgTWFyIDIwMTQnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdTaW1wbGUgdmVydGljYWwgY2VudGVyaW5nIHdpdGggQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcxMCBKYW4gMjAxNCcsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ05ZQyBTdWJ3YXkgTGluZXMgcmVpbWFnaW5lZCB3aXRoIGxvbmcgc2hhZG93IGRlc2lnbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjkgSnVuIDIwMTMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaW1lLWJhc2VkIG1lZGlhIHF1ZXJpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI1IE1hciAyMDEzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiAnSHVlIGJ1bXAgd2l0aCBTYXNzIEBmb3IgY29udHJvbCBkaXJlY3RpdmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE3IEphbiAyMDEzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiAnRGlzcGxheSBpY29ucyB3aXRoIGN1c3RvbSBkYXRhLWF0dHJpYnV0ZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIxIERlYyAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBuYW1lOiAnQ2lyY2xlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgRGVjIDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6ICdWaWRlbyBhbmQgYXVkaW8gaW4gQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcwNCBEZWMgMjAxMicsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIG5hbWU6ICdOYXR1cmFsIGN1cnZlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDggTm92IDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBuYW1lOiAnTXkgaW5pdGlhbHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIzIE9jdCAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMixcbiAgICAgICAgbmFtZTogJ1RvdWNoYWJsZSB0ZXh0dXJlcyB3aXRoIENTUyAtIGNhbiB5b3UgZmVlbCBtZT8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE4IE9jdCAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogJ0Z1cnRoZXIgc2ltcGxpZmllZCBoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgICBuYW1lOiAnQm94IHNpemluZyBmb3IgcHNldWRvIGVsZW1lbnRzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcwOSBTZXAgMjAxMicsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTUsXG4gICAgICAgIG5hbWU6ICdBbiBFdmVudCBBcGFydCBhbmQgYSBEZXNpZ25lcuKAmXMgVmlldyBvZiB0aGUgV2ViJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBTZXAgMjAxMScsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTYsXG4gICAgICAgIG5hbWU6ICdDU1MzIDo6c2VsZWN0aW9uIGJhY2tncm91bmQgY29sb3IgdHJpY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA5IFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxNyxcbiAgICAgICAgbmFtZTogJ0NocmlzIE5hZ2VyIDIwMTIgKFJlc3BvbnNpdmUgRGVzaWduKScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggQXVnIDIwMTEnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE4LFxuICAgICAgICBuYW1lOiAnQ2hyaXNOYWdlci5jb20gdjIgaXMgbGl2ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTIgSnVuIDIwMTEnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBwcm9qZWN0czoge1xuICAgIG5hbWU6ICdQcm9qZWN0cycsXG4gICAgZW50cmllczogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ2hleGNvZGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgNCwwOTYgc2hvcnRoYW5kIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9oZXhjb2Rlcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ3Nob3J0LWNvbG9yLW5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDUgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ3NpbXBsZS1wYWxldHRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHNpbXBsZSBjb2xvciBwYWxldHRlJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1wYWxldHRlLycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAndW5ncmlkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgc2ltcGxlc3QgcmVzcG9uc2l2ZSBjc3MgZ3JpZCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby91bmdyaWQvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnLCAnZ3JpZCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwczovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1kZWJ1Zy5jc3MvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnRW1vb25qaScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjaGF0Ym90JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9iaXQuZG8vZW1vb25qaScsXG4gICAgICAgIHRhZ3M6IFsnY2hhdGJvdCcsICfwn4ydJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgbmFtZTogJ0dpdmUgXFwnblxcJyBHbycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjdXJhdGVkIGdhbGxlcnkgb2YgRHJpYmJibGUgc2hvdHMgcmV3b3JrZWQgYXMgaW50ZXJhY3RpdmUgQ29kZVBlbiBwZW5zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiAnQ2hlZXIgbWUgdXAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Z1biwgY3VzdG9tIHBhZ2VzIGluIHNlY29uZHMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIG5hbWU6ICd1bmdyaWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoZSBzaW1wbGVzdCByZXNwb25zaXZlIGNzcyBncmlkJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICBuYW1lOiAnVW50aWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FyZSB3ZSB0aGVyZSB5ZXQ/JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogJ1VOIERpc2FzdGVyIFJlc3BvbnNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDdXJyZW50bHkgd29ya2luZyB3aXRoIHRoZSBIYXJ2YXJkIEh1bWFuaXRhcmlhbiBJbml0aWF0aXZlIG9uIGEgZGlzYXN0ZXIgYW5kIGh1bWFuaXRhcmlhbiByZXNwb25zZSBzdXJ2ZXkgYnVpbGRpbmcgYXBwIHRvIGJlIHVzZWQgYnkgdGhlIFVuaXRlZCBOYXRpb25zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgbmFtZTogJ0phdW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMZXQgeW91ciBmcmllbmRzIGJlIHlvdXIgY2l0eSBndWlkZXMuIChUZWNoQ3J1bmNoIERpc3J1cHQgSGFja2F0aG9uIGFwcCBlbnRyeSknLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICBuYW1lOiAnQ3Vyc29ycycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIGF2YWlsYWJsZSBjdXJzb3JzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogJ3NpbXBsZS1kZWJ1Zy5jc3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RlYnVnIHlvdXIgbGF5b3V0cyB3aXRoIG9uZSBsaW5lIG9mIENTUycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTQsXG4gICAgICAgIG5hbWU6ICdwYWxldHRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHNpbXBsZSBjb2xvciBwYWxldHRlJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxNSxcbiAgICAgICAgbmFtZTogJ+KcgiBzaG9ydCBjb2xvciBuYW1lcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDQ0IENTUyBjb2xvciBuYW1lcyB0aGF0IGFyZSBhcyBzaG9ydCBhcyBvciBzaG9ydGVyIHRoYW4gdGhlaXIgY29ycmVzcG9uZGluZyBoZXhjb2Rlcy4nLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE2LFxuICAgICAgICBuYW1lOiAnaGV4Y29kZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCBwb3NzaWJsZSB0aHJlZSBkaWdpdCBoZXhjb2RlcycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTcsXG4gICAgICAgIG5hbWU6ICd0aW55IGdvb2dsZSBmb250cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU3RyaXAgZG93biB5b3VyIGdvb2dsZSBmb250cyBzaWduaWZpY2FudGx5IHRvIG9ubHkgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyB5b3VcXCdyZSBhY3R1YWxseSB1c2luZycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTgsXG4gICAgICAgIG5hbWU6ICdCaXJ0aGRheSBoZXgnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbmQgeW91ciBiaXJ0aGRheSBoZXhjb2RlJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxOSxcbiAgICAgICAgbmFtZTogJ1NWRyBQbGVhc2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpbXBsZSBzY3JpcHQgdG8gcmVwbGFjZSB5b3VyIGJpdG1hcCBpY29ucyB3aXRoIGlubGluZSBTVkdzIHdpdGggYml0bWFwIGZhbGxiYWNrIGJ1aWx0IGluJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyMCxcbiAgICAgICAgbmFtZTogJyNGYXY1JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGF0IGFyZSB5b3VyIGZpdmUgbW9zdCBpbXBvcnRhbnQgaXRlbXM/JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyMSxcbiAgICAgICAgbmFtZTogJ1R3YWRsaWIhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBZC1saWIgeW91ciB0d2VldHMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIyLFxuICAgICAgICBuYW1lOiAnQmxpc3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JlYXV0aWZ1bGx5IGxlYW4sIGlkZWFsIHN0eWxlIHNoZWV0cycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMjMsXG4gICAgICAgIG5hbWU6ICdDcmFmdGVkIENTUycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBwZXJzb25hbCBjb21waWxhdGlvbiBvZiBDU1MgcHJhY3RpY2VzIEkgZm9sbG93JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyNCxcbiAgICAgICAgbmFtZTogJ1NvY2lhbCBMb2dvcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRG93bmxvYWQgb2ZmaWNpYWwgc29jaWFsIGxvZ29zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyNSxcbiAgICAgICAgbmFtZTogJ2NocmlzbmFnZXIuY29tIHYyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYXJlIHRvIHJlbWluaXNjZT8nLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDI2LFxuICAgICAgICBuYW1lOiAnQmVuIFRob21zb24gUGhvdG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0F3d3dhcmRzIFNpdGUgb2YgdGhlIERheScsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMjcsXG4gICAgICAgIG5hbWU6ICdUb3RhbGx5IEZyZXNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFeHBlcmltZW50YWwgQ1NTMyBkZXNpZ24gZmVhdHVyZWQgb24gU21hc2hpbmcgTWFnYXppbmUnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufVxuXG5jb25zdCBTb2NpYWwgPSAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPGEgaHJlZj1cIlwiPlR3aXR0ZXI8L2E+XG4gICAgPGEgaHJlZj1cIlwiPkdpdGh1YjwvYT5cbiAgICA8YSBocmVmPVwiXCI+TGlua2VkSW48L2E+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pXG5cbmNvbnN0IFRhZyA9ICh7bGFiZWx9KSA9PiA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXG5jb25zdCBJbnRybyA9ICh7ZGF0YX0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2PlxuICAgICAgPGI+e2RhdGEubG9nb308L2I+XG4gICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlN0dWZmIEkgZW5qb3k8L2gyPlxuICAgICAgICB7ZGF0YS5za2lsbHMubWFwKHNraWxsID0+IDxUYWcgbGFiZWw9e3NraWxsfSAvPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTb2NpYWwgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGIge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmE7XG4gICAgICB9XG5cbiAgICAgIGRpdiA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuY29uc3QgU2VjdGlvbiA9ICh7ZGF0YX0pID0+IChcbiAgPHNlY3Rpb24gaWQ9e2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpfT5cbiAgICA8ZGl2PlxuICAgICAgPGgxPlxuICAgICAgICA8YSBocmVmPXtgIyR7ZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+e2RhdGEubmFtZX08L2E+XG4gICAgICA8L2gxPlxuXG4gICAgICA8aHIgLz5cblxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YS5lbnRyaWVzLm1hcCgoe2lkLCB1cmwsIG5hbWUsIGRlc2NyaXB0aW9uLCB0YWdzfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiA8VGFnIGtleT17aW5kZXh9IGxhYmVsPXt0YWd9IC8+KX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGgxID4gYTpob3Zlcjo6YWZ0ZXIsXG4gICAgICBoMSA+IGE6Zm9jdXM6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgI1wiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcblxuY29uc3QgT3V0cm8gPSAoKSA9PiAoXG4gIDxmb290ZXI+XG4gICAgPGRpdj5cbiAgICAgIDxTb2NpYWwgLz5cbiAgICAgIDxwPlxuICAgICAgICA8c21hbGw+JmNvcHk7IHt5ZWFyfSBDaHJpcyBOYWdlciAmbWlkZG90OyBCdWlsdCBpbiB2aW0gd2l0aCByZWFjdCBhbmQgbmV4dC5qcy48L3NtYWxsPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKHtwcm9maWxlLCBwcm9qZWN0cywgcG9zdHN9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q2hyaXMgTmFnZXI8L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEludHJvIGRhdGE9e2RhdGEuaW50cm99IC8+XG4gICAgPG1haW4+XG4gICAgICA8U2VjdGlvbiBkYXRhPXtkYXRhLnByb2plY3RzfSAvPlxuICAgICAgPFNlY3Rpb24gZGF0YT17ZGF0YS5wb3N0c30gLz5cbiAgICA8L21haW4+XG4gICAgPE91dHJvIC8+XG4gICAgPHN0eWxlPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiAxMDAlLzEuNSBCbGlua01hY1N5c3RlbUZvbnQ7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlcixcbiAgICAgIHNlY3Rpb24sXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgfVxuXG4gICAgICBoZWFkZXIgPiBkaXYsXG4gICAgICBzZWN0aW9uID4gZGl2LFxuICAgICAgZm9vdGVyID4gZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MGVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICAhY29sb3I6ICNmMDY7XG4gICAgICAgICFiYWNrZ3JvdW5kLWNvbG9yOiAjMGNmO1xuICAgICAgfVxuXG4gICAgICBociB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB0cmFuc3BhcmVudCA0cHgsICMwMDAgNXB4LCB0cmFuc3BhcmVudCAwKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNHB4LCAjMDAwIDVweCwgdHJhbnNwYXJlbnQgMCk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxM3B4IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogLjEyNXJlbSAuMjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

var Tag = function Tag(_ref) {
  var label = _ref.label;
  return _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    }
  }, label);
};

var Intro = function Intro(_ref2) {
  var data = _ref2.data;
  return _react2.default.createElement('header', {
    'data-jsx': 3553270693,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 3553270693,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    }
  }, _react2.default.createElement('b', {
    'data-jsx': 3553270693,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    }
  }, data.logo), _react2.default.createElement('h1', {
    'data-jsx': 3553270693,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    }
  }, data.name), _react2.default.createElement('p', {
    'data-jsx': 3553270693,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    }
  }, data.description), _react2.default.createElement('div', {
    'data-jsx': 3553270693,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    }
  }, _react2.default.createElement('h2', {
    'data-jsx': 3553270693,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    }
  }, 'Stuff I enjoy'), data.skills.map(function (skill) {
    return _react2.default.createElement(Tag, { label: skill, __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      }
    });
  })), _react2.default.createElement(Social, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 3553270693,
    css: 'b[data-jsx="3553270693"] {font-weight: normal;font-size: 6rem;font-family: Futura;}div[data-jsx="3553270693"] > div[data-jsx="3553270693"] {margin-top: 3rem;margin-bottom: 3rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlhZ0IsQUFDUCwwQkFDbUIsb0JBQ0osZ0JBQ0ksb0JBQ3JCLENBRVUseURBQ1EsaUJBQ0csb0JBQ3JCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc25hZ2VyL0Ryb3Bib3gvQ2hyaXMvUHJvamVjdHMvY2hyaXNuYWdlci5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuY29uc3QgZGF0YSA9IHtcbiAgaW50cm86IHtcbiAgICBsb2dvOiAnQ04nLFxuICAgIG5hbWU6ICdDaHJpcyBOYWdlcicsXG4gICAgZGVzY3JpcHRpb246ICdNaW5pbWFsaXN0IGRldmVsb3Blci1kZXNpZ25lciBpbiBCcm9va2x5biwgTlknLFxuICAgIHNraWxsczogW1xuICAgICAgJ2phdmFzY3JpcHQnLFxuICAgICAgYGVzJHt5ZWFyICsgMX1gLFxuICAgICAgJ25vZGUnLFxuICAgICAgJ2NzcycsXG4gICAgICAnY3NzLWluLWpzJyxcbiAgICAgICdzaW5nbGUtcHVycG9zZSBjc3MgY2xhc3NlcycsXG4gICAgICAnY3NzLWFuaW1hdGlvbnMnLFxuICAgICAgJ3Bvc3Rjc3MnLFxuICAgICAgJ2h0bWwnLFxuICAgICAgJ3JlYWN0JyxcbiAgICAgICdyZWFjdCBuYXRpdmUnLFxuICAgICAgJ3JlZHV4JyxcbiAgICAgICdyZWFjdC1yb3V0ZXInLFxuICAgICAgJ2pzeCcsXG4gICAgICAnamVzdCcsXG4gICAgICAnZ2l0JyxcbiAgICAgICduZXh0LmpzJyxcbiAgICAgICdub3cnLFxuICAgICAgJ3dlYnBhY2snLFxuICAgICAgJ2d1bHAnLFxuICAgICAgJ3ZpbScsXG4gICAgICAnbW9iaWxlIGFwcHMnLFxuICAgICAgJ3V4JyxcbiAgICAgICd1aScsXG4gICAgICAnYnJhbmRpbmcnLFxuICAgICAgJ2ljb25zJyxcbiAgICAgICdkZXNpZ24gc3lzdGVtcycsXG4gICAgICAndHlwb2dyYXBoeScsXG4gICAgICAnYWNjZXNzaWJpbGl0eScsXG4gICAgXSxcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBlbnRyaWVzOiBbXSxcbiAgfSxcbiAgcG9zdHM6IHtcbiAgICBuYW1lOiAnUG9zdHMnLFxuICAgIGVudHJpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICdDZW50ZXIgYW5kIGNyb3AgaW1hZ2VzIHdpdGggYSBzaW5nbGUgbGluZSBvZiBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE5IEphbiAyMDE1JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnQmVzcG9rZSBTVkcgUmVmZXJlbmNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBNYXkgMjAxNCcsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ0FuYWxvZy1zdHlsZSBMRUQgY2xvY2sgY29uY2VwdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjUgTWFyIDIwMTQnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdTaW1wbGUgdmVydGljYWwgY2VudGVyaW5nIHdpdGggQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcxMCBKYW4gMjAxNCcsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ05ZQyBTdWJ3YXkgTGluZXMgcmVpbWFnaW5lZCB3aXRoIGxvbmcgc2hhZG93IGRlc2lnbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjkgSnVuIDIwMTMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaW1lLWJhc2VkIG1lZGlhIHF1ZXJpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI1IE1hciAyMDEzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiAnSHVlIGJ1bXAgd2l0aCBTYXNzIEBmb3IgY29udHJvbCBkaXJlY3RpdmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE3IEphbiAyMDEzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiAnRGlzcGxheSBpY29ucyB3aXRoIGN1c3RvbSBkYXRhLWF0dHJpYnV0ZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIxIERlYyAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBuYW1lOiAnQ2lyY2xlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgRGVjIDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6ICdWaWRlbyBhbmQgYXVkaW8gaW4gQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcwNCBEZWMgMjAxMicsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIG5hbWU6ICdOYXR1cmFsIGN1cnZlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDggTm92IDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBuYW1lOiAnTXkgaW5pdGlhbHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIzIE9jdCAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMixcbiAgICAgICAgbmFtZTogJ1RvdWNoYWJsZSB0ZXh0dXJlcyB3aXRoIENTUyAtIGNhbiB5b3UgZmVlbCBtZT8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE4IE9jdCAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogJ0Z1cnRoZXIgc2ltcGxpZmllZCBoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgICBuYW1lOiAnQm94IHNpemluZyBmb3IgcHNldWRvIGVsZW1lbnRzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcwOSBTZXAgMjAxMicsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTUsXG4gICAgICAgIG5hbWU6ICdBbiBFdmVudCBBcGFydCBhbmQgYSBEZXNpZ25lcuKAmXMgVmlldyBvZiB0aGUgV2ViJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBTZXAgMjAxMScsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTYsXG4gICAgICAgIG5hbWU6ICdDU1MzIDo6c2VsZWN0aW9uIGJhY2tncm91bmQgY29sb3IgdHJpY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA5IFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxNyxcbiAgICAgICAgbmFtZTogJ0NocmlzIE5hZ2VyIDIwMTIgKFJlc3BvbnNpdmUgRGVzaWduKScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggQXVnIDIwMTEnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE4LFxuICAgICAgICBuYW1lOiAnQ2hyaXNOYWdlci5jb20gdjIgaXMgbGl2ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTIgSnVuIDIwMTEnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBwcm9qZWN0czoge1xuICAgIG5hbWU6ICdQcm9qZWN0cycsXG4gICAgZW50cmllczogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ2hleGNvZGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgNCwwOTYgc2hvcnRoYW5kIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9oZXhjb2Rlcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ3Nob3J0LWNvbG9yLW5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDUgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ3NpbXBsZS1wYWxldHRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHNpbXBsZSBjb2xvciBwYWxldHRlJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1wYWxldHRlLycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAndW5ncmlkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgc2ltcGxlc3QgcmVzcG9uc2l2ZSBjc3MgZ3JpZCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby91bmdyaWQvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnLCAnZ3JpZCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwczovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1kZWJ1Zy5jc3MvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnRW1vb25qaScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjaGF0Ym90JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9iaXQuZG8vZW1vb25qaScsXG4gICAgICAgIHRhZ3M6IFsnY2hhdGJvdCcsICfwn4ydJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgbmFtZTogJ0dpdmUgXFwnblxcJyBHbycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjdXJhdGVkIGdhbGxlcnkgb2YgRHJpYmJibGUgc2hvdHMgcmV3b3JrZWQgYXMgaW50ZXJhY3RpdmUgQ29kZVBlbiBwZW5zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiAnQ2hlZXIgbWUgdXAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Z1biwgY3VzdG9tIHBhZ2VzIGluIHNlY29uZHMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIG5hbWU6ICd1bmdyaWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoZSBzaW1wbGVzdCByZXNwb25zaXZlIGNzcyBncmlkJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICBuYW1lOiAnVW50aWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FyZSB3ZSB0aGVyZSB5ZXQ/JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogJ1VOIERpc2FzdGVyIFJlc3BvbnNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDdXJyZW50bHkgd29ya2luZyB3aXRoIHRoZSBIYXJ2YXJkIEh1bWFuaXRhcmlhbiBJbml0aWF0aXZlIG9uIGEgZGlzYXN0ZXIgYW5kIGh1bWFuaXRhcmlhbiByZXNwb25zZSBzdXJ2ZXkgYnVpbGRpbmcgYXBwIHRvIGJlIHVzZWQgYnkgdGhlIFVuaXRlZCBOYXRpb25zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgbmFtZTogJ0phdW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMZXQgeW91ciBmcmllbmRzIGJlIHlvdXIgY2l0eSBndWlkZXMuIChUZWNoQ3J1bmNoIERpc3J1cHQgSGFja2F0aG9uIGFwcCBlbnRyeSknLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICBuYW1lOiAnQ3Vyc29ycycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIGF2YWlsYWJsZSBjdXJzb3JzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogJ3NpbXBsZS1kZWJ1Zy5jc3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RlYnVnIHlvdXIgbGF5b3V0cyB3aXRoIG9uZSBsaW5lIG9mIENTUycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTQsXG4gICAgICAgIG5hbWU6ICdwYWxldHRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHNpbXBsZSBjb2xvciBwYWxldHRlJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxNSxcbiAgICAgICAgbmFtZTogJ+KcgiBzaG9ydCBjb2xvciBuYW1lcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDQ0IENTUyBjb2xvciBuYW1lcyB0aGF0IGFyZSBhcyBzaG9ydCBhcyBvciBzaG9ydGVyIHRoYW4gdGhlaXIgY29ycmVzcG9uZGluZyBoZXhjb2Rlcy4nLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE2LFxuICAgICAgICBuYW1lOiAnaGV4Y29kZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCBwb3NzaWJsZSB0aHJlZSBkaWdpdCBoZXhjb2RlcycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTcsXG4gICAgICAgIG5hbWU6ICd0aW55IGdvb2dsZSBmb250cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU3RyaXAgZG93biB5b3VyIGdvb2dsZSBmb250cyBzaWduaWZpY2FudGx5IHRvIG9ubHkgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyB5b3VcXCdyZSBhY3R1YWxseSB1c2luZycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTgsXG4gICAgICAgIG5hbWU6ICdCaXJ0aGRheSBoZXgnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbmQgeW91ciBiaXJ0aGRheSBoZXhjb2RlJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxOSxcbiAgICAgICAgbmFtZTogJ1NWRyBQbGVhc2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpbXBsZSBzY3JpcHQgdG8gcmVwbGFjZSB5b3VyIGJpdG1hcCBpY29ucyB3aXRoIGlubGluZSBTVkdzIHdpdGggYml0bWFwIGZhbGxiYWNrIGJ1aWx0IGluJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyMCxcbiAgICAgICAgbmFtZTogJyNGYXY1JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGF0IGFyZSB5b3VyIGZpdmUgbW9zdCBpbXBvcnRhbnQgaXRlbXM/JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyMSxcbiAgICAgICAgbmFtZTogJ1R3YWRsaWIhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBZC1saWIgeW91ciB0d2VldHMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIyLFxuICAgICAgICBuYW1lOiAnQmxpc3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JlYXV0aWZ1bGx5IGxlYW4sIGlkZWFsIHN0eWxlIHNoZWV0cycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMjMsXG4gICAgICAgIG5hbWU6ICdDcmFmdGVkIENTUycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBwZXJzb25hbCBjb21waWxhdGlvbiBvZiBDU1MgcHJhY3RpY2VzIEkgZm9sbG93JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyNCxcbiAgICAgICAgbmFtZTogJ1NvY2lhbCBMb2dvcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRG93bmxvYWQgb2ZmaWNpYWwgc29jaWFsIGxvZ29zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyNSxcbiAgICAgICAgbmFtZTogJ2NocmlzbmFnZXIuY29tIHYyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYXJlIHRvIHJlbWluaXNjZT8nLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDI2LFxuICAgICAgICBuYW1lOiAnQmVuIFRob21zb24gUGhvdG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0F3d3dhcmRzIFNpdGUgb2YgdGhlIERheScsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMjcsXG4gICAgICAgIG5hbWU6ICdUb3RhbGx5IEZyZXNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFeHBlcmltZW50YWwgQ1NTMyBkZXNpZ24gZmVhdHVyZWQgb24gU21hc2hpbmcgTWFnYXppbmUnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufVxuXG5jb25zdCBTb2NpYWwgPSAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPGEgaHJlZj1cIlwiPlR3aXR0ZXI8L2E+XG4gICAgPGEgaHJlZj1cIlwiPkdpdGh1YjwvYT5cbiAgICA8YSBocmVmPVwiXCI+TGlua2VkSW48L2E+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pXG5cbmNvbnN0IFRhZyA9ICh7bGFiZWx9KSA9PiA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXG5jb25zdCBJbnRybyA9ICh7ZGF0YX0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2PlxuICAgICAgPGI+e2RhdGEubG9nb308L2I+XG4gICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlN0dWZmIEkgZW5qb3k8L2gyPlxuICAgICAgICB7ZGF0YS5za2lsbHMubWFwKHNraWxsID0+IDxUYWcgbGFiZWw9e3NraWxsfSAvPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTb2NpYWwgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGIge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmE7XG4gICAgICB9XG5cbiAgICAgIGRpdiA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuY29uc3QgU2VjdGlvbiA9ICh7ZGF0YX0pID0+IChcbiAgPHNlY3Rpb24gaWQ9e2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpfT5cbiAgICA8ZGl2PlxuICAgICAgPGgxPlxuICAgICAgICA8YSBocmVmPXtgIyR7ZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+e2RhdGEubmFtZX08L2E+XG4gICAgICA8L2gxPlxuXG4gICAgICA8aHIgLz5cblxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YS5lbnRyaWVzLm1hcCgoe2lkLCB1cmwsIG5hbWUsIGRlc2NyaXB0aW9uLCB0YWdzfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiA8VGFnIGtleT17aW5kZXh9IGxhYmVsPXt0YWd9IC8+KX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGgxID4gYTpob3Zlcjo6YWZ0ZXIsXG4gICAgICBoMSA+IGE6Zm9jdXM6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgI1wiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcblxuY29uc3QgT3V0cm8gPSAoKSA9PiAoXG4gIDxmb290ZXI+XG4gICAgPGRpdj5cbiAgICAgIDxTb2NpYWwgLz5cbiAgICAgIDxwPlxuICAgICAgICA8c21hbGw+JmNvcHk7IHt5ZWFyfSBDaHJpcyBOYWdlciAmbWlkZG90OyBCdWlsdCBpbiB2aW0gd2l0aCByZWFjdCBhbmQgbmV4dC5qcy48L3NtYWxsPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKHtwcm9maWxlLCBwcm9qZWN0cywgcG9zdHN9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q2hyaXMgTmFnZXI8L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEludHJvIGRhdGE9e2RhdGEuaW50cm99IC8+XG4gICAgPG1haW4+XG4gICAgICA8U2VjdGlvbiBkYXRhPXtkYXRhLnByb2plY3RzfSAvPlxuICAgICAgPFNlY3Rpb24gZGF0YT17ZGF0YS5wb3N0c30gLz5cbiAgICA8L21haW4+XG4gICAgPE91dHJvIC8+XG4gICAgPHN0eWxlPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiAxMDAlLzEuNSBCbGlua01hY1N5c3RlbUZvbnQ7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlcixcbiAgICAgIHNlY3Rpb24sXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgfVxuXG4gICAgICBoZWFkZXIgPiBkaXYsXG4gICAgICBzZWN0aW9uID4gZGl2LFxuICAgICAgZm9vdGVyID4gZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MGVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICAhY29sb3I6ICNmMDY7XG4gICAgICAgICFiYWNrZ3JvdW5kLWNvbG9yOiAjMGNmO1xuICAgICAgfVxuXG4gICAgICBociB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB0cmFuc3BhcmVudCA0cHgsICMwMDAgNXB4LCB0cmFuc3BhcmVudCAwKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNHB4LCAjMDAwIDVweCwgdHJhbnNwYXJlbnQgMCk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxM3B4IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogLjEyNXJlbSAuMjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

var Section = function Section(_ref3) {
  var data = _ref3.data;
  return _react2.default.createElement('section', { id: data.name.toLowerCase(), 'data-jsx': 1060780556,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 1060780556,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 1060780556,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    }
  }, _react2.default.createElement('a', { href: '#' + data.name.toLowerCase(), 'data-jsx': 1060780556,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    }
  }, data.name)), _react2.default.createElement('hr', {
    'data-jsx': 1060780556,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 1060780556,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    }
  }, data.entries.map(function (_ref4) {
    var id = _ref4.id,
        url = _ref4.url,
        name = _ref4.name,
        description = _ref4.description,
        tags = _ref4.tags;
    return _react2.default.createElement('li', { key: id, 'data-jsx': 1060780556,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444
      }
    }, _react2.default.createElement('a', { href: url, 'data-jsx': 1060780556,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445
      }
    }, _react2.default.createElement('h2', {
      'data-jsx': 1060780556,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446
      }
    }, name), _react2.default.createElement('p', {
      'data-jsx': 1060780556,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447
      }
    }, description)), tags.map(function (tag, index) {
      return _react2.default.createElement(Tag, { key: index, label: tag, __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      });
    }));
  }))), _react2.default.createElement(_style2.default, {
    styleId: 1060780556,
    css: '@media (min-width: 60em) {ul[data-jsx="1060780556"] {margin-right: -1rem;margin-left: -1rem;}li[data-jsx="1060780556"] {box-sizing: border-box;width: 50%;padding: 1rem;display: inline-block;vertical-align: top;}}@media (min-width: 80em) {li[data-jsx="1060780556"] {width: 25%;}}h1[data-jsx="1060780556"] {font-size: 2rem;}h1[data-jsx="1060780556"] > a[data-jsx="1060780556"]:hover::after,h1[data-jsx="1060780556"] > a[data-jsx="1060780556"]:focus::after {content: " #";}ul[data-jsx="1060780556"] {list-style-type: none;padding-left: 0;}li[data-jsx="1060780556"] {margin-bottom: 4rem;}a[data-jsx="1060780556"] {display: block;}a[data-jsx="1060780556"]:hover,a[data-jsx="1060780556"]:focus {text-decoration: underline;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNjZ0IsQUFDZ0IsMEJBQ3BCLDJCQUNrQixvQkFDRCxtQkFDcEIsQ0FFRywyQkFDcUIsdUJBQ1osV0FDRyxjQUNRLHNCQUNGLG9CQUNyQixDQUNGLENBRXlCLDBCQUNwQiwyQkFDUyxXQUNaLENBQ0YsQ0FFRywyQkFDYyxnQkFDakIsQ0FHb0IscUlBQ0wsY0FDZixDQUVHLDJCQUNvQixzQkFDTixnQkFDakIsQ0FFRywyQkFDa0Isb0JBQ3JCLENBRUUsMEJBQ2MsZUFDaEIsQ0FHUSwrREFDb0IsMkJBQzVCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jaHJpc25hZ2VyL0Ryb3Bib3gvQ2hyaXMvUHJvamVjdHMvY2hyaXNuYWdlci5jb20iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcblxuY29uc3QgZGF0YSA9IHtcbiAgaW50cm86IHtcbiAgICBsb2dvOiAnQ04nLFxuICAgIG5hbWU6ICdDaHJpcyBOYWdlcicsXG4gICAgZGVzY3JpcHRpb246ICdNaW5pbWFsaXN0IGRldmVsb3Blci1kZXNpZ25lciBpbiBCcm9va2x5biwgTlknLFxuICAgIHNraWxsczogW1xuICAgICAgJ2phdmFzY3JpcHQnLFxuICAgICAgYGVzJHt5ZWFyICsgMX1gLFxuICAgICAgJ25vZGUnLFxuICAgICAgJ2NzcycsXG4gICAgICAnY3NzLWluLWpzJyxcbiAgICAgICdzaW5nbGUtcHVycG9zZSBjc3MgY2xhc3NlcycsXG4gICAgICAnY3NzLWFuaW1hdGlvbnMnLFxuICAgICAgJ3Bvc3Rjc3MnLFxuICAgICAgJ2h0bWwnLFxuICAgICAgJ3JlYWN0JyxcbiAgICAgICdyZWFjdCBuYXRpdmUnLFxuICAgICAgJ3JlZHV4JyxcbiAgICAgICdyZWFjdC1yb3V0ZXInLFxuICAgICAgJ2pzeCcsXG4gICAgICAnamVzdCcsXG4gICAgICAnZ2l0JyxcbiAgICAgICduZXh0LmpzJyxcbiAgICAgICdub3cnLFxuICAgICAgJ3dlYnBhY2snLFxuICAgICAgJ2d1bHAnLFxuICAgICAgJ3ZpbScsXG4gICAgICAnbW9iaWxlIGFwcHMnLFxuICAgICAgJ3V4JyxcbiAgICAgICd1aScsXG4gICAgICAnYnJhbmRpbmcnLFxuICAgICAgJ2ljb25zJyxcbiAgICAgICdkZXNpZ24gc3lzdGVtcycsXG4gICAgICAndHlwb2dyYXBoeScsXG4gICAgICAnYWNjZXNzaWJpbGl0eScsXG4gICAgXSxcbiAgfSxcbiAgcHJvZmlsZToge1xuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBlbnRyaWVzOiBbXSxcbiAgfSxcbiAgcG9zdHM6IHtcbiAgICBuYW1lOiAnUG9zdHMnLFxuICAgIGVudHJpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICdDZW50ZXIgYW5kIGNyb3AgaW1hZ2VzIHdpdGggYSBzaW5nbGUgbGluZSBvZiBDU1MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE5IEphbiAyMDE1JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnQmVzcG9rZSBTVkcgUmVmZXJlbmNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBNYXkgMjAxNCcsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ0FuYWxvZy1zdHlsZSBMRUQgY2xvY2sgY29uY2VwdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjUgTWFyIDIwMTQnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdTaW1wbGUgdmVydGljYWwgY2VudGVyaW5nIHdpdGggQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcxMCBKYW4gMjAxNCcsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ05ZQyBTdWJ3YXkgTGluZXMgcmVpbWFnaW5lZCB3aXRoIGxvbmcgc2hhZG93IGRlc2lnbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMjkgSnVuIDIwMTMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6ICdUaW1lLWJhc2VkIG1lZGlhIHF1ZXJpZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzI1IE1hciAyMDEzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiAnSHVlIGJ1bXAgd2l0aCBTYXNzIEBmb3IgY29udHJvbCBkaXJlY3RpdmUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE3IEphbiAyMDEzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiAnRGlzcGxheSBpY29ucyB3aXRoIGN1c3RvbSBkYXRhLWF0dHJpYnV0ZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIxIERlYyAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBuYW1lOiAnQ2lyY2xlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTkgRGVjIDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6ICdWaWRlbyBhbmQgYXVkaW8gaW4gQ1NTJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcwNCBEZWMgMjAxMicsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIG5hbWU6ICdOYXR1cmFsIGN1cnZlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMDggTm92IDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBuYW1lOiAnTXkgaW5pdGlhbHMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzIzIE9jdCAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMixcbiAgICAgICAgbmFtZTogJ1RvdWNoYWJsZSB0ZXh0dXJlcyB3aXRoIENTUyAtIGNhbiB5b3UgZmVlbCBtZT8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzE4IE9jdCAyMDEyJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogJ0Z1cnRoZXIgc2ltcGxpZmllZCBoZXhjb2RlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggU2VwIDIwMTInLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgICBuYW1lOiAnQm94IHNpemluZyBmb3IgcHNldWRvIGVsZW1lbnRzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcwOSBTZXAgMjAxMicsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTUsXG4gICAgICAgIG5hbWU6ICdBbiBFdmVudCBBcGFydCBhbmQgYSBEZXNpZ25lcuKAmXMgVmlldyBvZiB0aGUgV2ViJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcyMyBTZXAgMjAxMScsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTYsXG4gICAgICAgIG5hbWU6ICdDU1MzIDo6c2VsZWN0aW9uIGJhY2tncm91bmQgY29sb3IgdHJpY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJzA5IFNlcCAyMDExJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxNyxcbiAgICAgICAgbmFtZTogJ0NocmlzIE5hZ2VyIDIwMTIgKFJlc3BvbnNpdmUgRGVzaWduKScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTggQXVnIDIwMTEnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE4LFxuICAgICAgICBuYW1lOiAnQ2hyaXNOYWdlci5jb20gdjIgaXMgbGl2ZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnMTIgSnVuIDIwMTEnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBwcm9qZWN0czoge1xuICAgIG5hbWU6ICdQcm9qZWN0cycsXG4gICAgZW50cmllczogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ2hleGNvZGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbGwgNCwwOTYgc2hvcnRoYW5kIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9oZXhjb2Rlcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ3Nob3J0LWNvbG9yLW5hbWVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgNDUgQ1NTIGNvbG9yIG5hbWVzIHRoYXQgYXJlIGFzIHNob3J0IGFzIG9yIHNob3J0ZXIgdGhhbiB0aGVpciBjb3JyZXNwb25kaW5nIGhleGNvZGVzJyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby9zaG9ydC1jb2xvci1uYW1lcy8nLFxuICAgICAgICB0YWdzOiBbJ2NvbG9yJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ3NpbXBsZS1wYWxldHRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHNpbXBsZSBjb2xvciBwYWxldHRlJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1wYWxldHRlLycsXG4gICAgICAgIHRhZ3M6IFsnY29sb3InXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAndW5ncmlkJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgc2ltcGxlc3QgcmVzcG9uc2l2ZSBjc3MgZ3JpZCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9jaHJpc25hZ2VyLmdpdGh1Yi5pby91bmdyaWQvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnLCAnZ3JpZCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdzaW1wbGUtZGVidWcuY3NzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEZWJ1ZyB5b3VyIGxheW91dHMgd2l0aCBvbmUgbGluZSBvZiBDU1MnLFxuICAgICAgICB1cmw6ICdodHRwczovL2NocmlzbmFnZXIuZ2l0aHViLmlvL3NpbXBsZS1kZWJ1Zy5jc3MvJyxcbiAgICAgICAgdGFnczogWydsYXlvdXQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnRW1vb25qaScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjaGF0Ym90JyxcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9iaXQuZG8vZW1vb25qaScsXG4gICAgICAgIHRhZ3M6IFsnY2hhdGJvdCcsICfwn4ydJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgbmFtZTogJ0dpdmUgXFwnblxcJyBHbycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBjdXJhdGVkIGdhbGxlcnkgb2YgRHJpYmJibGUgc2hvdHMgcmV3b3JrZWQgYXMgaW50ZXJhY3RpdmUgQ29kZVBlbiBwZW5zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiAnQ2hlZXIgbWUgdXAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Z1biwgY3VzdG9tIHBhZ2VzIGluIHNlY29uZHMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIG5hbWU6ICd1bmdyaWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ3RoZSBzaW1wbGVzdCByZXNwb25zaXZlIGNzcyBncmlkJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICBuYW1lOiAnVW50aWwnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FyZSB3ZSB0aGVyZSB5ZXQ/JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogJ1VOIERpc2FzdGVyIFJlc3BvbnNlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDdXJyZW50bHkgd29ya2luZyB3aXRoIHRoZSBIYXJ2YXJkIEh1bWFuaXRhcmlhbiBJbml0aWF0aXZlIG9uIGEgZGlzYXN0ZXIgYW5kIGh1bWFuaXRhcmlhbiByZXNwb25zZSBzdXJ2ZXkgYnVpbGRpbmcgYXBwIHRvIGJlIHVzZWQgYnkgdGhlIFVuaXRlZCBOYXRpb25zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgbmFtZTogJ0phdW50JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMZXQgeW91ciBmcmllbmRzIGJlIHlvdXIgY2l0eSBndWlkZXMuIChUZWNoQ3J1bmNoIERpc3J1cHQgSGFja2F0aG9uIGFwcCBlbnRyeSknLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICBuYW1lOiAnQ3Vyc29ycycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIGF2YWlsYWJsZSBjdXJzb3JzJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogJ3NpbXBsZS1kZWJ1Zy5jc3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RlYnVnIHlvdXIgbGF5b3V0cyB3aXRoIG9uZSBsaW5lIG9mIENTUycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTQsXG4gICAgICAgIG5hbWU6ICdwYWxldHRlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHNpbXBsZSBjb2xvciBwYWxldHRlJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxNSxcbiAgICAgICAgbmFtZTogJ+KcgiBzaG9ydCBjb2xvciBuYW1lcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDQ0IENTUyBjb2xvciBuYW1lcyB0aGF0IGFyZSBhcyBzaG9ydCBhcyBvciBzaG9ydGVyIHRoYW4gdGhlaXIgY29ycmVzcG9uZGluZyBoZXhjb2Rlcy4nLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDE2LFxuICAgICAgICBuYW1lOiAnaGV4Y29kZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbCBwb3NzaWJsZSB0aHJlZSBkaWdpdCBoZXhjb2RlcycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTcsXG4gICAgICAgIG5hbWU6ICd0aW55IGdvb2dsZSBmb250cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU3RyaXAgZG93biB5b3VyIGdvb2dsZSBmb250cyBzaWduaWZpY2FudGx5IHRvIG9ubHkgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyB5b3VcXCdyZSBhY3R1YWxseSB1c2luZycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTgsXG4gICAgICAgIG5hbWU6ICdCaXJ0aGRheSBoZXgnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbmQgeW91ciBiaXJ0aGRheSBoZXhjb2RlJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxOSxcbiAgICAgICAgbmFtZTogJ1NWRyBQbGVhc2UnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpbXBsZSBzY3JpcHQgdG8gcmVwbGFjZSB5b3VyIGJpdG1hcCBpY29ucyB3aXRoIGlubGluZSBTVkdzIHdpdGggYml0bWFwIGZhbGxiYWNrIGJ1aWx0IGluJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyMCxcbiAgICAgICAgbmFtZTogJyNGYXY1JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGF0IGFyZSB5b3VyIGZpdmUgbW9zdCBpbXBvcnRhbnQgaXRlbXM/JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyMSxcbiAgICAgICAgbmFtZTogJ1R3YWRsaWIhJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBZC1saWIgeW91ciB0d2VldHMnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIyLFxuICAgICAgICBuYW1lOiAnQmxpc3MnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0JlYXV0aWZ1bGx5IGxlYW4sIGlkZWFsIHN0eWxlIHNoZWV0cycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMjMsXG4gICAgICAgIG5hbWU6ICdDcmFmdGVkIENTUycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBwZXJzb25hbCBjb21waWxhdGlvbiBvZiBDU1MgcHJhY3RpY2VzIEkgZm9sbG93JyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyNCxcbiAgICAgICAgbmFtZTogJ1NvY2lhbCBMb2dvcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRG93bmxvYWQgb2ZmaWNpYWwgc29jaWFsIGxvZ29zJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgdGFnczogWydjc3MnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyNSxcbiAgICAgICAgbmFtZTogJ2NocmlzbmFnZXIuY29tIHYyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdDYXJlIHRvIHJlbWluaXNjZT8nLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDI2LFxuICAgICAgICBuYW1lOiAnQmVuIFRob21zb24gUGhvdG8nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0F3d3dhcmRzIFNpdGUgb2YgdGhlIERheScsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHRhZ3M6IFsnY3NzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMjcsXG4gICAgICAgIG5hbWU6ICdUb3RhbGx5IEZyZXNoJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdFeHBlcmltZW50YWwgQ1NTMyBkZXNpZ24gZmVhdHVyZWQgb24gU21hc2hpbmcgTWFnYXppbmUnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0YWdzOiBbJ2NzcyddLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufVxuXG5jb25zdCBTb2NpYWwgPSAoKSA9PiAoXG4gIDxuYXY+XG4gICAgPGEgaHJlZj1cIlwiPlR3aXR0ZXI8L2E+XG4gICAgPGEgaHJlZj1cIlwiPkdpdGh1YjwvYT5cbiAgICA8YSBocmVmPVwiXCI+TGlua2VkSW48L2E+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBhIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pXG5cbmNvbnN0IFRhZyA9ICh7bGFiZWx9KSA9PiA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuXG5jb25zdCBJbnRybyA9ICh7ZGF0YX0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2PlxuICAgICAgPGI+e2RhdGEubG9nb308L2I+XG4gICAgICA8aDE+e2RhdGEubmFtZX08L2gxPlxuICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlN0dWZmIEkgZW5qb3k8L2gyPlxuICAgICAgICB7ZGF0YS5za2lsbHMubWFwKHNraWxsID0+IDxUYWcgbGFiZWw9e3NraWxsfSAvPil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTb2NpYWwgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGIge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGdXR1cmE7XG4gICAgICB9XG5cbiAgICAgIGRpdiA+IGRpdiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuY29uc3QgU2VjdGlvbiA9ICh7ZGF0YX0pID0+IChcbiAgPHNlY3Rpb24gaWQ9e2RhdGEubmFtZS50b0xvd2VyQ2FzZSgpfT5cbiAgICA8ZGl2PlxuICAgICAgPGgxPlxuICAgICAgICA8YSBocmVmPXtgIyR7ZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCl9YH0+e2RhdGEubmFtZX08L2E+XG4gICAgICA8L2gxPlxuXG4gICAgICA8aHIgLz5cblxuICAgICAgPHVsPlxuICAgICAgICB7ZGF0YS5lbnRyaWVzLm1hcCgoe2lkLCB1cmwsIG5hbWUsIGRlc2NyaXB0aW9uLCB0YWdzfSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiA8VGFnIGtleT17aW5kZXh9IGxhYmVsPXt0YWd9IC8+KX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICB9XG5cbiAgICAgIGgxID4gYTpob3Zlcjo6YWZ0ZXIsXG4gICAgICBoMSA+IGE6Zm9jdXM6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgI1wiO1xuICAgICAgfVxuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbilcblxuY29uc3QgT3V0cm8gPSAoKSA9PiAoXG4gIDxmb290ZXI+XG4gICAgPGRpdj5cbiAgICAgIDxTb2NpYWwgLz5cbiAgICAgIDxwPlxuICAgICAgICA8c21hbGw+JmNvcHk7IHt5ZWFyfSBDaHJpcyBOYWdlciAmbWlkZG90OyBCdWlsdCBpbiB2aW0gd2l0aCByZWFjdCBhbmQgbmV4dC5qcy48L3NtYWxsPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKHtwcm9maWxlLCBwcm9qZWN0cywgcG9zdHN9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q2hyaXMgTmFnZXI8L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEludHJvIGRhdGE9e2RhdGEuaW50cm99IC8+XG4gICAgPG1haW4+XG4gICAgICA8U2VjdGlvbiBkYXRhPXtkYXRhLnByb2plY3RzfSAvPlxuICAgICAgPFNlY3Rpb24gZGF0YT17ZGF0YS5wb3N0c30gLz5cbiAgICA8L21haW4+XG4gICAgPE91dHJvIC8+XG4gICAgPHN0eWxlPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250OiAxMDAlLzEuNSBCbGlua01hY1N5c3RlbUZvbnQ7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlcixcbiAgICAgIHNlY3Rpb24sXG4gICAgICBmb290ZXIge1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgfVxuXG4gICAgICBoZWFkZXIgPiBkaXYsXG4gICAgICBzZWN0aW9uID4gZGl2LFxuICAgICAgZm9vdGVyID4gZGl2IHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MGVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlcixcbiAgICAgIGE6Zm9jdXMge1xuICAgICAgICAhY29sb3I6ICNmMDY7XG4gICAgICAgICFiYWNrZ3JvdW5kLWNvbG9yOiAjMGNmO1xuICAgICAgfVxuXG4gICAgICBociB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTM1ZGVnLCB0cmFuc3BhcmVudCA0cHgsICMwMDAgNXB4LCB0cmFuc3BhcmVudCAwKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNHB4LCAjMDAwIDVweCwgdHJhbnNwYXJlbnQgMCk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxM3B4IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogLjEyNXJlbSAuMjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};

var Outro = function Outro() {
  return _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    }
  }, _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    }
  }, _react2.default.createElement(Social, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    }
  }), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    }
  }, _react2.default.createElement('small', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    }
  }, '\xA9 ', year, ' Chris Nager \xB7 Built in vim with react and next.js.'))));
};

exports.default = function (_ref5) {
  var profile = _ref5.profile,
      projects = _ref5.projects,
      posts = _ref5.posts;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    }
  }, 'Chris Nager'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    }
  })), _react2.default.createElement(Intro, { data: data.intro, __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    }
  }), _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    }
  }, _react2.default.createElement(Section, { data: data.projects, __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    }
  }), _react2.default.createElement(Section, { data: data.posts, __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    }
  })), _react2.default.createElement(Outro, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531
    }
  }, '\n      body {\n        margin: 0;\n        font: 100%/1.5 BlinkMacSystemFont;\n      }\n\n      header,\n      section,\n      footer {\n        padding: 2rem;\n      }\n\n      header > div,\n      section > div,\n      footer > div {\n        max-width: 60em;\n        margin-right: auto;\n        margin-left: auto;\n      }\n\n      a {\n        text-decoration: none;\n        color: inherit;\n      }\n\n      a:hover,\n      a:focus {\n        !color: #f06;\n        !background-color: #0cf;\n      }\n\n      hr {\n        border: none;\n        height: 7px;\n        background: linear-gradient(-135deg, transparent 4px, #000 5px, transparent 0), linear-gradient(135deg, transparent 4px, #000 5px, transparent 0);\n        background-repeat: repeat-x;\n        background-size: 13px 10px;\n      }\n\n      span {\n        border: 1px solid;\n        padding: .125rem .25rem;\n        display: inline-block;\n        margin-right: .5rem;\n        margin-bottom: .5rem;\n      }\n    '));
};