---
layout: post
title: 原生js序列化form 表单
category: Web Front
tags: [HTML5, JS]
description: |
  原生js对表单进行序列化，增加是否需要对value进行base64编码。注意点：需要base64时应先base64之后再encodeURIComponent，可以解决在ajax传值时把+等符号变成空格，在服务器接收到的数据出现问题！
  如果不需要使用base64编码value，并且项目中使用到jQuery,推荐使用jQuery的serialize()方法。
---
### js序列化form表单，并base64编码value ###
