---
layout: post
title: HTML5 Template
category: HTML5
tags: [HTML5]
description: |
  快速创建HTML5 模板文件....
---

###meta元素：

    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content=""&gt;
    &lt;meta name="author" content=""&gt;

###引入css及js文件,低版本浏览器兼容HTML5 及CSS3：


    &lt;!-- Le css &amp; HTML5 shim &amp; CSS3 for IE6-8 support of HTML5 elements &amp; CSS3 --&gt;
    &lt;link href="http://wkylin.github.com/assets/css/base.min.css" rel="stylesheet"&gt;
    &lt;!--[if lt IE 9]&gt;
    &lt;script src="http://wkylin.github.com/assets/js/html5.js" type="text/javascript"&gt;&lt;/script&gt;
    &lt;script src="http://wkylin.github.com/assets/js/IE9.js" type="text/javascript"&gt;&lt;/script&gt;
    &lt;script src="http://wkylin.github.com/assets/js/css3-mediaqueries.js" type="text/javascript"&gt;&lt;/script&gt;
    &lt;script src="http://wkylin.github.com/assets/js/selectivizr-min.js" type="text/javascript"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;

###引入touch icons 及favicon.ico：

   &lt;!-- Le fav and touch icons --&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="144x144"
      href="http://wkylin.github.com/assets/ico/apple-touch-icon-144-precomposed.png"&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="114x114"
      href="http://wkylin.github.com/assets/ico/apple-touch-icon-114-precomposed.png"&gt;
    &lt;link rel="apple-touch-icon-precomposed" sizes="72x72"
      href="http://wkylin.github.com/assets/ico/apple-touch-icon-72-precomposed.png"&gt;
    &lt;link rel="apple-touch-icon-precomposed"
      href="http://wkylin.github.com/assets/ico/apple-touch-icon-57-precomposed.png"&gt;
    &lt;link rel="icon" href="http://wkylin.github.com/assets/ico/favicon.ico" type="image/x-icon"/&gt;
    &lt;link rel="shortcut icon" href="http://wkylin.github.com/assets/ico/favicon.ico" type="image/x-icon"/&gt;


###IE6浏览器相关提示

    &lt;!--[if lt IE 7]&gt;
    &lt;p class="chromeframe"&gt;You are using an outdated browser. &lt;a href="http://browsehappy.com/"&gt;Upgrade your browser today&lt;/a&gt; or &lt;a href="http://www.google.com/chromeframe/?redirect=true"&gt;install Google Chrome Frame&lt;/a&gt; to better experience this site.&lt;/p&gt;
    &lt;![endif]--&gt;

###引入jQuery及base64：

    &lt;script src="http://wkylin.github.com/assets/js/jquery-1.8.3.min.js" type="text/javascript"&gt;&lt;/script&gt;
    &lt;script src="http://wkylin.github.com/assets/js/base64.js" type="text/javascript"&gt;&lt;/script&gt;
    &lt;script type="text/javascript"&gt;
        window.jQuery || document.write('&lt;script type="text/javascript" src="static/js/jquery-1.8.3.min.js"&gt;&lt;\/script&gt;');
    &lt;/script&gt;
    &lt;script type="text/javascript"&gt;
        $(document).ready(function(){

        })
    &lt;/script&gt;



