import { extractIdFromUrl } from "./string";

describe("extractIdFromUrl", () => {
  test("works for https://pokeapi.co/api/v2/pokemon/1/", () => {
    const id = extractIdFromUrl("https://pokeapi.co/api/v2/pokemon/1/");
    expect(id).toBe("1");
  });

  test("works for https://pokeapi.co/api/v2/pokemon/185/", () => {
    const id = extractIdFromUrl("https://pokeapi.co/api/v2/pokemon/185/");
    expect(id).toBe("185");
  });
});
