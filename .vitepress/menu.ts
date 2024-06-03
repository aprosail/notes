import {DefaultTheme} from "vitepress"

export const menu: DefaultTheme.Sidebar = [
  {
    text: "0. 序言部分",
    link: "/docs/preface.md",
    items: [
      {text: "0.1 原则声明", link: "/docs/preface/announce.md"},
      {text: "0.2 编程英语", link: "/docs/preface/english.md"},
      {text: "0.3 编程语言杂谈", link: "/docs/preface/languages.md"},
      {text: "0.4 Windows使用技巧", link: "/docs/preface/windows.md"},
      {text: "0.5 macOS使用技巧", link: "/docs/preface/macos.md"},
    ],
  },
  {
    text: "1. 代码编辑器",
    link: "/docs/editor.md",
    items: [
      {text: "1.1 安装和配置VisualStudio", link: "/docs/editor/vs.md"},
      {text: "1.2 Windows编译C/C++", link: "/docs/editor/win-c.md"},
    ],
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
      {text: "6.6 Flutter创建项目", link: "/docs/flutter/create.md"},
      {text: "6.7 Flutter热重载", link: "/docs/flutter/reload.md"},
      {text: "6.8 Flutter网页调试", link: "/docs/flutter/web.md"},
    ],
  },
  {
    text: "7. Go编程语言基础",
    link: "/docs/go.md",
  },
  {
    text: "8. 开源社区入门指南",
    link: "/docs/open.md",
    items: [
      {text: "8.1 开源协议简介(license)", link: "/docs/open/licenses.md"},
      {text: "8.2 如何探讨问题(issues)", link: "/docs/open/issues.md"},
      {text: "8.3 如何贡献代码(PRs)", link: "/docs/open/prs.md"},
      {text: "8.4 仓库自述文件(readme)", link: "/docs/open/readmes.md"},
      {text: "8.5 更改记录文件(changelog)"},
      {text: "8.6 分支管理建议"},
      {text: "8.7 组织内部版本杂谈"},
      {text: "8.8 搭建VitePress文档", link: "/docs/open/vitepress.md"},
    ],
  },
]
