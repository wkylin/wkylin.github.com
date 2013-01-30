---
layout: post
title: hasLayout
category: Web Front
tags: [css]
description: |
  IE，这个令所有网站设计人员讨厌，但又不得不为它工作的浏览器。不论是6、7还是8，它们都有一个共同的渲染标准haslayout，所以haslayout 是一个非常有必要彻底弄清除的概念。大多 数IE下的显示错误，就是源于它。
---
IE，这个令所有网站设计人员讨厌，但又不得不为它工作的浏览器。不论是6、7还是8，它们都有一个共同的渲染标准haslayout，所以haslayout 是一个非常有必要彻底弄清除的概念。大多 数IE下的显示错误，就是源于它。

###什么是Layout呢？

"Layout" 是 IE 的一个私有属性，并不是W3C标准。它决定了一个对象（就是一个标签div、li等）在内容中如何显示、与周围对象的位置关系、以及怎样响应程序或用户产生的事件。

这个属性可以被一些css强制激活。一些HTML标签默认具有haslayout。
PS：一个对象的layout属性被激活，它的具体表现就是haslayout=true。我们可以用IE Developer Toolbar工具看到被激活的对象带有"haslayout = -1"的属性。

下面这些标签默认拥有haslayout属性：

    &lt;html&gt;, &lt;body&gt;
    &lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;
    &lt;img&gt;
    &lt;hr&gt;
    &lt;input&gt;, &lt;button&gt;, &lt;select&gt;, &lt;textarea&gt;, &lt;fieldset&gt;, &lt;legend&gt;
    &lt;iframe&gt;, &lt;embed&gt;, &lt;object&gt;, &lt;applet&gt;
    &lt;marquee&gt;

你可能就问：微软干嘛要设layout这个东西呢？当一个对象的layout被激活时，它以及它的子对象的定位和尺寸计算将独立进行，不受附近对象的干扰。也就是说它拥有一个独立的布局（layout）。因此浏览器要花费更多的代价来处理拥有haslayout的对象。为了提高性能，微软增加了layout这个IE私有的概念。
怎样激活layout？

下面列出的css属性可以激活对象的layout：

    position: absolute
        设置绝对定位可能会引发新的问题。
    float: left|right
        IE下的浮动也会产生一些莫名其妙的问题。
    display: inline-block
        当一个内联元素需要haslayout属性时就需要用它，但是IE本身不支持inline-block的，只是表现得像标准里说的inline-block。
    width: 除'auto'外的任意值
        优先考虑使用该属性。
    height: 除'auto'外的任意值
        对 IE6 及更早版本来说很常用，该方法被称为霍莉破解(Holly hack)，即设定这个元素的高度为 1% (height:1%;)。但是要注意，当这个元素的 overflow 属性被设置为 visible 时，这个方法就失效了。
    zoom: 除'normal'外的任意值
        又一个ie私有属性，不兼容标准。zoom:1可以在测试或者不追求标准的情况下使用，效果不错。
    writing-mode: tb-rl
        ie私有属性，不推荐用。

    IE7 还有一些额外的属性：
    min-height: (任意值)
    max-height: (除 none 外任意值)
    min-width: (任意值)
    max-width: (除 none 外任意值)
    overflow: (除 visible 外任意值)
    overflow-x: (除 visible 外任意值)
    overflow-y: (除 visible 外任意值)
    position: fixed

重置haslayout

在没有其它属性激活layout的情况下，使用下面的css可以重置haslayout属性：

    width, height (设为 "auto")
    max-width, max-height (设为 "none")(在 IE 7 中)
    position (设为 "static")
    float (设为 "none")
    overflow (设为 "visible") (在 IE 7 中)
    zoom (设为 "normal")
    writing-mode (从 "tb-rl" 设为 "lr-t")

display 属性的不同：当用"inline-block"激活了haslayout 属性时，就算在一条独立的规则中覆盖这个属性为"block"或"inline"，haslayout 这个标志位也不会被重置为 false。

把 mid-width, mid-height 设为它们的默认值"0"仍然会赋予 hasLayout，但是 IE 7 却可以接受一个不合法的属性"auto"来重置 hasLayout。
