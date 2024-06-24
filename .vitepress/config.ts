import {wordless} from "markdown-it-wordless"
import {defineConfig} from "vitepress"
import {chineseSearchOptimize, pagefindPlugin} from "vitepress-plugin-pagefind"
import {icons} from "./icons"
import {menu} from "./menu"

export default defineConfig({
  markdown: {
    config(md) {
      md.use(wordless)
    },
  },
  vite: {
    plugins: [
      pagefindPlugin({
        btnPlaceholder: "全局搜索",
        placeholder: "全局搜索关键词",
        emptyText: "找不到相关内容",
        heading: "共: {{searchResult}} 条结果",
        customSearchQuery: chineseSearchOptimize,
      }),
    ],
  },
  lang: "zh-cn",
  title: "笔记分享",
  description: "零基础跨平台应用开发系列",
  base: "/notes",
  themeConfig: {
    logo: "/avatar.png",
    search: {provider: "local"},
    nav: [
      {text: "首页", link: "/"},
      {text: "通用基础", link: "/docs/preface.md"},
      {text: "开源社区", link: "/docs/open.md"},
      {text: "Node", link: "/docs/node.md"},
      {text: "Flutter", link: "/docs/flutter.md"},
      {text: "Go", link: "/docs/go.md"},
    ],
    socialLinks: [
      {
        icon: {svg: icons.bilibili},
        link: "https://space.bilibili.com/1030736671",
      },
      {icon: "github", link: "https://github.com/aprosail/notes"},
    ],
    sidebar: menu,
    outline: {label: "页面大纲", level: [2, 3]},
    docFooter: {prev: "前页", next: "后页"},
    editLink: {
      text: "在 GitHub 上编辑此页面",
      pattern: "https://github.com/aprosail/notes/edit/dev/:path",
    },
    lastUpdated: {
      text: "最近更新时间",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "short",
        forceLocale: true,
      },
    },
  },
})
