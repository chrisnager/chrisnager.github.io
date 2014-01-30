---
layout: post
title:  "Simple vertical centering with CSS"
date:   2014-01-10 17:23:37
categories: vertical centering css
---

I had an epiphany yesterday. An inline element, when set to vertical-align: middle, nested inside a block-level element causes the content in the block level element to center perfectly.


Take, for example, an image with text next to it. To vertically center that text relative to the image’s height, you would need to add vertical-align: middle to the img.

{% highlight html %}
<div><img src="logo.png" style="vertical-align:middle"> This is my logo.</div>
{% endhighlight %}
