---
layout: page
title : Site Map
#group: navigation
header: Site Map
info: 网站地图
---
##Pages
<ul class="map-pages">
    {% for page in site.pages %}
    <li><a href="{{site.production_url}}{{ page.url }}">{{ page.title }}</a></li>
    {% endfor %}
</ul>
##Posts
<ul class="map-posts">
      {% for post in site.posts %}
      <li><a href="{{site.production_url}}{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
</ul>

