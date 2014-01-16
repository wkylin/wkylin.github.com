---
layout: post
title: 构建自动化的前端开发流程
category: HTML5
tags: [yeoman, grunt, bower]
description: |
  利用Yeoman/Grunt/Bower/PhantomJS构建自动化的前端开发流程.Yeoman:Modern workflows for modern webapps.GruntJs:The JavaScript Task Runner.Bower:A package manager for the web.
---

![workflows](http://wkylin.github.io/assets/images/workflows.png "workflows")

通常在开发新项目时我们都需要配置工程环境，开发目录，需要下载一些库、框架文件（如 jQuery、Backbone 等），配置编译环境（Less、Sass、Coffeescript等），甚至还要配置单元测试框架，过程非常繁琐，还没开始编码时间就耗了大半天。为了解决这个问题 Paul Irish、Addy Osmani、Sindre Sorhus、Mickael Daniel、Eric Bidelman 和 Yeoman 社区共同开发的一个项目——Yeoman。

Yeoman 是由三个工具的组成：YO、GRUNT、BOWER

+ 1.**YO**:Modern workflows for modern webapps.Yeoman核心工具，项目工程依赖目录和文件生成工具，项目生产环境和编译环境生成工具。
+ 2.**GRUNT**:The JavaScript Task Runner.前端构建工具，jQuery就是使用这个工具打包的。
+ 3.**BOWER**:A package manager for the web. Web 开发的包管理器，概念上类似 npm，npm 专注于 NodeJs 模块，而 bower 专注于 CSS、JavaScript、图像等前端相关内容的管理。
+ 4.**PhantomJS**:A headless WebKit scriptable with a JavaScript API

Yeoman具有以下特性：

+ 1.快速创建骨架应用程序——使用可自定义的模板（例如：HTML5、Boilerplate、Twitter Bootstrap等）、AMD（通过RequireJS）以及其他工具轻松地创建新项目的骨架。
+ 2.自动编译 CoffeeScrip 和 Compass——在做出变更的时候，Yeoman 的 LiveReload 监视进程会自动编译源文件，并刷新浏览器，而不需要你手动执行。
+ 3.自动完善你的脚本——所有脚本都会自动针对 JSHint 运行，从而确保它们遵循语言的最佳实践。
+ 4.内建的预览服务器——你不需要启动自己的 HTTP 服务器。内建的服务器用一条命令就可以启动。
+ 5.非常棒的图像优化——使用 OptPNG 和 JPEGTran 对所有图像做了优化。
+ 6.生成 AppCache 清单——Yeoman 会为你生成应用程序缓存的清单，你只需要构建项目就好。
+ 7.“杀手级”的构建过程——你所做的工作不仅被精简到最少，让你更加专注，为你节省大量工作。
+ 8.集成的包管理——Yeoman 让你可以通过命令行轻松地查找新的包，安装并保持更新，而不需要你打开浏览器。
+ 9.对ES6模块语法的支持——你可以使用最新的 ECMAScript 6 模块语法来编写模块。这还是一种实验性的特性，它会被转换成 eS5，从而你可以在所有流行的浏览器中使用编写的代码。
+ 10.PhantomJS单元测试——你可以通过 PhantomJS 轻松地运行单元测试。当你创建新的应用程序的时候，它还会为你自动创建测试内容的骨架。

请关注以下资料：

###Node.js

1.下载

<http://nodejs.org/>

<http://nodejs.org/download/>

2.安装成功：
>node -v
>npm -v

###Github for windows

<http://windows.github.com/>

<http://msysgit.github.io/>

注意：Run Git from the Windows Command Prompt

###Grunt---The JavaScript Task Runner

<http://gruntjs.com/>

<http://gruntjs.cn/>

<http://www.gruntjs.org>

命令：npm uninstall -g grunt npm install -g grunt-cli

目录： C:\Users\Administrator\AppData\Roaming\npm\node_modules\grunt-cli\bin\grunt C:\Users\Administrator\AppData\Roaming\npm\node_modules\grunt-cli

成功：
    grunt --version

特定目录下安装

命令：npm install grunt --save-dev

参考资料：
<http://markdalgleish.com/2013/01/testing-jquery-plugins-cross-version-with-grunt/>

###Grunt contrib

<https://github.com/gruntjs/grunt-contrib>

###Bower ----A package manager for the web

<http://bower.io/>

<http://sindresorhus.com/bower-components/>

命令：npm install -g bower

目录：C:\Users\Administrator\AppData\Roaming\npm\node_modules\bower

成功：bower --version

参考文章：

<http://blog.fens.me/nodejs-bower-intro/>

###Yeoman ----MODERN WORKFLOWS FOR MODERN WEBAPPS

<http://yeoman.io/>
<http://yeomanjs.org/>

命令：npm install -g yo
目录：C:\Users\Administrator\AppData\Roaming\npm\yo -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\yo\cli.js
      yo@1.0.7-pre.1 C:\Users\Administrator\AppData\Roaming\npm\node_modules\yo


8.PhantomJS-----A headless WebKit scriptable with a JavaScript API

<http://phantomjs.org/>

<http://www.tuicool.com/articles/beeMNj>

<http://www.tuicool.com/articles/yIbeii>

命令：npm install -g phantomjs

目录：C:\Users\Administrator\AppData\Roaming\npm\phantomjs -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\phantomjs\bin\phantomjs
 phantomjs@1.9.2-6 install C:\Users\Administrator\AppData\Roaming\npm\node_modules\phantomjs

成功：phantomjs -v

###Gradle---Build automation evolved

<http://www.gradle.org/>

###Livereload

<http://livereload.com/>

<http://blog.csdn.net/xiongzhengxiang/article/details/12843615>

<http://blog.jaredlaser.com/blog/2013/05/07/using-grunt-contrib-livereload-with-yeomans-grunt-regarde>