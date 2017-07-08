---
layout: post
title: Tomcat 部署文件服务器，解决跨域问题
category: Web Front
tags: [tomcat,cors]
description: |
  CORS定义一种跨域访问的机制，可以让AJAX实现跨域访问。CORS 允许一个域上的网络应用向另一个域提交跨域 AJAX 请求。实现此功能非常简单，只需由服务器发送一个响应标头即可。
---

跨域--前后端解决方案
===


URL:统一资源定位符
===

完整的、带有授权部分的普通统一资源标志符语法：协议://用户名:密码@子域名.域名.顶级域名:端口号/目录/文件名.文件后缀?参数=值#标志


同源策略(Same origin policy)
===

所谓同源是指域名，协议，端口相同。浏览器执行javascript脚本时，会检查这个脚本属于那个页面，如果不是同源页面，就不会被执行。

Ajax跨域请求问题
===

跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对javascript施加的安全限制。

1.Chrome浏览器

 --allow-file-access-from-files --disable-web-security
 
 "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files --disable-web-security

 "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security -user-data-dir=D:\MyChromeDevUserData
 
2.Chrome扩展程序 

--Allow-Control-Allow-Origin
 
3.JSONP 

--JSONP 是一种非官方跨域数据交互协议，类似接头方式，是信息交换的约定方法

--JSONP由两部分组成：回调函数和数据。回调函数是响应到来时应该在页面中调用的函数。回调函数的名字一般是在请求中指定的。而数据就是传入回调函数中的JSON数据。

--它的原理在于浏览器请求 script 资源不受同源策略限制，并且请求到 script 资源后立即执行。

10.动态script标签（Dynamic Script Tag）

--动态脚本注入

--script标签可以加载并执行其他域的javascript，通过script标记来动态加载其他域的资源。

4.Flash URLLoader

--crossdomain.xml

5.iFrame/window.name

--ifr.contentDocument || ifr.contentWindow.document;

--当该window的location变化，然后重新加载，它的name属性可以依然保持不变。

6.CORS -- Cross-Origin Resource Sharing (跨域资源共享)

--Access-Control-Allow-Origin:* : 表明它允许所有域发起跨域请求

--Access-Control-Allow-Methods:POST,GET,PUT,DELETE : 表明它允许GET、POST、PUT、DELETE的外域请求

--Access-Control-Allow-Headers:x-requested-with,content-type: 表明它允许跨域请求包含content-type头

--Access-Control-Max-Age: 3628800 : 表明在3628800秒内，不需要再发送预检验请求，可以缓存该结果

--被认可的跨域解决方案

--它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

--首先来说 CORS 需要浏览器和服务端同时支持的，对于兼容性来说主要是ie10+，其它现代浏览器都是支持的。

--通过向http的请求报文和响应报文里面加入相应的标识告诉浏览器它能访问哪些域名的请求

--CORS标准强烈要求 浏览器必须先以 OPTIONS 请求方式发送一个预请求(preflight request)，从而获知服务器端对跨源请求所支持 HTTP 方法。

--x-requested-with用来判断客户端的请求是Ajax请求还是其他请求

--jquery.support.cors

--IE8/IE9 ---XDomainRequest

--XDR请求都是异步的，不能用它来创建同步请求。请求返回之后，会触发load事件，响应数据也会保存在responseText属性中。

7.CSRF -- Cross-Site Request Forgery (跨站点请求伪造)

--未被授权系统有权访问某个资源

8.[HTML5] postMessage

--跨文档消息传输（Cross Document Messaging）

--postMessage的作用就是传递数据

--onmessage的作用就是接收数据

windowObj: 接受消息的 Window 对象。

message: 在最新的浏览器中可以是对象。

targetOrigin: 目标的源，* 表示任意。

8.document.domain

--相同主域，子域不同的页面交互信息，可以通过设置document.domain的办法来解决。

--前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致。

9.图像Ping

--图像Ping是与服务器进行简单、单项的跨域通信的一种方式

11.Nginx反向代理

    <pre>
        <code>
            location ~ ^/fund-app/.*$ {
                default_type text/plain;
                proxy_pass http://172.18.11.82:8083$request_uri;
            }
    
            location ~ ^/fund-web-app/.*$ {
                default_type text/plain;
                proxy_pass http://172.18.11.82:8080$request_uri;
            }
        </code>
    </pre>

--nginx服务器欺骗了浏览器，让它认为这是同源调用，从而解决了浏览器的跨域问题。

--又通过重写url，欺骗了真实的服务器，让它以为这个http请求是直接来自于用户浏览器的。


12.CSST (CSS Text Transformation)
   
   一种用 CSS 跨域传输文本的方案。相比 JSONP 更为安全，不需要执行跨站脚本。
   
   原理：通过读取 CSS3 content 属性获取传送内容。
   
   优点：相比 JSONP 更为安全，不需要执行跨站脚本。
   
   缺点：没有 JSONP 适配广，CSST 依赖支持 CSS3 的浏览器。
   

13.add CORS support to server

--CORS on ExpressJS <http://enable-cors.org/server_expressjs.html>

--CORS on Meteor <http://enable-cors.org/server_meteor.html>

--CORS on Nginx <http://enable-cors.org/server_nginx.html>

--CORS on Tomcat <http://enable-cors.org/server_tomcat.html>

--CORS on Apache <http://enable-cors.org/server_apache.html>

--CORS on App Engine <http://enable-cors.org/server_appengine.html>

Tomcat部署文件服务器，解决跨域问题
===

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

浏览器同步测试工具:Browsersync
===

<http://www.browsersync.cn/>

<https://www.browsersync.io/>

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
===

<http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html>

1.安装&运行

>npm -g install weinrewe

>weinre --httpPort 8084 --boundHost -all-

2.访问weinre服务器

3.Target Script

拷贝文件到项目中，引用js文件

4.Access Points

 debug client user interface

参考文档
===
1.CROSS-DOMAIN COMMUNICATION WITH IFRAMES

<http://softwareas.com/cross-domain-communication-with-iframes/>

2.tomcat7部署文件服务器，解决跨域问题

<http://blog.csdn.net/qq_19244423/article/details/48266525/>

3.跨域资源共享 CORS

<http://qiutc.me/post/cross-domain-collections.html>

4.<http://www.caniuse.com/>

5.SpringMvc+AngularJS通过CORS实现跨域方案

<http://www.tuicool.com/articles/umymmqY>

6.Angular通过CORS实现跨域方案

<http://developer.51cto.com/art/201408/448615.htm>

7.AngularJS实现跨域请求

<http://www.bkjia.com/Javascript/977935.html>

8.跨域资源共享 CORS 详解

<http://www.ruanyifeng.com/blog/2016/04/cors.html>

9.https://www.w3.org/TR/cors/

<https://www.w3.org/TR/cors/>

10.CSST (CSS Text Transformation)

<https://github.com/zswang/csst>

11.Spring通过CORS协议解决跨域问题/

<http://blog.kbiao.me/2016/05/14/Spring通过CORS协议解决跨域问题/>

12.CORS实现跨域时授权问题（401错误）的解决

<http://blog.kbiao.me/2016/05/21/CORS实现跨域时授权问题（401错误）的解决/>

13.前后端分离，ajax前端跨域访问后端

<http://blog.csdn.net/u014001866/article/details/50557294/>

14.add CORS support to server

<http://enable-cors.org/server.html/>

15.HTTP访问控制(CORS)

<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS/>