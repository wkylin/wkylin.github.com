---
layout: post
title: 原生js序列化form 表单
category: Web Front
tags: [HTML5, JS]
description: |
  原生js对表单进行序列化，增加是否需要对value进行base64编码。注意点：需要base64时应先base64之后再encodeURIComponent，可以解决在ajax传值时把+等符号变成空格，在服务器接收到的数据出现问题！
  如果不需要使用base64编码value，并且项目中使用到jQuery,推荐使用jQuery的serialize()方法。
---
###js序列化form表单，并base64编码value

原生js对表单进行序列化，增加是否需要对value进行base64编码。注意点：需要base64时应先base64之后再encodeURIComponent，可以解决在ajax传值时把+等符号变成空格，在服务器接收到的数据出现问题！
如果不需要使用base64编码value，推荐使用jQuery的serialize()方法。

<pre>
    <code>
    function serializeForm(form, flag) {
        if (!form || form.nodeName !== "FORM") {
            return false;
        }
        var isBase64 = flag;
        var parts = [], field = null, i, len, j, optLen, option, optValue;
        for (i = 0, len = form.elements.length; i &lt; len; i++) {
            field = form.elements[i];
            switch (field.type) {
                case "select-one":
                case "select-multiple":
                    if (field.name.length) {
                        for (j = 0, optLen = field.options.length; j &lt; optLen; j++) {
                            option = field.options[j];
                            if (option.selected) {
                                optValue = "";
                                if (option.hasAttribute) {
                                    optValue = (option.hasAttribute("value") ? option.value : option.text);
                                } else {
                                    optValue = (option.attributes["value"].specified ? option.value : option.text);
                                }
                                if (isBase64) {
                                    parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(Base64.encode(optValue)));
                                } else {
                                    parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                                }
                            }
                        }
                    }
                    break;
                case "undefined":
                case "file":
                case "submit":
                case "reset":
                case "button":
                    break;
                case "radio":
                case "checkbox":
                    if (!field.checked) {
                        break;
                    }
                default:
                    if (field.name.length) {
                        if (isBase64) {
                            parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(Base64.encode(field.value)));
                        } else {
                            parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
                        }
                    }
            }
        }
        return parts.join("&amp;");
    }
    </code>
</pre>

此函数依赖base64.js，需要另外加载。
<pre>
    <code>
    &lt;script src="http://wkylin.github.com/assets/js/base64.js" type="text/javascript"&gt;&lt;/script&gt;
    </code>
</pre>