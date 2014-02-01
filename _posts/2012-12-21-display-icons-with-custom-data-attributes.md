---
author: ChrisNager
comments: false
date: 2012-12-21 18:39:38+00:00
layout: post
slug: display-icons-with-custom-data-attributes
title: Display icons with custom data-attributes
wordpress_id: 555
categories:
- CSS
tags:
- data-attributes
- html5
- icons
---

<code></code>




Here is a way to set matching icons to your labels all without leaving your HTML.

Just create a new `data-icon` attribute on your tag that contains your label and set it equal to the icon you would like to use.


    
    
    <code><li data-icon=★>Favorites</li></code>
    



And then set your CSS to display the `data-icon` attribute `before` the label.


    
    
    <code>li:before {
        content: attr( data-icon );
    }</code>
    



On a side note: `attr()` works in IE8+.

That's it. Happy holidays.
