---
title: "Zod and a Monorepo: A simple approach to 'Full Stack Typesafety'"
description: Metaframeworks, server components, libraries, generators... There are a thousand and one ways to try and solve typing your data from server to client. Here I want to discuss a simple approach to shared types.
projectShortName: gamemaster
coverImageUrl: https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: 2024-10-17
tags:
  - web
  - typescript
  - monorepos
author:
  name: Callum Kloos
  imageUrl: /avatar-scaled.jpg
---

> [!NOTE] TLDR
> You can use Zod and generated types in a shared package to ensure a single source of truth between client and server applications.

