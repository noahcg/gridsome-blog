---
title: "The Trials and Tribulations of Installing Jekyll"
description: "The difficulties I encountered while trying to install Jekyll"
date: 2019-11-06 10:05:17
author: Noah Glushien
tags: ["jekyll"]
---

Wow, was that a pain in the neck. I honestly had no idea that installing Jekyll was going to be so complicated. I also don't know anything about ruby and it _may_ have helped if I did. But I followed the exact steps that are shown in the quick start instructions on the Jekyll homepage. So why didn't it work?

Well to start off I thought it was because didn't have the right permissions. So I tried executing the commands using `sudo`.

Nope!

That didn't help. My terminal would get to a point where it said it was going to install native gem extensions, and that it might take a while. Ok cool, no problem. As long as it actually installs I didn't care how long it took. I was in no rush.

After only a couple of minutes I was met with an error stating

`ERROR: Error installing jekyll:`
`ERROR: Failed to build gem native extension.`

Uh oh, what does that mean? I guess it means it's time to start Googling for solutions. I quickly find out that there are a bunch of people having the same issue. Some people are also using a Mac like I am, others are on Windows, some are on Linux. Let's see what some digging around can tell me.

Some online suggestions on Github issues, or StackOverflow, say that it looks like some ruby packages are missing. Other recommendations are to make sure that I have all of the right build tools in place. But which build tools do I need? I come across another comment saying that Xcode needs to be installed. More specifically, I need the Xcode command line tools. Wait...why would I need to install Xcode, what does that have to do with Jekyll?

Well, since that comment has the most number of likes, and also looks rather simple, let's go with that one. I open the App Store, search for Xcode and click "Get".

Nope!

I don't have the right OS version installed on my mac. Great, now I have to go update my OS to Mojave so I can get Xcode, so I can then install the command line tools, so I can see if this suggestion for installing Jekyll will work. Nothing inefficent about this, not at all.

_Almost two hours later..._

I am now running Mojave, yes in dark mode, and I also have Xcode. Now onto the next step. Running the following command.

`xcode-select --install`

Yay, it runs and I no longer see the message `xcode-select: command not found`. Now onto the next step. The same commentor who said I needed to install the Xcode command line tools says I need to run four commands in terminal that will add some information to my .bashrc file. I'm a bit leary of this only because I'm not quite sure what the .bashrc file does. And I could have sworn I read someone mention on another thread, that I needed to modify my .bash_profile. I'm not even sure what the difference between those two files is.

Okay, I ran those four commands and now I'm told I should be able to install Jekyll. I shouldn't even need to use `sudo`.

Yay, it's working! I kept my fingers crossed when I saw the line `installing native gem extensions` but after a few minutes they installed and the rest of the installation continued. It seemed to take much longer than a typical application install but I finally saw the message I was looking for. The one that says that Jekyll was completely installed.

Next, I did what I usually do after installing an application via the command line. I wanted to make sure that Jekyll was installed correctly so I typed `jekyll -v`. To my disappointment I was met with `jekyll command not found`. At this point I felt the rage inside me about to boil over so I just shut my laptop and left the room.

The next day I get to work and I ask a buddy of mine if he has any experience with Jekyll. I told him about the issues I was having with the installation so he offers to take a look for me. It took him all of five minutes to see what the issue was. All of the steps I had taken before adding the lines to the .bashrc file were correct. I did indeed have to upgrade my OS, I had to get Xcode, and I had to install the Xcode command line tools. However, I should have learned more about the .bashrc file and how to modify it. Actually, I didn't need to modify that at all. I just needed to add a specific line to my PATH, in my .bash_profile, so the correct ruby gems could be found. My buddy modified the file for me and ran the install command for Jekyll.

The install took mere minutes and now I'm up and running.
