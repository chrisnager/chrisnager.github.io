---
layout: default
title: Playground &middot; chrisnager.com
page-class: page--playground
permalink: /playground/
---

<section class="group">
    <div class="inner">
        <ul class="posts">

{% for post in site.posts %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

        </ul>
    </div>
</section>
