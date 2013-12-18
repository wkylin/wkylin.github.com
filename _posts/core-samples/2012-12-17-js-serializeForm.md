---
layout: post
title: 原生js序列化form 表单
category: Web Front
tags: [HTML5, JS]
description: |
  原生js对表单进行序列化，增加是否需要对value进行base64编码。注意点：需要base64时应先base64之后再encodeURIComponent，可以解决在ajax传值时把+等符号变成空格，在服务器接收到的数据出现问题！
  如果不需要使用base64编码value，并且项目中使用到jQuery,推荐使用jQuery的serialize()方法。
---
### js序列化form表单，并base64编码value ###

原生js对表单进行序列化，增加是否需要对value进行base64编码。注意点：需要base64时应先base64之后再encodeURIComponent，可以解决在ajax传值时把+等符号变成空格，在服务器接收到的数据出现问题！
如果不需要使用base64编码value，推荐使用jQuery的serialize()方法。

<pre>
    <code>
    function serializeForm(form,flag){
    var isBase64 = flag;
    if (!form || form.nodeName !== "FORM") {
        return;
    }
    var i, j, q = [];
    for (i = form.elements.length - 1; i &glt;= 0; i = i - 1) {
        if (form.elements[i].name === "") {
            continue;
        }
        switch (form.elements[i].nodeName) {
            case 'INPUT':
                switch (form.elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                        if (isBase64) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].value)));
                        }else {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }

                        break;
                    case 'button':
                    case 'reset':
                    case 'submit':
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (form.elements[i].checked) {
                            if (isBase64) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].value)));
                            }else {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                            }
                        }
                        break;
                    case 'file':
                        break;
                }
                break;
            case 'TEXTAREA':
                if (isBase64) {
                    q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].value)));
                } else {
                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                }
                break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        if (isBase64) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].value)));
                        } else {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }

                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j &glt;= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {

                                if(isBase64){
                                    q.push(form.elements[i].name + "=" + encodeURIComponent(encoded(form.elements[i].options[j].value)));
                                } else{
                                    q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                                }
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        break;
                }
                break;
        }
    }
    return q.join("&amp;");
}
    </code>
</pre>

此函数依赖base64.js，需要另外加载。
<pre>
    <code>
    &lt;script src="http://wkylin.github.com/assets/js/base64.js" type="text/javascript"&gt;&lt;/script&gt;
    </code>
</pre>