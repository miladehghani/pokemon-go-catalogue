import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { PokemonListPage } from "./PokemonListPage";
import { TestAppProvider, pokemonService, delay } from "../../testUtils";
import mockPokemonListResponse from "../../__mock__/pokemonsList.json";
import mockGenerationListResponse from "../../__mock__/generationList.json";
import mockFirstGenerationResponse from "../../__mock__/firstGeneration.json";
import { Generation } from "types/generation";
import { union } from "utils/array";
import { Resource } from "types/pokemon";

jest.mock("../services/pokemonService");

beforeEach(() => {
  pokemonService.fetchAllPokemon.mockResolvedValue(mockPokemonListResponse);
  pokemonService.getGenerationById.mockResolvedValue(
    mockFirstGenerationResponse as unknown as Generation
  );
  pokemonService.getGenerations.mockResolvedValue(mockGenerationListResponse);

  render(
    <TestAppProvider>
      <PokemonListPage />
    </TestAppProvider>
  );
});

describe("Search input", () => {
  test("search 'bu' should result in 2 ", async () => {
    userEvent.paste(screen.getByTestId("search-input"), "bu");

    for (let i = 0; i < mockPokemonListResponse.results.length; i++) {
      const name = mockPokemonListResponse.results[i].name;

      if (name.includes("bu"))
        expect(screen.getByTestId(`card-${name}`)).toBeInTheDocument;
      else expect(screen.queryByTestId(`card-${name}`)).not.toBeInTheDocument();
    }
  });

  test("search 'absdi' should result in 0 ", async () => {
    userEvent.paste(screen.getByTestId("search-input"), "absdi");

    for (let i = 0; i < mockPokemonListResponse.results.length; i++) {
      const name = mockPokemonListResponse.results[i].name;
      expect(screen.queryByTestId(`card-${name}`)).not.toBeInTheDocument();
    }
  });

  test("search 'absdi' should result in 0 ", async () => {
    userEvent.paste(screen.getByTestId("search-input"), "absdi");

    for (let i = 0; i < mockPokemonListResponse.results.length; i++) {
      const name = mockPokemonListResponse.results[i].name;
      expect(screen.queryByTestId(`card-${name}`)).not.toBeInTheDocument();
    }
  });
});

describe("Generation filter", () => {
  test("click on generation one should filter results correctly ", async () => {
    const firstGeneration = mockGenerationListResponse.results[0];
    await waitFor(() => screen.getByTestId(firstGeneration.name));
    userEvent.click(screen.getByTestId(firstGeneration.name));

    await delay(500);

    const expectedFilterResult: Resource[] = union(
      mockPokemonListResponse.results,
      mockFirstGenerationResponse.pokemon_species,
      "name"
    );

    for (let i = 0; i < mockPokemonListResponse.results.length; i++) {
      const name = mockPokemonListResponse.results[i].name;
      const shouldContain = expectedFilterResult
        .map((res) => res.name)
        .includes(name);
      const card = screen.queryByTestId(`card-${name}`);

      if (shouldContain) {
        expect(card).toBeInTheDocument();
      } else {
        expect(card).not.toBeInTheDocument();
      }
    }
  });
});

test("only favorite cards should appear after user clicked on each card fav icon and clicked on favorite filter button", async () => {
  const numberOfItemAddedToFav = 4;

  for (let i = 0; i < numberOfItemAddedToFav; i++) {
    const name = mockPokemonListResponse.results[i].name;
    await waitFor(() => screen.getByTestId(`favorite-button-${name}`));
    userEvent.click(screen.getByTestId(`favorite-button-${name}`));
  }

  userEvent.click(screen.getByTestId("favorite-filter-button"));
  await delay(500);

  for (let i = 0; i < mockPokemonListResponse.results.length; i++) {
    const name = mockPokemonListResponse.results[i].name;
    const shouldContain = i < numberOfItemAddedToFav;
    const card = screen.queryByTestId(`card-${name}`);

    if (shouldContain) {
      expect(card).toBeInTheDocument();
    } else {
      expect(card).not.toBeInTheDocument();
    }
  }
});
