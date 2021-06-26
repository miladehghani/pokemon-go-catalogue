import { union } from "./array";

describe("Union", () => {
  test("test case1", () => {
    const searchFor = [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/1/",
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon-species/4/",
      },
      {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon-species/7/",
      },
      {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon-species/10/",
      },
      {
        name: "weedle",
        url: "https://pokeapi.co/api/v2/pokemon-species/13/",
      },
    ];
    const source = [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
      },
      {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/",
      },
      {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
      },
      {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
      },
      {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/",
      },
      {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/",
      },
    ];
    const result = [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
      },
      {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
      },
    ];
    expect(union(source, searchFor, "name")).toEqual(result);
  });
});
