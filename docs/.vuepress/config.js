module.exports = {
  title: 'Secret',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: '技术文档', link: '/blog/document/swiper' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '技术文档', // 侧边栏名称
        children: [
          '/blog/document/swiper', // 你的md文件地址
          '/blog/document/infiniate',
          '/blog/document/YUIDoc',
          '/blog/document/mini',
          '/blog/document/fenxi',
          '/blog/document/this',
          '/blog/document/grid'
        ]
      },
      {
        title: '散文随笔', // 侧边栏名称
        children: [
          '/blog/article/notitle', // 你的md文件地址
          '/blog/article/cd',
          '/blog/article/sh',
          '/blog/article/nj'
        ]
      }, 
      {
        title: 'Express',
        children: [
          '/blog/express/ex',
          '/blog/express/middle',
          '/blog/express/in',
          '/blog/express/design'
        ]
      },
      {
        title: 'Node.js',
        children: [
          '/blog/Node/process',
          '/blog/Node/memory',
          '/blog/Node/sync'
        ]
      }
     ]
  }
}