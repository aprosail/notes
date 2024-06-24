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
      {text: "1.3 macOS上安装Clang"},
      {text: "1.4 安装和配置VSCode"},
      {text: "1.5 VSCode下载的网络问题"},
      {text: "1.6 VSCode界面和配置"},
      {text: "1.7 VSCode设置文件"},
      {text: "1.8 VSCode代码规范化", link: "/docs/editor/formatter.md"},
      {text: "1.9 Markdown基本语法"},
      {text: "1.10 VSCode优化技巧"},
      {text: "1.11 Unix终端基础"},
      {text: "1.12 AndroidStudio安装"},
      {text: "1.13 AndroidStudio环境配置"},
      {text: "1.14 编程字体"},
      {text: "1.15 文件嵌套"},
      {text: "1.16 文件类型指定"},
      {text: "1.17 AI辅助编程"},
      {text: "1.18 VSCode网页版"},
    ],
  },
  {
    text: "2. 版本控制系统",
    link: "/docs/vcs.md",
    items: [
      {text: "2.1 Windows上安装Git"},
      {text: "2.2 macOS上安装Git"},
      {text: "2.3 为何不用Homebrew安装Git"},
      {text: "2.4 Git用户信息配置"},
      {text: "2.5 Git时间轴和标签"},
      {text: "2.6 Git修改提交信息"},
      {text: "2.7 Git分支与合并"},
      {text: "2.8 Git处理合并冲突"},
      {text: "2.9 其他Git图形化界面"},
      {text: "2.10 Git克隆仓库(clone)"},
      {text: "2.11 GitHub网络问题"},
      {text: "2.12 GitHub注册账号"},
      {text: "2.13 GitHub用户资料配置"},
      {text: "2.14 GitHub仓库创建编辑和删除", link: "/docs/vcs/github-edit.md"},
      {text: "2.15 GitHub 2FA(双重身份验证)"},
      {text: "2.16 GitHub上传仓库", link: "/docs/vcs/upload.md"},
      {text: "2.17 Git远程同步"},
      {text: "2.18 gitignore忽略文件"},
      {text: "2.19 gitattributes跨平台问题"},
    ],
  },
  {
    text: "3. Node基础",
    link: "/docs/node.md",
    items: [
      {text: "3.1 Windows上安装Node"},
      {text: "3.2 Node版本与镜像"},
      {text: "3.3 macOS上安装Homebrew"},
      {text: "3.4 卸载Homebrew"},
      {text: "3.5 macOS上安装Node"},
      {text: "3.6 VSCode插件开发基础", link: "/docs/node/vscode.md"},
      {text: "3.7 Node包管理器NPM", link: "/docs/node/npm.md"},
      {text: "3.8 引入TypeScript", link: "/docs/node/ts.md"},
      {text: "3.9 Rollup打包工具"},
      {text: "3.10 GitHooks与Husky"},
      {text: "3.11 CommitLint提交信息规范化"},
      {text: "3.12 单元测试与Vitest"},
      {text: "3.13 Node库及其打包"},
      {text: "3.14 发布到NPM"},
    ],
  },
  {
    text: "4. 网页开发",
    link: "/docs/frontend.md",
    items: [
      {text: "4.1 Vite网页开发工具"},
      {text: "4.2 Vue模块化开发"},
      {text: "4.3 React基础"},
      {text: "4.4 深色模式"},
      {text: "4.5 多语言处理"},
      {text: "4.6 网页内置字体"},
      {text: "4.7 网页多媒体"},
      {text: "4.8 Canvas绘图工具"},
      {text: "4.9 Rust编程语言极简入门"},
      {text: "4.10 WASM基础"},
      {text: "4.11 Node搭建服务器"},
      {text: "4.12 HTTP基础知识"},
      {text: "4.13 WebSocket基础知识"},
    ],
  },
  {
    text: "5. 网页打包应用",
    link: "/docs/electron.md",
    items: [
      {text: "5.1 Electron封装应用"},
      {text: "5.2 ElectronIPC通信"},
      {text: "5.3 Electron窗口样式"},
      {text: "5.4 Electron多窗口管理"},
      {text: "5.5 Electron托盘管理"},
      {text: "5.6 Electron系统菜单栏"},
      {text: "5.7 Electron毛玻璃窗口"},
      {text: "5.8 Electron调用原生库"},
      {text: "5.13 Tauri基础"},
    ],
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
      {text: "6.9 Flutter版本切换", link: "/docs/flutter/version.md"},
      {text: "6.10 配置Android虚拟机"},
      {text: "6.11 配置iOS虚拟机"},
      {text: "6.12 Dart代码规范化工具"},
      {text: "6.13 Flutter MaterialApp"},
      {text: "6.14 Flutter状态管理"},
      {text: "6.15 Flutter动画基础"},
      {text: "6.16 MaterialApp不是必须的"},
      {text: "6.17 Flutter明暗主题"},
      {text: "6.18 Flutter多语言"},
    ],
  },
  {
    text: "7. Go编程语言基础",
    link: "/docs/go.md",
    items: [
      {text: "7.1 配置Go开发环境", link: "/docs/go/install.md"},
      {text: "7.2 Go基础语法入门"},
      {text: "7.3 Go模块和依赖管理"},
    ],
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
      {text: "8.7 SSH多密钥管理", link: "/docs/open/keys.md"},
      {text: "8.8 搭建VitePress文档", link: "/docs/open/vitepress.md"},
    ],
  },
]
