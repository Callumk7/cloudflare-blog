---
title: Using a client SDK for your own backend for end to end type safety
description: As a solo developer, ensuring type safety between client requests and server responses can yield a huge productivity boost. While many opinionated full stack solutions exist (tRPC, metaframeworks), the same safety can be achieved through the creation of an API client package, and a monorepo.
projectShortName: 
coverImageUrl: https://res.cloudinary.com/practicaldev/image/fetch/s--q6AIFazN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg
date: 2024-10-10
tags:
    - web
    - typescript
    - monorepos
---

End-to-end typesafety is a buzz-phrase that you hear a lot if you spend time around the front-end JavaScript ecosystem. Through the power of Typescript, developers can now utilise powerful IDE features such as autocompletion, static analysis and linting in their project to yield great developer productivity gains. Thanks to 'full stack frameworks', much of this typesafety comes for free. I personally use Remix, which provides loaders to load data on the server, and then a `useLoaderData` hook to access that data from the client. 

```tsx
export const loader = ({params}) => {

    // validate your noteId param here..

    const note = await getNote(params.noteId);

    return json({note})
}

export default function NoteRoute() {
    const {note} = useLoaderData<typeof loader>();

    // the rest of your app..

    return (
        <div>
            <p>{note.title}</p>
        </div>
    )
}
```

In the above example, the type argument in the hook tells Typescript the type of the returned value, and Remix handles the data fetching for you.

With React server components, we get similar static type functionality:

```tsx
// app/notes/[noteId]/page.tsx

export default async function NotePage({ params }: { params: { noteId: string } }) {

    // validate your noteId param here..

    const note = await getNote(params.noteId);

    return <NoteDisplay note={note} />;
}

---

// app/notes/[noteId]/NoteDisplay.tsx

'use client';

export default function NoteDisplay({ note }: { note: Note }) {

    // Client-side logic can go here
    return (
        <div>
            <p>{note.title}</p>
        </div>
    );
}
```

The above examples will give us a fully typed `note` ... provided that the `getNote()` function returns a correctly typed value. If we are using a modern ORM like Prisma or DrizzleORM, this likely comes for free. However, if we need to make an API call to a third party endpoint, we would likely want to do some response validation with something like Zod. We can then apply the type to the response, and handle the exeptions as we deem fit.

But what about the case where we have an API to call, but we own it ourselves? How can we ensure that we are getting the full power of Typescript, without duplicating a lot of the typing and validation work?

> [!NOTE]
> There are a few RPC style solutions that can help with the problem, that are worth exploring if this is a problem space that you are researching:
> - tRPC
> - Hono has an RPC client built in
> - graphQL

## Monorepo Setup

When I was looking for a solution to this problem, I came to the conclusion that there are two main ways of sharing types between two or more apps (such as the client and the server); I could create and publish a package to NPM, or I could create a monorepo. I chose the latter, because in this case it felt like the package was tied very closely to the implementation of the server, and I wanted the two code bases to be contained in the same project. There may be a case to make for going down the package route (say, if your API is publically available), but beyond what I have already said, I won't be discussing the pros and cons here.

Your project will be setup something like this:

```
monorepo/
├── apps/
│   ├── client/
│   │   ├── public/
│   │   ├── src/
│   │   ├── package.json
│   │   └── README.md
│   └── server/
│       ├── src/
│       ├── tests/
│       ├── package.json
│       └── README.md
├── packages/
│   └── api/
│       ├── src/
│       ├── tests/
│       ├── package.json
│       └── README.md
├── package.json
├── README.md
└── .gitignore
```

The above is just an illustration so you get the idea.

### Workflow

When building out the server, I first started by writing out the request call that I would use in the client, inside the api package. The package also has my types inside it, and I can simply assert that the response of the request method will meet the shape of the type. Because I own the server, I can ensure that the returned types are checked at build time by using the same types from the api package.

I also have a zod schema for each request, which the server can use to validate the requests. This means that I have a very structured approach to implementing an api method on the server:

1. Define the api endpoint and the shape of the data that I want to retrieve, as well as the shape of the request body
2. Build the corresponding endpoint on the server, using the zod schema from the package to validate the data the server receives, and using the required type to assert that the data being sent in the response is correct
3. Use the method in the client app as and where I need it

