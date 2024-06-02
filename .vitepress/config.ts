import {defineConfig} from "vitepress"
import {chineseSearchOptimize, pagefindPlugin} from "vitepress-plugin-pagefind"
import {icons} from "./icons"

export default defineConfig({
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
        timeStyle: "medium",
        forceLocale: true,
      },
    },
    sidebar: [
      {
        text: "0. 序言部分",
        link: "/docs/preface.md",
        items: [
          {text: "0.1 原则声明", link: "/docs/preface/announce.md"},
          {text: "0.2 编程英语", link: "/docs/preface/english.md"},
          {text: "0.3 编程语言杂谈", link: "/docs/preface/language.md"},
          {text: "0.4 Windows使用技巧", link: "/docs/preface/windows.md"},
          {text: "0.5 macOS使用技巧", link: "/docs/preface/macos.md"},
        ],
      },
      {
        text: "1. 代码编辑器",
        link: "/docs/editor.md",
      },
      {
        text: "2. 版本控制系统",
        link: "/docs/vcs.md",
      },
      {
        text: "3. Node基础",
        link: "/docs/node.md",
      },
      {
        text: "4. 网页开发",
        link: "/docs/frontend.md",
      },
      {
        text: "5. 网页打包应用",
        link: "/docs/electron.md",
      },
      {
        text: "6. Flutter跨平台应用开发",
        link: "/docs/flutter.md",
        items: [
          {text: "6.1 下载和配置FlutterSDK", link: "/docs/flutter/clone.md"},
          {text: "6.2 Windows安装Flutter", link: "/docs/flutter/windows.md"},
          {text: "6.3 macOS安装Xcode", link: "/docs/flutter/xcode.md"},
          {text: "6.4 macOS安装CocoaPods", link: "/docs/flutter/pods.md"},
          {text: "6.5 macOS安装Flutter", link: "/docs/flutter/macos.md"},
        ],
      },
      {
        text: "7. Go编程语言基础",
        link: "/docs/go.md",
      },
      {
        text: "8. 开源社区入门指南",
        link: "/docs/open.md",
      },
    ],
  },
})
