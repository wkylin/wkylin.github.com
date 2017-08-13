---
layout: post
title: HTML5 Template
category: html5
tags: [HTML5]
description: |
  快速创建HTML5 模板文件....
---

###meta元素：

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

###引入css及js文件,低版本浏览器兼容HTML5 及CSS3：


    <!-- Le css &amp; HTML5 shim &amp; CSS3 for IE6-8 support of HTML5 elements &amp; CSS3 -->
    <link href="http://wkylin.github.com/assets/css/base.min.css" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="http://wkylin.github.com/assets/js/html5.js" type="text/javascript"></script>
    <script src="http://wkylin.github.com/assets/js/IE9.js" type="text/javascript"></script>
    <script src="http://wkylin.github.com/assets/js/css3-mediaqueries.js" type="text/javascript"></script>
    <script src="http://wkylin.github.com/assets/js/selectivizr-min.js" type="text/javascript"></script>
    <![endif]-->

###引入touch icons 及favicon.ico：

    <!-- Le fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://wkylin.github.com/assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://wkylin.github.com/assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://wkylin.github.com/assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="http://wkylin.github.com/assets/ico/apple-touch-icon-57-precomposed.png">
    <link rel="icon" href="http://wkylin.github.com/assets/ico/favicon.ico" type="image/x-icon"/>
    <link rel="shortcut icon" href="http://wkylin.github.com/assets/ico/favicon.ico" type="image/x-icon"/>


###IE6浏览器相关提示

    <!--[if lt IE 7]>
    <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
    <![endif]-->

###引入jQuery及base64：

    <script src="http://wkylin.github.com/assets/js/jquery-1.8.3.min.js" type="text/javascript"></script>
    <script src="http://wkylin.github.com/assets/js/base64.js" type="text/javascript"></script>
    <script type="text/javascript">
        window.jQuery || document.write('<script type="text/javascript" src="static/js/jquery-1.8.3.min.js"><\/script>');
    </script>
    <script type="text/javascript">
        $(document).ready(function(){})
    </script>



