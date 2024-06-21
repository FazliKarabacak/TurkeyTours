---
layout: default
title: Blogs
permalink: /TurkeyTours/blogs/
---

# Our Blogs

<div class="cards">
  {% for blog in collections.blogs %}
    <div class="card">
      <h2><a href="{{ baseurl }}{{ blog.url }}">{{ blog.data.title }}</a></h2>
      <p>{{ blog.data.description }}</p>
    </div>
  {% endfor %}
</div>
