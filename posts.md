---
layout: default
title: post index
---

## index of posts

<ul style="text-align:left; display: inline-block;">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>