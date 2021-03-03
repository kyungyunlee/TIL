var CONST = require("./const");

module.exports = {
  title: `@kyungyunlee's notes`,
  description: `My Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
    ['link', { 
      rel: 'stylesheet', 
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' 
    }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Monthly I Learned',
        children: CONST.MILList
      },
      {
        title: 'Data Mining',
        children: CONST.DataMiningList
      },
      {
        title : 'DS and Algorithms',
        children : CONST.DSandAlgorithmsList
      },
      {
        title: "Books",
        path : "/Books/",
        sidebarDepth:1,
      },
      {
        title: 'ETC',
        children: CONST.ETCList
      },
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/kyungyunlee/'
      }, {
        text: 'Website',
        link: 'https://kyungyunlee.github.io/'
      }
    ]
  },
  markdown:{
    extendMarkdown : md => {
      md.use(require("markdown-it-katex"));
    }
  }
}
