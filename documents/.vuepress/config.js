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
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Monthly I Learned',
        children: CONST.MILList
      },
      {
        title: 'Signal Processing',
        children: CONST.SignalProcessingList
      },
      {
        title: 'Machine Learning',
        children: CONST.MachineLearningList
      },
      {
        title: 'Data Engineering',
        children: CONST.DataEngineeringList
      },
      {
        title: 'Books',
        children: CONST.BooksList
      },
      {
        title: 'ETC',
        children: CONST.ETCList
      }
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
}
