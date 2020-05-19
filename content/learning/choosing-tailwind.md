---
title: Why I Chose Tailwind for My Site
date: 2020-05-19
author: Noah Glushien
tags:
  - tailwind
  - css
  - framework
cover: "/images/posts/tailwind.jpg"
---

Over the years I've worked with Bootstrap, Bootstrap-Vue, and Vuetify and I honestly have a love of all three frameworks. I don't really have anything negative to say about any of them. There is a common element among them, though, that I'm starting to lean away from. They are all large frameworks with relatively large file sizes, yet I only need to use a small portion for my project. Sometimes I only want to use the utilities that each framework comes with. That's where Tailwind comes in. Its a utility based CSS framework.

## Trying Something New

If you've ever used Bootstrap, or other large scale frameworks, then you know how great they can be. They come prebuilt with a ton of features that you can use in your project. The downside is that you may not need, or want, many of those features. Yet here they are increasing the size of your dependency files. With Tailwind you only get the utilities. A large set of prebuilt classes that control a single css property. 

I also wanted to use Tailwind for my site to see what all the hype was about. I've been hearing others in the web industry talk about it on social media. It seemed to be getting some great reviews and it really piqued my interest. I gotta say, that animated example on the Tailwind homepage is quite convincing. You can immediately see some great benefits even before digging into the documentation.

## Unlearning My Old Ways

I'll admit that the first thing I thought about with a utility based framework is how it goes against what I taught myself as a developer. Which is to not overload your markup with tons of classes. The evolution of CSS has allowed us to take advantage of child and sibling selectors to help with that. I learned somewhere along the way that it was a good idea to have clean markup so I just kept following that principle. With Tailwind you're making a trade-off. You're trading the familiar way of using only a few classes, with an unfamiliar way of using many classes. The take way you get from this trade-off, however, is worth it. You get cleaner, more maintainable, styles.

I chose Tailwind was because I knew I was going to build a simple site for myself. I didn't need an entire responsive grid framework. The layout I was going for was basic enough to achieve without the need of a large dependency like Bootstrap. I'm also not using any modals, lightboxes, or tooltips that might require some additional javascript dependencies. So all I need is something lightweight.

Bootstrap 4 comes with additional JS files you need to load to get the full feature set. All in, Boostrap is somewhere around 308kb whereas Tailwind only requires a base stylesheet that is closer to 27kb. That's one network request with Tailwind as opposed to 4 or more with Bootstrap. Then there's the jQuery dependency that Bootstrap has. You can get around that with Bootstrap-Vue (if you're using Vue like I am) but it's still the full framework which I don't need.

## Looking Ahead

I have only been using Tailwind for a few weeks now and I still have a lot to learn. The benefits seem to be worth it already though. I'll be writing more posts regarding Tailwind and the different things I learn about it. It'll be interesting to see how I transition from my old ways to a more modern approach.

