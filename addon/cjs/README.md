## CommonJS Module Support

给 JSKit 提供 CommonJS 模块支持。

- 在订阅仓库中安装此模块
- 在要使用cjs的`项目配置`中添加 cjs 作为依赖的项目
- 接下来就可以在项目中的运行如下代码，在ES6 模块中导入 cjs 模块使用 require 方法了：

```js
import { createRequire } from "cjs";

const require = createRequire(Deno.cwd());

const example = require("./exame.js");

```

如果想在 CommonJS 模块中再次调用 ES6 模块，则只能使用 [import()][2] 导入。

> 源码参考自 Deno 的 [node/module][1] 模块，针对 JSKit 稍有调整，如有问题请联系我们。

[1]: https://github.com/denoland/deno/tree/v1.1/std/node
[2]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules#%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD%E6%A8%A1%E5%9D%97
