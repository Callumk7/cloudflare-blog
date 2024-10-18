---
name: Game Master Tabletop RPG Note Taking
shortName: gamemaster
description: Write notes in markdown and connect related entities to always find the note that you need.
coverImageUrl: http://image.com
projectUrl: https://game-master-remix-client.pages.dev
githubUrl: https://github.com/Callumk7/game-master
tags:
  - react
  - remix
  - cloudflare
  - turso
  - typescript
  - react-aria-components
caseStudyUrl: 
related: 
tech:
  - react
  - turso
  - remix
  - cloudflare
  - typescript
wip: false
cvDescription: In order to learn the accessible component library from adobe, I created this project to combine various principles such as optimistic updates, serverless environments and monorepos.
screenshotCount: 5
---
Game Master is a note-taking app aimed at table-top role playing game players. I wanted to provide a platform that provided a clean and simple note taking experience, with an opinionated strategy for note taking for gaming, as well as both an editor client and a wiki-like read-only experience for players. 

I built the initial prototype of the editor and backend using a few technologies that I was excited to try out. These included:

- Cloudflare pages and workers
- TursoDB
- React Aria Components

As I was going to be working on this project solo, I was drawn to the idea of serverless deployment targets, as they offload many traditional dev ops burdens such as load management and scaling up and down based on traffic. In addition, nearly all full stack frameworks these days have nice integrations into the serverless platforms, so I can enjoy features like automatic deployments from git commits, and easy roll back to stable releases. I went for **Cloudflare** because I had already toyed with cloudflare workers in the past and enjoyed the experience, and they have recently been releasing some cool stuff like D2 databases, KV stores, and nice, easy to use APIs for open source AI LLMs. 

**Turso**  was a product I was interested in trying out alongside this, as it was initially selling itself as a kind of serverless database solution. Whilst that messaging has changed, they are essentially a distributed and easily duplicatable SQLite database that can be interacted with through a client, or your ORM of choice. As I was going to be deploying serverless for my prototype, it seemed a good time to try them out, especially considering the generous free tier. 

Finally, I have lots of experience with Radix UI as a headless accessible component library for react, and I wanted to try out an alternative in the headless UI space. React Aria Components is an open source project by Adobe, and so the long term backing makes it an attractive library. The collections API is very interesting, and I was excited to see how it compared to Radix.

# Prototype App

The prototype app (see the `prototype` branch in [the repo](https://github.com/Callumk7/game-master) for the code, or the visit the [deployment on cloudflare](https://game-master-remix-client.pages.dev))

# Current Version

After learning a lot about adobe's components, I re-wrote the product to utilise a node backend to handle all database interactions, and then an 'API' package that wraps my HTTP requests into a nice sdk that I can use in both the remix editor app, the wiki app, and anywhere else I might need it.

## End to End Type Safety

I love typescript, and being able to have type-safe http requests inside the client is a huge productivity boost. In order to achieve that though, it is critical to have a single source of truth between client what the client is expecting to receive, and what the server is sending. By ensuring that that contract is handled in a separate package, I can achieve this whilst reducing runtime validation to the smallest amount required. 

### Setup

The `API` package exports both the client api class, which has all the request methods organised by resource, as well as my zod schemas and entity types that can be used on both the client and the server. The schemas are used to validate the requests on the server, and the `RequestBody` inferred types are used on the client to ensure that the client is sending the correct data at build-time, saving runtime validation costs. 

> [!note] Working with Hono
> Ideally, I would have liked to use a traditional typing strategy for my handlers in hono. In typescript (and most statically typed languages), we write functions like:
> ```ts
> function functionName(arg: TypeOne): TypeTwo {
>   //...
> }
> ```
> The type annotation for the return means that we will get an error if we return anything else. Using hono though, we can't use our package types for this purpose, as we must return a `Response`.
> Instead, I chose to ensure that all the data sent back with `c.json(data)` was of the required type. 

### Client side

The advantage of writing the client like this means that we have a single `api` class that we can use for all our fetches. This can happen on the remix backend (first choice, for SSR and waterfall-reduction), or the client itself inside the react app. It also means that I can use the same package for the wiki app, vastly simplifying the development process there.
