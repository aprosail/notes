<Bilibili vid="BV1yJ4m1p7QE" />

VSCode 官网上就给出了插件开发的
[详细文档](https://code.visualstudio.com/api/get-started/your-first-extension)。
但这里讲的方式是通过 TypeScript 语言的开发方式，
涉及到编译到 JavaScript 的操作，对于初学者而言比较难理解。
因此我直接按照 JavaScript 的方式来讲解，好让初学者能看得更明白。

这里只会写最简单的 Hello World 插件，
其功能为在 VSCode 中弹出信息提示窗口显示一条提示信息。
这样的插件并没有什么实际作用，
但作为学习中的练习，有助于理解 VSCode 插件的本质和原理。
直接上官网中的那种操作，可能不太容易驾驭得住。
