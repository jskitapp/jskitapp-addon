## CommonJS Module Support

给 JSKit 提供 CommonJS 模块支持。

- 在订阅仓库中安装此模块
- 在要使用cjs的`项目配置`中添加cjs 作为依赖的项目
- 接下来就可以在项目中运行如下代码导入 cjs 模块使用 require 方法了：

```
import { createRequire } from "cjs";

const require = createRequire(Deno.cwd());

const example = require("./exame.js");

```

> 源码大部分参考自 Deno 的 node/module 模块，针对 JSKit 稍有调整，如有问题请联系我们。
