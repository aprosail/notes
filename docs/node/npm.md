[之前的文档](/docs/editor/formatter.md) 讲过 VSCode 的 Prettier 插件，
实际上 Prettier 是个可以安装的命令行工具，如果安装好了，
就可以通过`prettier . --write`命令来规范当前目录下所有支持文件的格式。
但 `prettier` 是基于 Node.js 的，只有配置好 Node 运行时才能使用。
