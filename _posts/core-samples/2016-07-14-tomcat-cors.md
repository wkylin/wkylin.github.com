---
layout: post
title: Tomcat 部署文件服务器，解决跨域问题
category: Web Front
tags: [tomcat,cors]
description: |
  CORS定义一种跨域访问的机制，可以让AJAX实现跨域访问。CORS 允许一个域上的网络应用向另一个域提交跨域 AJAX 请求。实现此功能非常简单，只需由服务器发送一个响应标头即可。
---

解决前端跨域
==========
1. Chrome 浏览器
 --disable-web-security
2. 扩展程序 
 Allow-Control-Allow-Origin
3. JSONP (get)
4. Flash
5. Iframe
6. XHR2  Cross-Origin Resource Sharing
header('Access-Control-Allow-Origin:*'); 
header('Access-Control-Allow-Methods:POST,GET'); 


Tomcat 部署文件服务器，解决跨域问题
==========
http://blog.csdn.net/qq_19244423/article/details/48266525

1.调整项目pom.xml文件
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
 -------------------------------------
       Local: http://localhost:3000
    External: http://172.18.11.82:3000
 -------------------------------------
          UI: http://localhost:3001
 UI External: http://172.18.11.82:3001


移动端调试：Weinre
===========
http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html

1.安装&运行
>npm -g install weinrewe
>weinre --httpPort 8084 --boundHost -all-

2.访问weinre服务器

3.Target Script
拷贝文件到项目中，引用js文件

4.Access Points
 debug client user interface


