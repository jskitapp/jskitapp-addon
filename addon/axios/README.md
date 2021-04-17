## axios for JSKit

此项目依赖 JSKit 扩展仓库的 cjs 扩展，安装此扩展时请一并安装 cjs 扩展。

在项目的`菜单`->`项目配置`->`依赖的项目`中添加 axios 的依赖，然后就可以如下使用：

```js
import { createRequire } from "cjs";

const require = createRequire(Deno.cwd());

const axios = require('axios');
```

此扩展来源于 [axios][1]，并提供了 JSKit Http 适配器 [jskhttp.js](./adapters/jskhttp.js)。

[1]: https://github.com/axios/axios
