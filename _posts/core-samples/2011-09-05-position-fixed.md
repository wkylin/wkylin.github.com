---
layout: post
title: position-fixed
category: css3
tags: [CSS3]
description: |
  五行代码终极完美解决从IE6到Chrome所有浏览器的position:fixed;以及闪动问题.
---

<pre>
    <code>
    html{
    _background:url(about:blank); /* 阻止闪动 in IE6 , 把空文件换成about:blank , 减少请求 */
    }
    /* 你的图层 */
    .positionFixedLayer{
    position:fixed;
    _position: absolute;
    _top:expression(documentElement.scrollTop+documentElement.clientHeight-this.offsetHeight);
    _left:expression(documentElement.scrollLeft+documentElement.clientWidth-this.offsetWidth-200);
    }
    </code>
</pre>