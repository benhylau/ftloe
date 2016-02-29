---
layout: page
title: Event Announcements
excerpt: "Events organized by for the Love of Ev."
search_omit: true
---

<ul class="post-list">
{% for post in site.categories.events %} 
  <li><article><a href="{{ site.url }}{{ post.url }}"><i class="fa fa-calendar-o"></i> {{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>
