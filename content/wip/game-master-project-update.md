---
title: Game Master Project Update
description: A log of recent development on the Game Master project, with lessons learnt.
projectShortName: gamemaster
coverImageUrl: https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: 2024-10-18
tags:
  - updates
author:
  name: Callum Kloos
  imageUrl: /avatar-scaled.jpg
---
Game Master is a note-taking app aimed at table-top role playing game players. I wanted to provide a platform that provided a clean and simple note taking experience, with an opinionated strategy for note taking for gaming, as well as both an editor client and a wiki-like read-only experience for players. 

## Prototype
The primary purpose of this project was to serve as a solid vessel to practice my existing skills, and learn new ones. I wanted a complex, highly dynamic full stack project that would touch on a lot of topics across front-end, back-end and devops. I am the kind of person who likes to roll his sleeves up and get my hands dirty, so I decided the best approach would be to just start hacking away. 

I was yet to try out the cloudflare platform, so I targeted a serverless deployment to cloudflare pages for the remix client application. As the project grew, I also developed a dedicated data server with hono, deployed to a cloudflare worker to handle the majority of the interactions with the database. Speaking of databases, I was keen to try out TursoDB - an SQLite based distributed SQL service, as theoretically it would jive well with the serverless architecture I was using. Finally, I was keen to try out the React Aria Components library; which is a set of headless UI components with a thoughtful developer api, and with a focus on user accessibility needs. 

> [!NOTE] See the prototype
> The prototype app (see the `prototype` branch in [the repo](https://github.com/Callumk7/game-master) for the code, or the visit the [deployment on cloudflare](https://game-master-remix-client.pages.dev))

I learnt a lot building out the prototype, and I added a number of features that are likely to make it to the latest version:
1. Image uploads for notes, characters and factions
2. Dynamic flowcharts that show connections between notes and other entities
3. A rich text editor powered by TipTap
4. Folders and Sessions for organising notes into collections

As you would expect, building out these features taught me a lot, and with each I knew how I would improve their implementations if I were to approach the problem again.

In addition, I did not create a project plan before getting started on the product, and as such there were many strange user flows and UX problems that arose because I was prioritising building and learning over design and UX.

Due to this, I decided I would take what I had learnt so far and apply it to a new product version designed from the ground up to solve a real user need. 

## Current Version
