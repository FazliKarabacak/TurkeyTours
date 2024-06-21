---
layout: default
title: Blogs
---

# Our Blogs

<div class="cards">
  {% for blog in collections.blogs %}
    <div class="card">
      <h2><a href="{{ blog.url }}">{{ blog.data.title }}</a></h2>
      <p>{{ blog.data.description }}</p>
    </div>
  {% endfor %}
</div>
