---
author: ChrisNager
comments: true
date: 2012-09-09 22:37:26+00:00
layout: post
slug: box-sizing-for-pseudo-elements
title: Box sizing for pseudo elements
wordpress_id: 207
tags:
- css
---

Ever since I found out about the [hidden gem](http://paulirish.com/2012/box-sizing-border-box-ftw/) `box-sizing:border-box`, I've used it on most all my projects. While fiddling around with `border-box`, I learned the `*` universal selector `box-sizing` declaration didn't apply to my pseudo elements.

So, to apply `box-sizing:border-box` to _everthing_, use:


    
    <code>/* Base styles
       ------------------------------ */
    
    *,
    :before,
    :after {
        -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
                box-sizing: border-box;
    }
    
    
    
    /* ☃
       ------------------------------ */
    
    .☃ {
        margin: 0 auto;
        padding: 8px;
        font-size: 2em;
        text-align: center;
        color: indianred;
        background: lightblue;
    }
    .☃:before,
    .☃:after {
        content: "☃";
        width: 100%;
        border: 8px solid;
        padding: 8px;
        display: block;
        background: seashell;
    }</code>





    
    <code></code>




<!-- more -->

**EDIT:**
I see now that this technique has been mentioned before [a](http://paulirish.com/2012/box-sizing-border-box-ftw/#comment-116128) [few](http://coderwall.com/p/0qti4g) [times](http://css-tricks.com/dont-overthink-it-grids/).

_However_, for the sake of brevity and saving a couple bytes, my suggestion is writing out `:before` and `:after` rather than `*:before` and `*:after` shown in the other examples.
