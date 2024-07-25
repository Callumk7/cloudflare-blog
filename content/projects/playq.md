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
  - supabase
  - typescript
  - flydotio
caseStudyUrl: /blog/introducing-playq-a-cuttingedge-videogame-playlist-manager
related: 
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
I built **playQ**, a complex CRUD application designed to manage video game collections and playlists. The application leverages modern web technologies to provide a seamless user experience for managing and exploring video games.

**Features**

- **User Authentication**: Secure user login and registration powered by Supabase.
- **Database Search and Filtering**: Efficient search functionality to find games in the database.
- **Personal Collections**: Save and organise games into personal collections.
- **Playlists**: Create, edit, and manage playlists of games.
- **Social Features**: Find and follow other users, track their playlists, and see their game progress.
- **Activity Feed**: Highlights key activities of friends.
- **Comment System**: Comment on games, playlists, and user profiles.
- **Game Discovery**: Explore games based on popularity and user ratings.
- **Media Integration**: Video game artwork and screenshots provided by IGDB.

**Technology Used**

**Supabase**
Supabase is utilised for authentication and database management. It offers real-time subscriptions and auto-generated APIs, providing the versatility of PostgreSQL while replicating some Firebase features.

**Remix and React**
The UI, routing, and data loading are built with Remix and React. Remix enhances user experience with server-side rendering on initial load and efficient data fetching for client-side navigation.

**DrizzleORM**
DrizzleORM handles the app's Object-Relational Mapping (ORM). It simplifies data operations like inserting, updating, or querying data, and provides robust tools for managing database schema migrations.

**Radix-UI and Shadcn Inspired Components**
The app uses Radix-UI for low-level, accessible, and unstyled UI components, offering a developer-friendly declarative API. The UI design is influenced by Shadcn styled-components, promoting a modern and minimalist aesthetic.

**Tailwind CSS**
Tailwind CSS is used for atomic styling with utility classes. It integrates well with Radix and can be combined with conditional class libraries like clsx and class-variance-authority to rapidly build expressive design systems.

[**Fly.io**](http://Fly.io)
The application is deployed on [Fly.io](http://Fly.io), chosen for its easy deployment, scalability, and serverful runtime, which fully utilises Node.js's capabilities.

**Cloudflare Workers**
Serverless functions are employed for asynchronous tasks. A custom API accessed via a Cloudflare Worker offloads large writes to the database, ensuring smooth user flow when saving game data.

