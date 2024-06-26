const sidebarGuide = [
  {
    text: '基础',
    items: [
      {text: '设计', link: '/guide/design'},
      {text: '导航', link: '/guide/nav'},
      {text: '安装', link: '/guide/installation'},
      {text: '快速开始', link: '/guide/quickstart'},
    ]
  },
  {
    text: '高级',
    items: [
      {text: '主题', link: '/guide/theming'},
    ]
  },
]

const sidebarComponent = [
  {
    text: '通用组件',
    items: [
      {text: '表格', link: '/component/common/table'},
      {text: '表单', link: '/component/common/form'},
      {text: '弹框', link: '/component/common/dialog'},
      {text: '页面', link: '/component/common/page'},
    ]
  },
  {
    text: '业务组件',
    collapsible: true,
    collapsed: true,
    items: [
      {text: '结果页', link: '/component/service/result-page'},
      {text: '配置规则模块', link: '/component/service/configure-rule'},
    ]
  }
]

const sidebarTool = [
  {
    text: '方法',
    items: [
      {text: '通用', link: '/tool/method/common'},
      {text: '数组相关', link: '/tool/method/array'},
      {text: '类型判断', link: '/tool/method/type'},
      {text: '正则', link: '/tool/method/regexp'},
      {text: '时间日期', link: '/tool/method/time'},
      {text: '下载', link: '/tool/method/download'},
      {text: '上传', link: '/tool/method/upload'},
      {text: '复制', link: '/tool/method/copy'},
    ]
  },
]

const sidebarStyle = [
  {
    text: '样式',
    items: [
      {text: '通用', link: '/style/common'},
      {text: '基础', link: '/style/base'},
      {text: '布局', link: '/style/layout'},
    ]
  },
]
export const Nav = [
  { text: '指南', link: '/guide/design' },
  { text: '组件', link: '/component/common/table'},
  { text: '工具', link: '/tool/method/common' },
  { text: '样式', link: '/style/common' },
]

export const Sidebar = {
  '/guide/': sidebarGuide,
  '/component/': sidebarComponent,
  '/tool/': sidebarTool,
  '/style/': sidebarStyle
}
