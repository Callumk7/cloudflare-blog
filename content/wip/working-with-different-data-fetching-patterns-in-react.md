---
title: Working With Different Data Fetching Patterns In React
description: React is a framework designed from the very start to favour composition. So how do we pair this with our data?
projectShortName: gamemaster
coverImageUrl: http://image.com
date: 2024-06-20
tags:
  - data
  - react
  - remix
author:
  name: Callum Kloos
  imageUrl: /avatar-scaled.jpg
---
I have been favouring Remix as my web framework of choice, and as such most of my data fetching patterns lean into what the framework expects from me as a developer; the loader, action pattern. This means that my web apps are structured from the route level, and data is fetched with respect to routes. This works great, but it means that our data is tied quite closely to the route that we are in. However there are times that this is not ideal - we might want to use app at many places within our app, or we might not want to fetch data on the server at all, waterfalls are not always bad.
