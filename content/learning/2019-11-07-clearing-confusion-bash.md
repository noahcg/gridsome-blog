---
title: Clearing Up the Confusion Around .bashrc and .bash_profile
cover: /uploads/sai-kiran-anagani-tjbk79tarie-unsplash.jpg
---

After running into issues with my Jekyll install, I really wanted to clear up the confusion I had around my .bashrc and .bash*profile files. During my jekyll install, I was running commands that I knew was going to modify either one, or both, of those files. And I ran them not knowing exactly what they were doing. \_I know, I know. That's really stupid of me*. So today I did some research and here is what I found.

## What are the .bashrc and .bash_profile files?

As their names imply, those are bash files. So, what is a bash? The direct definition from gnu.org is "Bash is the shell, or command language interpreter, for the GNU operating system." Simply put, bash is pretty much your default terminal on a Mac. If you ever use Terminal, and you haven't intentionally set up another terminal shell, then you're most likely using bash.

Your .bashrc and .bash_profile are settings and instructions for your bash terminal shell. Pretty much everything you see in your terminal window is governed by those two files. You can include additional "dot" files if you choose, but you can do a lot with just these two files. If you check the root of your user directory you may already have these files. If you don't, that's not a big deal, you can always create them yourself.

## What is the difference between .bashrc and .bash_profile?

I'm going to answer that question by turning to a YouTube video I watched to help me understand the difference. According to [Corey Schafer's video][corey shafer] the .bash_profile file is used for something called a "login" shell and the .bashrc file is used for "non-login" shells. A quick google search states pretty much the same thing except I see the .bashrc file defined as being for "interactive non login" shells. That may not mean much to you, it definitely didn't mean much to me. For that reason I highly recommend watching Corey's video and his subsequent videos showing how to customize your terminal by modifying those files.

After a friend of mine cleaned up my dot files I no longer have anything in my .bashrc and it hasn't had a single side effect on my terminal. That's what can happen when you don't know what you're doing with those files. I was declaring variables multiple times in each file without knowing it. None of the code made any sense to me.

## Now That I'm No Longer Confused, What's Next?

Now that I'm clear on what those files do I'm no longer going to avoid them. The way my terminal is customized right now is based on dot files other developers wrote. I think the first thing I'm going to try is writing my own customziations. Maybe I'll write another post documenting what I end up with.

[corey shafer]: https://www.youtube.com/watch?v=vDOVEDl2z84&list=PL-osiE80TeTvGhHkpvfmKWOiIPF8UVy6c&index=8
