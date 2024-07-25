---
name: playQ Videogame Playlist Manager
shortName: playq
description: Create and share playlists to keep track of what you have been playing
coverImageUrl: http://image.com
projectUrl: https://playq.xyz
githubUrl: https://github.com/Callumk7/frontline-v2-remix
tags:
  - react
  - remix
  - cloudflare
  - supabase
  - typescript
caseStudyUrl: /blog/introducing-playq-a-cuttingedge-videogame-playlist-manager
related: []
tech:
  - react
  - postgres
  - remix
  - supabase
  - nodejs
  - typescript
  - cloudflare
wip: false
cvDescription: I built a playlist management solution that supports server side rendering (SSR), user authentication, aggregated scores and ratings, and a user activity feed. The app uses React and Remix as the full stack framework, with some additional asyncronous tasks offloaded to a cloudflare application.
screenshotCount: 3
---
I built playQ to put together a complex CRUD application from scratch. The product is built using React, Radix components, Postgres managed by Supabase on the backend with Drizzle as the ORM. State is almost entirely managed through Remix's loaders and actions with some component level `useState` where required. This ensures that I have a good level of consistency with the backend when making mutations, but comes with some additional complexity when implementing optimistic updates in the UI.  

# Features

| Feature                                                                                     | Description |
| ------------------------------------------------------------------------------------------- | ----------- |
| Activity Feed                                                                               |             |
| Create, edit, and remove playlists                                                          |             |
| Add games to a collection                                                                   |             |
| Track played and completed progress                                                         |             |
| Table and grid views for playlists and collections                                          |             |
| An integrated external (IGDB) and internal (owned database) search for better cache control |             |
| Server rendered components (no waterfalls)                                                  |             |
| Search, filter, and sort functionality                                                      |             |
| Friends, Comments                                                                           |             |
| User authentication                                                                         |             |

PlayQ is a game management application that allows users to create and track lists of video games, known as playlists. It provides a comprehensive platform for users to keep track of games they've played, want to play, or are currently playing.

## playQ - A Learning Project

PlayQ is not just a game playlist management app, it's also a comprehensive learning project that incorporates a variety of advanced technologies:

**Supabase** - PlayQ uses Supabase for authentication and database management. Supabase is an open-source Firebase alternative that replicates some of its features like real-time subscriptions and auto-generated APIs, while offering the versatility of PostgreSQL.

**Remix and React** - The user interface (UI), routing, and data loading are built with Remix and React. Remix is a powerful web framework for React that priorities user experience, while React facilitates building reusable UI components efficiently.

**DrizzleORM** - The app's Object-Relational Mapping (ORM) is handled by DrizzleORM. With DrizzleORM, JavaScript objects are mapped to database tables, simplifying data operations like inserting, updating, or querying data.

**Radix-UI and Shad/cn Inspired Components** - To further refine the user interface, the app uses Radix-UI, a library of low-level, accessible and unstyled UI components for building high-quality web interfaces. The UI design is also influenced by ShaD/CN styled-components, favouring a modern and minimalist aesthetic.

By using these technologies, PlayQ showcases how sophisticated tech stacks can be combined for efficient coding practices and superior user experience.