---
title: PlayQ Developer Update
description: A brief reflection on my time building playQ.
projectShortName: playq
coverImageUrl: https://res.cloudinary.com/practicaldev/image/fetch/s--q6AIFazN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg
date: 2024-07-16
tags: ["web development", "updates"]
---

Welcome to the first, (and probably the last.. read on) developer update of my playQ playlist project.

> [!NOTE] Going Forward...
> This is something that I want to do more, going forward, for all my projects. I am yet to decide if this will be done on a per-project basis, or in a time-based basis. But I want to practice working in public, and having that extra level of accountability.

I am going to look into the recent changes that I have made to this project to better prepare it as a portfolio project to present to potential employers. Having used this project as a workbench to tinker and learn the trade - I had left it in quite a state. This is not something I have much shame for, as the purpose of this project was always to be a vessel through which I could apply what I was studying to a practical product. It was never meant to be a production grade piece of software, nor was it working to a set of well researched specifications. Don't get me wrong, I wish it was a shining spectical of a product with well designed features and a beautiful code base! But It has served its purpose admirally, and I feel like I have polished it up enough such that one can see what I can do and how I can build a modern application; even if a big refactor is clearly required if there was ever going to be more than a single developer working on it.

## Looking at the changes
I kept all these changes on a separate branch, to compare the updates that I have made. Doing this has shown me how large PRs into `main` are terrible. Thankfully, I have been incrementally working on this new branch, but if I had to merge these +-4000 lines, it would be grim.

- Finish off basic friends functionality
- Remove email confirmation on signup
- Start using Remix's context for route-fetched data
- Write a simple but effective wrapper for the IGDB client
- Move search state to the server (thanks to the client)
- Remove a heap of unfinished features
- Move functionality out of cloudflare function into the main application

## Why Were things weird?
This project is mostly for me to learn a heap of different aspects of full-stack development. In terms of scope, the app idea is small enough to be move quickly, but fully featured enough to touch on nearly all the aspects I wanted to cover in a 'real world' project. However, because my goal was to learn different libraries and best practices, it meant that the project quickly grew to a big mess of different libraries that I was testing out. Each feature often had its own dependencies, and my solutions were often overlapping. As such, the project became pretty bloated, and there is a lot of scope for cleaning things up. 

### What is missing?
TESTS! The project really needs some tests so that I can move faster when refactoring. They are the single biggest missing aspect, and it has taught me that I really want to make sure I have a well tested application moving forward with my other projects. They are an up-front effort, but the payoff has become very clear.

## Done, for now
I have worked on this project on and off for about a year now as my main outlet for applying things that I have learnt. It was my first #Remix project (and indeed my first Next app router project before that), and at various points in its life it has played with several different state management libraries, serverless deployments, various auth solutions, and I toyed with extracting the entire backend logic to a separate application. 

For now though, I am going to move on and apply what I know to something new. One side effect of this approach has been a really important learning point:

> Good quality code is the most important thing.

By moving fast and leaving a mess, my code has become quite difficult, and quite unenjoyable to work with. It is at a stage now where I feel that I should just re-write the whole thing from scratch; indeed, I think that by doing so the whole project would move at a much quicker pace. So why not do that? Well, I have worked on this for a decent length of time now, and I think it is time to take what I have learnt and start something else - if I am going to have to re-write this, why not?
