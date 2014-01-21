---
layout: post
title: 构建自动化的前端开发流程
category: HTML5
tags: [yeoman, grunt, bower]
description: |
  利用Yeoman/Grunt/Bower/PhantomJS构建自动化的前端开发流程.Yeoman:Modern workflows for modern webapps.GruntJs:The JavaScript Task Runner.Bower:A package manager for the web.
---

![workflows](http://wkylin.github.io/assets/images/workflows.png "workflows")

利用Yeoman/Grunt/Bower/PhantomJS构建自动化的前端开发流程.Yeoman 是由三个工具的组成：YO、GRUNT、BOWER.

+ 1.**YO**:Modern workflows for modern webapps.新应用的脚手架，编写你自己的grunt配置文件，并且获取你项目build过程当中可能使用到的grunt tasks。
+ 2.**GruntJs**:The JavaScript Task Runner.主要用来build，预览和测试你的项目，已经内置了很多由Yeoman团队和grunt-contrib提供的task。功能就是前端的ant。
+ 3.**Bower**:A package manager for the web.Web 开发的包管理器，bower 专注于 CSS、JavaScript、图像等前端相关内容的管理,主要用于依赖管理，开发人员不需要手动去管理和下载相应的包，以及处理他们之间的依赖关系。我的理解，就是前端的maven。
+ 4.**PhantomJS**:A headless WebKit scriptable with a JavaScript API


以下为安装时需要的相关工具：

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

http://markdalgleish.com/2013/01/testing-jquery-plugins-cross-version-with-grunt/

###Grunt contrib

https://github.com/gruntjs/grunt-contrib/

###Bower ----A package manager for the web

<http://bower.io/>

http://sindresorhus.com/bower-components/

命令：npm install -g bower

目录：C:\Users\Administrator\AppData\Roaming\npm\node_modules\bower

成功：bower --version

参考文章：

###Yeoman ----MODERN WORKFLOWS FOR MODERN WEBAPPS

<http://yeoman.io/>
<http://yeomanjs.org/>

命令：npm install -g yo
目录：C:\Users\Administrator\AppData\Roaming\npm\yo -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\yo\cli.js
      yo@1.0.7-pre.1 C:\Users\Administrator\AppData\Roaming\npm\node_modules\yo


8.PhantomJS-----A headless WebKit scriptable with a JavaScript API

<http://phantomjs.org/>

http://www.tuicool.com/articles/beeMNj

http://www.tuicool.com/articles/yIbeii

命令：npm install -g phantomjs

目录：C:\Users\Administrator\AppData\Roaming\npm\phantomjs -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\phantomjs\bin\phantomjs
 phantomjs@1.9.2-6 install C:\Users\Administrator\AppData\Roaming\npm\node_modules\phantomjs

成功：phantomjs -v

###Gradle---Build automation evolved

http://www.gradle.org/

###Livereload

<http://livereload.com/>

http://blog.csdn.net/xiongzhengxiang/article/details/12843615

http://blog.jaredlaser.com/blog/2013/05/07/using-grunt-contrib-livereload-with-yeomans-grunt-regarde