Cache.js
========

静态资源缓存方案

## 引入 cache.js

```html
<script type="text/javascript" src="cache.js"></script>
```

页面优先引入这一个JS，其他JS或者CSS通过它去加载。

## 假引入JS和CSS

```html
<link rel="cache/stylesheet" data-href="styles/main.css?20140624">
<script type="cache/javascript" data-src="scripts/main.js?20140624"></script>
```

这些标签都可以直接放在`head`标签里，只有`cache.js`会真正立即加载。

## 好处
利用HTML5新特性localStorage，将静态文件存储到浏览器，下次访问页面时直接从存储中读取静态资源，而不是从服务端获取，速度得到质的提升。

使用后，就可以看到对应静态文件已经成功存储下来：

![](https://gitcafe-image.b0.upaiyun.com/9d2639bbcbb90fa58f270c2609e8ca9f)
