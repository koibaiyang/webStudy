<!-- 包的说明文档 -->

## 安装

```
    npm instal koibaiyang-tools-01

```

## 导入

```js
const koi = require("koibaiyang-tools-01");
```

## 格式化时间

```js
// 调用 dateFormat 对时间进行格式化
const dtStr = koi.dateFormat(new Date());
// 结果  2023-04-27 23:36:51
```

## 转义 HTML 中的特殊字符

```js
// 带转换的 HTML 字符串
const htmlstr = "<div>测试htmlescape<span>测试</span></div>";
// 调用 htmlEscape 方法进行转换
const str = koi.htmlEscape(htmlstr);
// 转换的结果 &lt;div&gt;测试htmlescape&lt;span&gt;测试&lt;/span&gt;&lt;/div&gt;
```

## 还原 HTML 中的特殊字符

```js
// 待还原的 HTML 字符串
const rts = koi.htmlUnEscape(str);
// 输出的结果 <div>测试htmlescape<span>测试</span></div>
```

## 开源协议

ISC
