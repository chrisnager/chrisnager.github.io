---
author: ChrisNager
comments: false
date: 2012-10-18 19:58:08+00:00
layout: post
slug: touchable-textures-with-css-can-you-feel-me
title: Touchable textures with CSS - can you feel me?
wordpress_id: 264
categories:
- Future CSS
post_format:
- Standard
tags:
- css
- haptics
- textures
---

[![Touchable cat drawing](http://chrisnager.com/assets/touch-cat-2.png)](http://chrisnager.com/assets/touch-cat-2.png)





# Touch is the simplest and one of the most powerful forms of communication.



In this article, I will take a look into the possible future of CSS, the presentation layer of the web. I will be exploring touchable textures and how they could be applied in CSS to texture-enabled devices. By textures, I'm referring to the feeling of three dimensional surfaces like, smooth or bumpy, applied to a two dimensional surface of a device (or future 3D surfaces). Though this type of technology may not be readily available today, it's certainly fun to imagine how texture styles may be implemented.



**Experimental code ahead.** The following code doesn't exist…yet.



My (rather crude) proposal is for a `texture` property in CSS:


    
    
    <code>.surface {
        texture: smooth;
    }</code>
    



<!-- more -->

Of course, we would need to include our browser specific versions: ;)


    
    
    <code>.surface {
        -webkit-texture: smooth;
         -khtml-texture: smooth;
           -moz-texture: smooth;
            -ms-texture: smooth;
             -o-texture: smooth;
                texture: smooth;
    }</code>
    






# Properties



Possible `texture` properties (most ranging from 0 to 1, similar to `opacity`):


    
    
    <code>.surface {
        texture-temperature: cool | warm | 77°F | 25°C;
        texture-adhesion: 0.15;
        texture-hardness: 1;
        texture-roughness: 0.3;
        texture-malleability: 0.6;
        texture-viscosity: 0.75;
        texture-density: 0.3;
    }</code>
    



In shorthand, you'd only include the properties that are necessary (similar to `transform` values):


    
    
    <code>.surface {
        texture: temperature(25°C) adhesion(0.75) roughness(0.4);
    }</code>
    



And store your custom `texture` for reuse (similar to @keyframes):


    
    
    <code>
    @texture grippy {
        texture: adhesion(1) roughness(0.5);
    }
    
    ::-webkit-resizer {
        texture: grippy;
    }</code>
    






# Pre-defined values



The `texture` values would have standard, pre-defined value names as strings the same way we already have color values like `cadetblue` and transition values like `ease-in-out`.


    
    
    <code>texture: smooth | course | grainy | sharp | raised | bumpy | sticky | fabric | glass | metallic | rubbery | depressed | detect* | inherit;</code>
    



*`detect` would choose the best texture based on the look of the element.

Browsers may handle these defaults differently, so I assume we could end up with vendor-prefixed values like `-webkit-smooth` as well.



* * *



The ability to build out the 3D surfaces of your textures would be possible through the use of technologies like `WebGL`*, `svg3d`, and possibly `matrix3d` (similar to how the CSS `transform` property works).

*Texture could be implemented with WebGL something like [this](http://www.webdev20.pl/skins/default/js/demos/3d_grapher/webgl_ploter.html).   
_[Credit goes to [Małgorzata Jatczyk](https://plus.google.com/118328547579245186440/posts) for this awesome experiment]._




# Enhance



These styles would work perfectly when designing with progressive enhancement in mind because browsers that couldn't read the `texture` property, would simply ignore it (just like `rgba` colors or `opacity`). The `texture` property could be feature-detected in JavaScript with something like [Modernizr](http://modernizr.com/) to check if the device is able to apply textures. Apps that depend on touchable textures may need to offer other ways of handling functionality on non-texture-enabled devices.


    
    
    <code>if (!Modernizr.textures) {
        // Non-texture-based solution here
    }
    
    .no-textures {
        /* Non-texture-based CSS solution here */
    }</code>
    






# Putting `texture` to use



These textures may start off being implemented in a rather dull way at first or considered more novelty than practical, but over time devices would most assuredly be able to render complex 3D textures. Here are some ways developers could use textures.




## Accessibility



Touchable textures would open up a whole new level of accessibility. Everyday smartphones and tablets could become much more powerful assistive devices.

We could bring Braille to mobile devices:


    
    
    <code>.assistive-touch-device {
        texture: smooth;
    }
    .assistive-touch-device-text {
        font-family: Braille;
        texture: raised*;
    }</code>
    



*`raised` would represent a two dimensional texture that is raised slightly off the page like an embossed business card.



* * *



Typing on your on-screen tablet keyboard:






ASDFGHJKL;





    
    
    <code>.key {
        …
        texture: smooth;
    }
    .key:active {
        texture: pressed;
    }
    .f-key:after,
    .j-key:after {
        content: "·";
        …
        texture: raised;
    }</code>
    






## Gaming



Touchable textures in games would be pretty crazy.

Think about a game where the player rubs a metallic, somewhat adhesive surface until it reveals a smooth plastic texture that unveils a graphic or number, similar to how someone would scratch a lottery ticket to see if they'd won.

Or how riding on a sidewalk in a skateboarding game might be written:


    
    
    <code>@texture concrete {
        texture: temperature(85°F) hardness(1) roughness(1);
    }
    @keyframes riding-on-a-sidewalk-square {
        0%,
        89%,
        91%,
        99% { texture: concrete; };
        90%,
        100% { texture: bumpy; }
    }
    
    .riding .sidewalk-square {
        animation: riding-on-a-sidewalk-square 1s;
    }</code>
    






## Usability



You could engage on a deeper emotional level with your users through the textures of your buttons:


    
    
    <code>.btn-success {
        texture: temperature(warm) roughness(0);
    }
    .btn-danger {
        texture: temperature(cold) roughness(1);
    }</code>
    






# Onward!



My examples are simple implementations of my proposed `texture` property. My hope is by this point you've thought of many new ways CSS textures could be used and maybe better ways it could be implemented.

The advancement of the web lies in our hands, but more importantly in our imagination.



* * *



EDIT: [Looks like touchable texture technology is on its way!](http://www.youtube.com/watch?v=g7fmAxOVOmk&noredirect=1)
