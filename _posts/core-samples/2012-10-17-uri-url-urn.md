---
layout: post
title: URI、URL和URN之间的区别与联系
category: Tech
tags: [uri]
description: |
  URI:Universal Resource Identifier,通用资源标识符. URL:Uniform Resource Locator, 统一资源定位符. URN:Uniform Resource Name,统一资源名称。
---


URI：Universal Resource Identifier，通用资源标识符；
URL：Uniform Resource Locator，统一资源定位符；
URN：Uniform Resource Name，统一资源名称。
其中，URL,URN是URI的子集。

###JavaScript encodeURIComponent()函数

####定义和用法
   encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
####语法
   encodeURIComponent(URIstring)
####返回值
   URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。
####说明
   该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。
   其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。
####提示和注释
提示：请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。

###JavaScript decodeURIComponent() 函数
####定义和用法
decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
####返回值
URIstring 的副本，其中的十六进制转义序列将被它们表示的字符替换。

在本例中，我们将使用 decodeURIComponent() 对编码后的 URI 进行解码：
<pre>
    <code>
    &lt;script type="text/javascript"&gt;
    var test1="http://www.w3school.com.cn/My first/"
    document.write(encodeURIComponent(test1)+ "&lt;br /&gt;")
    document.write(decodeURIComponent(test1))
    &lt;/script&gt;
    </code>
</pre>

输出：
<pre>
    <code>
    http%3A%2F%2Fwww.w3school.com.cn%2FMy%20first%2F
    http://www.w3school.com.cn/My first/
    </code>
</pre>

####jQuery中serialize方法
通过encodeURIComponent编码，所以通过decodeURIComponent解码。

