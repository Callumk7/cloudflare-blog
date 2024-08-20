---
title: Experimenting With Vue
description: First impressions of javascript's second most popular UI library.
projectShortName: 
coverImageUrl: https://res.cloudinary.com/practicaldev/image/fetch/s--q6AIFazN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg
date: 2024-07-16
tags:
  - vue
  - web
---
## What is Vue
Vue.js, often lovingly referred to as just "Vue", is a progressive JavaScript framework for building user interfaces. It's the brainchild of Evan You, who set out to extract the parts he liked about Angular and build something lightweight and flexible.

Vue is like that friend who's always up for anything – it can scale up from a simple library to a full-featured framework, depending on your needs. It's approachable, versatile, and performant, making it a favorite among developers of all experience levels.

```vue
<template>
  <div>{{ greeting }}</div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Hello, Vue!'
    }
  }
}
</script>

```

This simple example showcases Vue's declarative rendering and straightforward component structure.

## React as a Frame of Reference
Before we dive deeper into Vue, let's quickly recap React. React, the popular kid on the block, is a JavaScript library for building user interfaces. It introduced the concept of a virtual DOM and component-based architecture to the masses.

React's component model and unidirectional data flow have become something of an industry standard. It's like the Rosetta Stone of modern frontend development – if you understand React, you've got a solid foundation for understanding many other frameworks.

```jsx
function Greeting() {
  const [greeting, setGreeting] = React.useState('Hello, React!');
  return <div>{greeting}</div>;
}
```

This React component achieves the same result as our Vue example, using hooks for state management.

## Similarities to React
Vue and React are like fraternal twins – they share a lot of DNA but have their own distinct personalities. Both frameworks:

1. Use a virtual DOM for efficient updates
2. Encourage component-based architecture
3. Support unidirectional data flow
4. Have strong ecosystems and community support

Both also have their own CLI tools for project scaffolding, state management solutions (Piñata and Redux), and routing libraries (vue-router and react-router).

## Where Vue Makes Improvements

### Template Syntax
```vue
<template>
  <button @click="incrementCount">Clicks: {{ count }}</button>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    incrementCount() {
      this.count++
    }
  }
}
</script>
```

### Reactivity System
Vue is more granular and efficient. It knows exactly which components need to update when data changes, reducing unnecessary re-renders.

### Directives
Vue provides powerful *directives* like `v-for` and `v-if` that make common tasks a breeze (similar to svelte)

```vue
<template>
  <ul>
    <li v-for="item in items" :key="item.id" v-if="item.isVisible">
      {{ item.name }}
    </li>
  </ul>
</template>
```

### Computed Properties
While React can achieve similar functionality with `useMemo`, Vue's computed properties are more intuitive and require less boilerplate.

```vue
<script>
export default {
  data() {
    return { firstName: 'John', lastName: 'Doe' }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>
```

## DX and the Single File Component
Vue's crown jewel is its Single File Component (SFC) format. It's like a cozy home where template, script, and style all live under one roof. This structure promotes better organisation and makes components more self-contained.

```vue
<template>
  <div class="greeting">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  }
}
</script>

<style scoped>
.greeting {
  color: #42b983;
}
</style>
```

This format is a developer experience (DX) dream. It's easy to reason about, keeps related code close together, and supports scoped styles out of the box. The Vue DevTools are also a joy to use, providing clear insight into your component hierarchy and state.
## Summary
Vue takes many of the best ideas from React and other frameworks, and packages them in a more approachable, flexible format. Its intuitive template syntax, efficient reactivity system, and excellent developer experience make it a strong contender in the frontend framework arena.

While React still holds the crown in terms of market share and job opportunities, Vue is like that cool, efficient colleague who gets things done with less fuss. It's particularly shine in scenarios where you need to gradually adopt a framework into an existing project, or when working with designers and developers who appreciate a gentler learning curve.

In the end, both Vue and React are powerful tools in a UX developer's arsenal. The choice between them often comes down to project requirements, team expertise, and personal preference. But one thing's for sure – if you give Vue a chance, you might just find yourself saying "Oh la la!" to this delightful framework.
