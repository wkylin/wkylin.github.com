---
layout: post
title: MediaQueries for IE
category: Tech
tags: [MediaQueries]
description: |
  CSS2 允许通过 media 属性为不同媒介设备（如屏幕、打印机）指定专用样式表，而 CSS3 通过 media queries 使得更为行之有效。你可以为媒介类型添加某些查询条件用以检测设备，并采用不同的样式表。
---
<pre>
    <code>
    &lt;!--[if IE]&gt;
    &lt;script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
    </code>
</pre>