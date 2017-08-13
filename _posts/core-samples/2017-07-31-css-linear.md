---
layout: post
title: CSS 多彩边框，多彩文字
category: css3 
tags: [CSS3]
description: |
  CSS 多彩边框，多彩文字
---

### 1. 最终效果图展示

![linear](//wkylin.github.io/assets/images/linear.png "linear")

### 2. CSS 样式文件：

    .linear-border {
        width: 600px;
        padding: 2px;
        border-radius: 4px;
        background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    }
    .linear-box {
        border-radius: 4px;
        background-color:#fff;
        padding:5px;
        text-align:center;
    }
    .linear-text{
        color: #74b959;
        font-size:60px;
        letter-spacing: 3px;
        background: -webkit-linear-gradient(0deg, #40c1aa, #74b959);
        background: -moz-linear-gradient(0deg, #40c1aa, #74b959);
        background: -o-linear-gradient(0deg, #40c1aa, #74b959);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

### 3. HTML markup:

    <div class="linear-border">
        <div class="linear-box">
            <div class='linear-text'>Hello, WKYLIN</div>
        </div>
    </div>

    
    