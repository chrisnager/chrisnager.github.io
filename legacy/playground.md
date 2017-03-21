---
layout: default
title: Playground &middot; chrisnager.com
page-class: page--playground
permalink: /playground/
---

<section class="group">
    <ul class="posts">
        {% for post in site.posts %}
            <li>
                <a href="{{ post.url }}">
                    <p>{{ post.date | date_to_string }}</p>
                    <h1>{{ post.title }}<h1>
                </a>
            </li>
        {% endfor %}
    </ul>
</section>
