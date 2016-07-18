---
layout: post
title: Http-Server
category: Web Front
tags: [server,node]
description: |
  http-server 是一个简单的零配置命令行HTTP服务器, 基于NodeJs. A simple zero-configuration command-line http server。
---

###Http Server

1. 安装
 npm install http-server -g

2. 运行
 http-server [path] [options]

3. Available Options:
 http-server -h

4. 重要参数

    -p 端口号 (默认 8080)

    -a IP 地址 (默认 0.0.0.0)

    -d 显示目录列表 (默认 'True')

    -i 显示 autoIndex (默认 'True')

    -e or --ext 如果没有提供默认的文件扩展名(默认 'html')

    -s or --silent 禁止日志信息输出

    --cors 启用 CORS via the Access-Control-Allow-Origin header

    -o 在开始服务后打开浏览器

    -h or --help 打印列表并退出

    -c 为 cache-control max-age header 设置Cache time(秒) , e.g. -c10 for 10 seconds (defaults to '3600'). 禁用 caching, 则使用-c-1.

5. AnyWhere
    
    npm install anywhere -g
    
    anywhere 8888
    
    