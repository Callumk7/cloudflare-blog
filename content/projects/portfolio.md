---
name: "My Developer Portfolio"
shortName: "portfolio"
description: "This website! A space to showcase my completed and in-progress projects, host my blog, and share my photography"
coverImageUrl: "http://image.com"
tags: ["react", "remix"]
caseStudyUrl: "link to article on this project"
githubUrl: "https://github.com/Callumk7/callum-blog-remix"
projectUrl: "https://callum.kloos.com"
related: ["array", "of related", "articles"]
tech: ["react", "remix", "typescript"]
wip: false
cvDescription: "I built an entirely custom portfolio website using React and Remix. I wrote a custom build process which parses markdown content and caches the output into simple JSON for the app to consume on request with response times of less than 7ms."
screenshotCount: 3
---

As a self-taught web developer, I needed a space to showcase my projects and skills to the world. I built this site to do just that.

The site itself is built with the Remix framework (my full stack framework of choice), and all the code is available open source on Github.

I opted for a clean, modern design. I want to keep things simple, and make sure that the content is front and centre. For more thoughts on the design, see my introduction blog post.

I built a custom pipeline for building a JSON data schema from markdown blog posts using `matter` and `remark`. This means I have no external dependencies or database ORM to worry about, and all my inputs are fully typed with Typescript.

Please enjoy exploring, and send me a message with any thoughts that you have.
