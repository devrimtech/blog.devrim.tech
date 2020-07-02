---
uuid: cc897e00-b6b5-11ea-9e9b-eb6e79f503c9
title: How to make a blog with Hexo
tags: hexo, programming, blog, frameworks, tutorial
---
###### Written by Kai McCormick
## What is Hexo

[Hexo.io](https://hexo.io) is a blogging framework made by [Tommy Chen](https://github.com/tommy351) in 2012 using Node.js. It has support for plug-ins and themes which allow you to make your blog in any style possible. You start by setting it up in a simple few lines in the CLI and write your post in [markdown](https://www.markdownguide.org/getting-started). 

In fact this blog was made entirely in Hexo.io. My personal use case for it is that other blog sites might charge either the blog maker or the blog reader. While this might not be the case for some others, Hexo fit my demands the best.
## Why do I need to use Hexo

You do not need to use Hexo for your blog, you can use Wordpress, Medium, or Tumblr for your blog. But Hexo gives you total control of the blog and is very easy to customize and setup. Also Hexo is 100% free and relies entirely on [donations](https://opencollective.com/hexo) and volunteers. You can also run it on any machine you want, along with it being directly supported by Github Pages and many options for use on your own domain.

## How do I install Hexo

Installing Hexo is as easy as a few lines in your command line. If this is your first time using the command line (don't be scared as it is very easy to understand how to use it. The first step in installing Hexo is to install npm (node package manager). You will need to install node.js for this but both are very easy to install. You can check if you have these installed by doing `npm -v` and `node -v`. If neither of these commands output anything then follow the instructions at the [npm website](https://nodejs.org/en/). With both of those installed, you just need to run this command, in your terminal. 

`npm install hexo-cli -g`

After running this command, wait until it is finished installing and then run these commands to setup a new folder for you hexo blogs.

`hexo init blog`

`cd blog`

`npm install`

`hexo server`

Those commands may seem confusing but I will explain. The `hexo init blog` creates a folder titled blog and puts all of the files needed for a hexo blog inside of it. `cd blog` is just changing your terminal directory to be within that blog folder. `npm install` installs all of the needed dependencies for your blog from what is listed in the blog folder. `hexo server` runs hexo locally on your machine with the default hexo theme and settings.

## Setting up Hexo
For this step you will need a text editor, the ones that come built in with your computer will be sufficient. If you look inside of your blog folder, you will see these files:

- _config.yml
- package.json
- scaffolds
- source
- themes

The `config_yml` file is the one we will be using. Open it up in your text editor and change it to your liking. You can read more about what each one of these options do and what the default is on the [hexo website](https://hexo.io/docs/configuration).

Once finished, with the editing of the settings for your blog, it is time to create your first blog post.

## Making your first blog post
To make a new blog post you need to type some more termianl commands. The first one is to create the blog post file. This is done by running the command `hexo new` followed by the type of layout and the title. There are three different types of layouts. The layout called draft is for when publishing the blog post, it does not include it until you run a command on it. The layout called post creates a new blog post that will be included when publishing it. The final layout is the page layout that will create a new page for your blog. I reccomend sticking with the draft layout as it is the safest to use. Once you have decided on a layout, run the `hexo new` command but with the layout after it and a title in quotes. Like the following, `hexo new draft "my-great-blog-post"`. This will make a file in the source folder, open up your .md file with your text editor and start typing up your blog post, since it supports [markdown](https://www.markdownguide.org/cheat-sheet), it can have style. Once you have finished writing your blog post it is time to wrap it up.

## Publishing your blog
Once you have saved your blog post, it needs to be viewed. Hexo makes this very easy to do. If you have selected a draft run the following the command,

`hexo publish draft filename`

Run the command but replace the filename with the name of your blog post file, usually ending in the .md. To view your blog post locally just the ame server command as before,

`hexo server`

This will start a local server usually with the link,

`http://localhost:4000/`

Since this is a local link, only you can see it. To make your files ready for posting, just do

`hexo generate`

This will make all of your files ready for posting. From here there should be a folder titled public, inside of it all of the files you need to put it on your website.

## Conclusion
Once you have Hexo setup, making another post is easy as running those same commands. You can trust that this will work because I ran all of the same steps to make this post. Hexo has a great community and offers a lot of different ways to tweak it. This post was only an introduction to the Hexo framework and I hope that you can succeed in your blogs.

<h6 style="color:gray"> Written by Kai McCormick, Published on January 3rd, 2020 </h6>