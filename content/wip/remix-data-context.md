---
title: Aligning routes with nested state in Remix 
description: In data intensive applications, we are often faced with a big challenge; how do we ensure that data is not over-fetched, but up to date? When coupling this with Remix's route structure, we can have a real challenge on our hands with the battle for efficiency. Lets break it down.
projectShortName: gamemaster
coverImageUrl: https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
date: 2024-09-24
tags: ["web development", "remix", "data"]
---

It is often good practice to think of application state as a data structure. Lets take a look at an app I have recently been working on:

```ts
type User = {
    id: string,
    name: string, 
    games: Game[]
}

type Game = {
    id: string,
    name: string, 
    notes: Note[]
    characters: Character[]
    factions: Faction[]
}

type Character = {
    id: string,
    name: string, 
    linkedNotes: Note[]
}

type Faction = {
    id: string,
    name: string, 
    linkedNotes: Note[]
}

type Note = {
    id: string,
    name: string, 
    linkedNotes: Note[]
    linkedCharacters: Character[];
    linkedFactions: Faction[]
}
```

As you can see, there is a lot of many-to-many relationships tied up in our app, and even before we dive into any examples, it is easy to imagine the challenges that we might face when we try to model this state in a top-down route based model like Remix.

To start with, lets have a look at the basic structure of the UI of our app. We are going to have a sidebar which serves as our main source of navigation. As such, it is important that we have all our data **up front**, in the lowest level layout route of the app. We are going to want to have access to all of a user's games, and all of those games' nested items. With a little more thought though we can see we have a clear optimisation. We only actually need the names and ids of each entity for the sidebar - we need these to provide the navigation functionality; but all other data is not yet required (although if we wanted to implement a tree-like structure (not unreasonable), then we would need to extend this requirement to include the ids and names of all sub items.)

Now, image we click on one of our `note` links and navigate to the notes route. Here, we are obviously going to need all the data for any given note that relates to the UI. If we had made the decision earlier to load all of our data up front, we could have performed a search algorithm on our central data structure to get this - but instead we are going with the simpler, and at this stage, more performant option - we will use the route loader to get everything we need. So far so good. 

Later on, we realise that in the notes *layout* route, we actually would like to have data on all the notes for a specific game. As you probably noted from the data structure outlined above, our app has the ability to link entities together. In order to do so, we are going to need all of a game's sub entities so that we can build out a grid list for the user to select which item they want to connect. Now, we kind of have this data from our root layout. But this is a very sensible place to fetch exactly what we need - so lets do so. 
