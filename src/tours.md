---
layout: default
title: Tours
---

# Our Tours

<div class="cards">
  {% for tour in collections.tours %}
    <div class="card">
      <h2><a href="{{ tour.url }}">{{ tour.data.title }}</a></h2>
      <p>{{ tour.data.description }}</p>
    </div>
  {% endfor %}
</div>
