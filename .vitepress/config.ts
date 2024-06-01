import {defineConfig} from "vitepress"
import {icons} from "./icons"

export default defineConfig({
  title: "笔记分享",
  description: "零基础跨平台应用开发系列",
  base: "/notes",
  themeConfig: {
    logo: "/avatar.png",
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
    sidebar: [
      {
        text: "序言部分",
        link: "/docs/preface.md",
        // items: [],
      },
      {
        text: "代码编辑器",
        link: "/docs/editor.md",
      },
      {
        text: "版本控制系统",
        link: "/docs/vcs.md",
      },
      {
        text: "Node基础",
        link: "/docs/node.md",
      },
      {
        text: "网页开发",
        link: "/docs/frontend.md",
      },
      {
        text: "网页打包应用",
        link: "/docs/electron.md",
      },
      {
        text: "Flutter应用开发",
        link: "/docs/flutter.md",
      },
      {
        text: "Go编程语言基础",
        link: "/docs/go.md",
      },
      {
        text: "开源社区入门指南",
        link: "/docs/open.md",
      },
    ],
  },
})
