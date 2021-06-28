# Getting Started guide

In the project directory, you can run

- `yarn start` to start localy
- `yarn test` to run tests

**Dont Forget to run `yarn` or `npm install` first**

# Project Structure

This project was bootstrapped with `Create React App` with Typescript template, source code lives under `src` folder
`__mock__` folder contains mocked api response for testing purpose and `testUtils` are shared functions between all test files.

## Src

- components: contains all react components such as `snackbar`, `AppHeader`, etc.
  - @ui: contains atomic components inherited only from `styled-components`
- pages: contains all pages which has been handled by `react-router`
- hooks: contains custom react hooks
- routes: routes definition
- services: contains pokemonService which makes api calls to fetch pokemons data
- store: everything related to redux

# Libraries

I useed most common libraries such as `react-router`, `react-redux`, `react-query` and `styled-component`.

- `react-router` is the best routing library available.
- `react-redux` alongside `redux-persist` is used to handle favorite list, i could use `useContext` with `localstorage` but i choose to have redux becuse of it's flexible and extendble, also we can't use context for states with high change rate.
- `react-query` has been used for handlding api calls from pokemon service, which gives us a nice and clean way to make api calls, under the hood it handles caching and state managment.
- `styled-component` has been used to give css styles to my component, it's a great and well known library which supports typescript perfectly, which keeps components clean and all in one place which makes the code far more readble.

# Challenges

I had a major challenges over generation filter. i wanted it to be nice and clean but on the other hand the api has not any feature that gives me the ability to filter pokemons by the generation.
It took me a while to find out that the name of species and pokemons have overlaps, so i could filter pokemons easily by searching species name in pokemons name and filtering out the result.

# Extra Features

- You can combile filters `search`, `generations`, `favorite`
- You can compare multiple pokemon at same time
- I also added a back button in the header

# More Time!

- I would show differents between pokemons abilities and moves so users can find out differents more easily.
- I would add a contest page so users can select 2 pokemon and make them fight based on their types.
- I would add a page for abilities description.
