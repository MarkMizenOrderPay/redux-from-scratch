# Custom redux

This repo is an example of a basic redux implementation. It's meant for educational purposes, and is not production ready code. PRs are welcome with additional changes, however it's intentionally left without many features as an exercise for developers to implement.

## Getting started

### Prerequisites

- An IDE VS Code
- npm or yarn installed on your machine
- git installed on your machine

### Run dev server

1. clone this repo locally
2. navigate to this repo on your machine and run `npm run install` or `yarn`.
3. run the dev server with `npm run dev` or `yarn dev`.

## Code structure

This repo uses the [Vite vanilla-ts template](https://vitejs.dev/guide/#browser-support) to run the dev server.

The entry file is `./index.html`. All JS loaded in this file as a module (see below) will be loaded onto the page.

```html
<script type="module" src="..."></script>
```

`./src/main.ts` is the entry file for the application.

Inside `./src/classes/Store.ts` file you can find the `Store` class, which implements the redux pattern.

Inside the `./src/store/counter.ts` file can see an example of how you would go about using this class.

## Exercises for the reader

To help get a good understanding of how this works, it is encoraged to fork this and try re-implemeting the store yourself. There are some additional features that you might want to consider adding as well:

- Use the `Store` class to create a todo app. This could be as well as the counter, or instead of.
- Re-implement the Store class as a function (`createStore`) using closures rather than private properties.
- Implement selectors, allowing code to subscribe to _part_ of the state, rather than all of it.
- Implement middlewear, which can be used to cause side-effects when an action is dispatched.
- Implementing persistance using the browsers `localStorage`, so that state is preserved when refreshing the page.


For more of a challenge, you could also try: 
- using the [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) class, implement reducers in a way that doesn't require the use of a switch statement.
