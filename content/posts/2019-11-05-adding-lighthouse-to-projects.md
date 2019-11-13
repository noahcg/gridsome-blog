---
title: "The Benefits of Adding Lighthouse Audits to Your Project"
description: "The difficulties I encountered while trying to install Jekyll"
date: 2019-11-05 10:05:17
author: Noah Glushien
tags: ["lighthouse"]
---

Over the last several years, the US Holocaust Memorial Museum has been making efforts to bring all of their web and application development in house. Previously, they had been outsourcing their work for custom projects to external design agencies. Although it was an ambitious goal, the museum knew that in order to achieve it they would need to bring in additional people to add to the list of talented designers and developers they already had. I was the most recent addition to what was to become my current team. I was brought on board in 2017 in the midst of a large department reorganization. By 2018 a new department had formed that would be responsible for, among many things, handling all of the museum’s web design and development needs. This new department is called Museum Experience and Digital Media, or MEDM for short.

MEDM _(pronounced Me-Dum)_ is comprised of experienced professionals in the roles of exhibition development, audiovisual production, digital learning, museum curation, digital content strategy, multimedia, and social media production. My role as a front end developer sits amongst another group that have given ourselves the unofficial label of MEDM-Design. On the team we have UX designers, interactive developers, exhibition designers, full stack developers, and myself. We, along with the application development department, are now responsible for all aspects of the museum’s digital products.

MEDM-Design functions similarly to an internal design agency. A fledgling, almost start-up like, design agency who needed to make decisions about how we should operate. One aspect, that we’re going to look at in detail here, was around testing and reporting. Many of us already do some form of product testing both formal and informal. We conduct thorough user testing both in person and online. We perform browser, device, and operating system testing. We perform manual functional tests for our applications. We started writing up QA spec documents for our products, so anyone can open a browser and perform tests. They don’t need to be tested by the people who designed or developed the application.

While researching other tools to use to get additional feedback on our sites we learned about the Google Chrome auditing tool, Lighthouse. A tool that’s easy to use and provides insightful feedback at the push of a button. You can run multiple audits on your site covering five major categories: Performance, Progressive Web App, Best Practices, Accessibility, and SEO. For us it was a no-brainer, we needed to add these audits to our product testing plan.
There are multiple ways you can use Lighthouse in your products. The easiest way for us right now is using Chrome’s dev tools. When we first started using it, we needed to add it to our individual browsers manually. However, with the most recent upgrades to Chrome, it is now fully baked in. Teams can also choose to use it via the Node command-line tool, or by installing the Chrome extension.

## Getting The Whole Team To Buy In

To give you a quick rundown of how projects go, teams are formed around a project. So, not everyone in MEDM-Design all work on the same project. So when we first tested out Lighthouse and learned of it’s benefits, not everyone was aware. Which meant we needed to find a way to let the whole team know about it and discuss why we should all be using it. Thankfully for us, one thing we are never in short supply of is meetings. During one of our team meetings, the use of Lighthouse was brought up and discussed, and ultimately determined to be a good addition to our testing process.

After the team was on board with the new addition the logical next step was to raise it up the food chain. Getting acceptance from management, up through the director level, was fairly easy. After all, Lighthouse is a free tool and can only help make our products better. How could anyone argue with that? As long as we weren’t adding any unnecessary hardship or extending project deadlines, we had the green light we needed.

## How Did We Survive Without Lighthouse?

Before adding Lighthouse audits to our workflow, testing was very manual. Especially regarding accessibility. Since the museum is a federal institution it is mandatory that we meet specific guidelines. There are other tools out there that will perform tests on your site and report back on the issues that you need to correct. However, using those tools typically means leaving your site and entering your url(s) into other applications. Well, that’s great when your site is already on production. How about if you’re still doing local development? You can’t use those online tools if your url starts with localhost. You also can’t get all of your testing results in one place. Some tools only check for accessibility issues, while others only test your page speed and performance, others only check for SEO related issues. Our team was having to use myriad tools in order to get all of the relevant testing reports.

## We All Agree Lighthouse is Great, Now What?

In the early stages of getting the team up and running, everyone was writing a lot of documentation. We wanted to make sure that we were using formalized processes in order to make sure each product met the same standards. Over time we wrote what we now refer to as the pre-launch and deploy checklist. A checklist of items that we can pre-seed our project backlog with that need to be performed before we push to production. Some of the items on the list include configuring the sitemap, making sure to add Google Tag Manager, configuring the robots.txt file, submitting the site to Google Webmaster Console, and performing security scans. There are many other items on the checklist but there is no need to list out each and every one.

With this list in place, each project team can easily pre-populate the project backlog with these checklist items. Even starting as early as sprint 0. That way we don’t forget to perform these crucial tasks as the project deadline nears. We all know how eager we can get towards the end of a lengthy project. Without a checklist, it can be easy to leave something out.

## Adding Lighthouse Audits Sparked Other Projects

It was easy to see how Lighthouse has been a great addition to our process. From helping define out style guide, formalizing the way that markup is written, gaining a deeper understanding of our search engine rankings and SEO, to optimizing our sites for page speed performance. One great thing that came about as a result of first adopting Lighthouse was a project that became simply named the Page Speed Project (PSP).

In an effort to increase performance, by decreasing page load times across the board, a small team was put together to achieve just that. The key outcomes for that project included:

-   A technical audit that documented the current performance results, and a set of recommendations for reducing loading time by ~5 seconds
-   The deployment of monitoring tools, and a process for ongoing monitoring of the technical performance of their digital products.
-   A prioritized backlog of optimization work to apply recommended optimizations to the products.
-   Implementation of performance improvements for applications that the team identifies as targets for immediate improvement.

The task of deploying monitoring tools first meant having to choose one. So the team started conducting extensive research. Ultimately the team chose to go with New Relic as their APM and to implement additional tools and techniques such as Apache PageSpeed Module, image optimization and scaling, caching tools, and replacing dynamic data generation where appropriate, just to name a few.

## Making Sure We’re Consistent

Since Lighthouse data can vary based on hardware, it’s important to make sure that those of us who run audits are using similar setups. Thankfully the entire team is using Macbook Pros. Most of us are running High Sierra and a few of us are running Mojave. There may be a few stragglers who are still on Sierra but not for much longer. There is a push at the museum to make sure that all Mac users are running Mojave. Which means some of us will be getting an upgrade soon and then performing more audits to see if that affected anything. Also, as long as we’re in the office and not working remotely then we’re all using the same network connection.

Now that I think about it though, I’m curious to see what kind of a difference it makes if I was auditing a site over VPN. How would my reporting differ from someone running an audit on the same site who was directly on the network?

Looks like I have some testing to do.
