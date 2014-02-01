---
author: ChrisNager
comments: false
date: 2012-11-08 19:36:58+00:00
layout: post
slug: natural-curves
title: Natural curves
wordpress_id: 471
categories:
- CSS3
tags:
- border-radius
- css
---

<code></code>






# HAML



    
    
    <code>.natural-curves
        .natural-curves-inner
            …</code>
    



Let your bordered outer `div` determine the background1 and its `border-radius`2 will put a natural curve on the inner `div`.

If you set the background of the inner `div`, you will also need to set its `border-radius`3 and you will lose your natural curves.



# CSS



    
    
    <code>
    .natural-curves {
        border: 0.5em solid;
        border-radius: 1.5em; /* 2 */
        background: lightblue; /* 1 */
        …
    }
    .natural-curves-inner {
        overflow: hidden;
    
    /* 3 */  
    /*
        border-radius: 1em;
        background: burlywood;
    
    */
    }</code>
    
