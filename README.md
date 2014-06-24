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
