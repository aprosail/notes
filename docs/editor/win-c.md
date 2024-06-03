<script setup lang="ts">import Bilibili from '/tools/Bilibili.vue';</script>
<Bilibili vid="BV12u4m1T7qj" />

1. VisualStudio内置了MSVC编译器，但仍需配置环境变量后才能同终端调用。
2. MSVC从命令行调用的时候命令较为复杂，建议使用Clang。
3. Clang编译器也可通过VisualStudio安装。

## 基本概念

## 编译步骤

```cpp
#include <iostream>

int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
}
```
