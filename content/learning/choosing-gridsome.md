---
title: Choosing Gridsome and NetlifyCMS
date: 2019-11-18T17:03:08.663Z
author: Noah Glushien
tags:
  - gridsome
  - netlify
  - netlifycms
cover: ''
---

After my debacle with Ruby and gems, while setting up Jekyll, I decided I needed to try something else. I had only been using Jekyll for a few days but trying something even as simple as changing themes proved to be a hassle. I've been hearing a lot of talk on Twitter about a few other static site generators so I knew that finding something else wasn't going to be too difficult.

Recently I saw that Jake Dohm was giving a talk at VueToronto about using Gridsome. I have a ton of respect for Jake so I figured I would see what all the fuss was about. And I'm really glad I did. Simply put, gridsome is awesome!

## What's So Great About It?

So what's so great about Gridsome? Let me explain...

### Easy Setup

For starters, it's easy to set up, especially when compared to what I went through with Jekyll. As I've said in previous posts, I'm a visual learner. So I turned to [Andre Madarang's YouTube Video][Andre Madarang], *Netlify CMS - Content Management System (using Gridsome)*, to help me get up and running. Without exaggeration, I had everything set up and ready to publish a template article in minutes. Following Andre's instructions to connect Gridsome to NetlifyCMS with auto deploys on Netlify only took a few more minutes.

### Easy Integration

Speaking of Netlify, if you haven't checked them out yet I highly recommend that you do. I have been using Netlify for a few months now for their hosting capabilities as well as their easy-to-use Git deploys. Now I wanted to check out their CMS platform and Gridsome, along with Andre's video, gave me a reason to do so. As much as I may not require a CMS to write my own posts, in fact I'm not using it to write this one, I do like checking products out first hand. Not to mention I may want to recommend it's use to other people in the future. How can I possibly do that if I've never used it myself?

NetlifyCMS provides me with a GUI interface for creating, editing, and deleting posts on my site. It has a secure login that I was able to configure to use my Github credentials, and will actually make updates to my Github repo that I use for my blog. Connecting Gridsome to NetlifyCMS was very easy and I honestly can't say enough great things about both things.

### Written in Vue

Gridsome was written in Vue which is great for someone like me, since I have already been using Vue. From what I have read, Gridsome is to Vue what Gatsby is to React. And I see a lot of love beeing shown for Gatsby, so hopefully I will see the same level of support shown here.

### Works On a Number of Platforms

Whether you host on Netlify, or another platform, Gridsome's got you covered. It offers support for hosting on platforms such as AWS Amplify, Amazon S3, Gitlab Pages, Github Pages, Google Cloud Platform and more. Gridsome also offers support for other CMS's (*sp?*) such as WordPress, Contentful, Storyblok, etc. So, if you already have a blog built with another framework, or hosted on another platform, you can still make the switch to Gridsome.


[Andre Madarang]: https://www.youtube.com/watch?v=ryP1RMA7P9Y