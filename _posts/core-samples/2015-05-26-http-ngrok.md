---
layout: post
title: NGROK内网穿透利器
category: Web Front
tags: [http,ngrok]
description: |
  NGROK内网穿透利器,让外网能直接访问到本地部署的网站,提供了一个在外网能够安全的访问内网Web主机，还能捕获所有请求的http内容，方便调试，甚至还支持tcp层端口映射，不局限于某一特定的服务。支持Mac OS X，Linux，Windows平台。
---

###NGROK内网穿透利器

1. 官网下载：

Secure tunnels to localhost

<https://ngrok.com/>

2. 注册获取Auth token

    ngrok authtoken  token
    Authtoken saved to configuration file: C:\Users\userName/.ngrok2/ngrok.yml

3.本地服务CMD：

ngrok http 8080

ngrok -subdomain=weixin 8080

4.查看所有请求

http://localhost:4040/inspect/http


###参考文档

ngrok内网穿透利器：

<http://dorole.com/1233/>

Secure tunnels to localhost

<https://ngrok.com/>

TUNNEL：

<http://www.tunnel.mobi/>

使用ngrok让微信公众平台通过80端口访问本机

<http://blog.csdn.net/liuxiyangyang/article/details/22922265>


Run Ngrok on Your Own Server Using Self-Signed SSL Certificate

<http://www.svenbit.com/2014/09/run-ngrok-on-your-own-server/>

自编译ngrok服务器

<http://www.haiyun.me/archives/1012.html>

我想将我的本地Web Server暴露在公网上.

<https://pc5s.cn/>

    