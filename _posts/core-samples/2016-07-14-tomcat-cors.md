---
layout: post
title: Tomcat 部署文件服务器，解决跨域问题
category: Web Front
tags: [tomcat,cors]
description: |
  CORS定义一种跨域访问的机制，可以让AJAX实现跨域访问。CORS 允许一个域上的网络应用向另一个域提交跨域 AJAX 请求。实现此功能非常简单，只需由服务器发送一个响应标头即可。
---

解决前端跨域
======

###同源策略

所谓同源是指域名，协议，端口相同。浏览器执行javascript脚本时，会检查这个脚本属于那个页面，如果不是同源页面，就不会被执行。

###Ajax跨域请求问题

跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对javascript施加的安全限制。

1.Chrome浏览器

 --disable-web-security
 
2.Chrome扩展程序 

--Allow-Control-Allow-Origin
 
3.JSONP (get)

--JSONP由两部分组成：回调函数和数据。会掉函数是响应到来时应该在页面中调用的函数。回调函数的名字一般是在请求中指定的。而数据就是传入回调函数中的JSON数据。

4.Flash

--crossdomain.xml

5.iFrame

--ifr.contentDocument || ifr.contentWindow.document;

--window.name

6.CORS -- Cross-Origin Resource Sharing (跨源资源共享)

--header('Access-Control-Allow-Origin:*'); 

--header('Access-Control-Allow-Methods:POST,GET'); 

--被认可的跨域解决方案

--IE8 ---XDomainRequest 

--XDR请求都是异步的，不能用它来创建同步请求。请求返回之后，会触发load事件，响应数据也会保存在responseText属性中。

7.CSRF -- Cross-Site Request Forgery (跨站点请求伪造)

--未被授权系统有权访问某个资源

8.postMessage

--跨文档消息传输（Cross Document Messaging）

--Window.postMessage()
8.document.domain

--相同主域，子域不同的页面交互信息，可以通过设置document.domain的办法来解决。

9.图像Ping

--图像Ping是与服务器进行简单、单项的跨域通信的一种方式

10.动态script标签（Dynamic Script Tag）

--动态脚本注入

11.服务器代理请求 nginx.conf

    <pre>
        <code>
        http {
          ......
          add_header Access-Control-Allow-Origin *;
          add_header Access-Control-Allow-Headers X-Requested-With;
          add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
          ......
        }
        </code>
    </pre>


Tomcat 部署文件服务器，解决跨域问题
==========


1. 调整项目pom.xml文件

    <pre>
        <code>
        &lt;!--解决tomcat部署跨域问题  --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.thetransactioncompany&lt;/groupId&gt;
            &lt;artifactId&gt;cors-filter&lt;/artifactId&gt;
            &lt;version&gt;2.4&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.thetransactioncompany&lt;/groupId&gt;
            &lt;artifactId&gt;java-property-utils&lt;/artifactId&gt;
            &lt;version&gt;1.9.1&lt;/version&gt;
        &lt;/dependency&gt;
        </code>
    </pre>
    
2. 修改web.xml文件，加入拦截

    <pre>
        <code>&lt;!--解决tomcat部署跨域问题  --&gt;
        &lt;filter&gt;
            &lt;filter-name>CORS&lt;/filter-name&gt;
            &lt;filter-class>com.thetransactioncompany.cors.CORSFilter&lt;/filter-class&gt;
            &lt;init-param&gt;
                &lt;param-name>cors.allowOrigin&lt;/param-name&gt;
                &lt;param-value>*&lt;/param-value&gt;
            &lt;/init-param&gt;
            &lt;init-param&gt;
               &lt;param-name>cors.supportedMethods&lt;/param-name&gt;
                &lt;param-value>GET, POST, HEAD, PUT, DELETE&lt;/param-value&gt;
            &lt;/init-param&gt;
            &lt;init-param&gt;
                &lt;param-name>cors.supportedHeaders&lt;/param-name&gt;
                &lt;param-value>Accept, Origin, X-Requested-With, Content-Type, Last-Modified&lt;/param-value&gt;
            &lt;/init-param&gt;
            &lt;init-param&gt;
                &lt;param-name>cors.exposedHeaders&lt;/param-name&gt;
                &lt;param-value>Set-Cookie&lt;/param-value&gt;
            &lt;/init-param&gt;
            &lt;init-param&gt;
                &lt;param-name>cors.supportsCredentials&lt;/param-name&gt;
                &lt;param-value>true&lt;/param-value&gt;
            &lt;/init-param&gt;
        &lt;/filter&gt;
        &lt;filter-mapping&gt;
            &lt;filter-name>CORS&lt;/filter-name&gt;
            &lt;url-pattern>/*&lt;/url-pattern&gt;
        &lt;/filter-mapping&gt;
        </code>
    </pre>

浏览器同步测试工具: Browsersync
===========
http://www.browsersync.cn/

https://www.browsersync.io/

1.安装

npm install -g browser-sync
2.启动

browser-sync start --proxy "域名"

[BS] Proxying: http://172.18.11.82:8082

[BS] Access URLs:

  Local: http://localhost:3000
  
  External: http://172.18.11.82:3000
  
  UI: http://localhost:3001
  
  UI External: http://172.18.11.82:3001
  


移动端调试：Weinre
============

http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html

1.安装&运行

>npm -g install weinrewe

>weinre --httpPort 8084 --boundHost -all-

2.访问weinre服务器

3.Target Script

拷贝文件到项目中，引用js文件

4.Access Points

 debug client user interface

###参考文档

1.<http://softwareas.com/cross-domain-communication-with-iframes/>

2.<http://blog.csdn.net/qq_19244423/article/details/48266525/>