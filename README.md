# YinyinUI

一个基于「 React 」框架的个性化 UI 组件库。

## ✨ 特性

- 👑 自主设计的符合直觉的交互语言和视觉风格；
- 📦 开箱即用的高质量 `React` 组件；
- 🛡️ 使用 `TypeScript` 开发，提供完整的类型定义文件；
- 🎃 友好的 API ，自由灵活地使用空间；
- 🎠 细致、漂亮的 UI；
- 📁 清晰明了的演示站点，细致的文档。

## 📦 安装

### 使用 npm 安装

```shell
$ npm i yinyin-ui-ts
```

## 🔨 示例

### 1. 引入样式

在`index.tsx(.jsx)`中：

```js
import "yinyin-ui-ts/dist/index.css";
```

### 2. 使用组件

```js
import React from "react";
import { Button } from "yinyin-ui-ts";

const App = () => (
  <>
    <Button btnType="primary" size="lg">
      PRESS ME
    </Button>
  </>
);
```

## 🔗 链接

- [文档站](https://yinyin-ui-ts.vercel.app/)
- [npm 发布](https://www.npmjs.com/package/yinyin-ui-ts)

## License

- [MIT](https://opensource.org/license/MIT)
