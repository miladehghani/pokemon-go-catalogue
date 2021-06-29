import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PokemonList } from "components/PokemonList";
import mockedPokemonsListResponse from "../../../__mock__/pokemonsList.json";
import { TestAppProvider } from "../../../testUtils";

describe("pokemon list with multiple pokemon", () => {
  beforeEach(() => {
    render(
      <TestAppProvider>
        <PokemonList pokemonsResource={mockedPokemonsListResponse.results} />
      </TestAppProvider>
    );
  });

  test("renders 20 pokemon into PokemonList ", async () => {
    for (let i = 0; i < mockedPokemonsListResponse.results.length; i++) {
      const name = mockedPokemonsListResponse.results[i].name;

      await waitFor(() => screen.getByTestId(`card-${name}`));
      expect(screen.getByTestId(`card-${name}`)).toBeInTheDocument();
    }
  });

  test("snackbar should apear when one pokemon card is selected", async () => {
    const name = mockedPokemonsListResponse.results[0].name;

    await waitFor(() => screen.getByTestId(`checkbox-${name}`));
    userEvent.click(screen.getByTestId(`checkbox-${name}`));

    expect(screen.getByTestId("snackbar")).toBeInTheDocument();
  });

  test("compare button should appear in snackbar when multiple card is selected", async () => {
    const numberOfSelectedItems = 4;

    for (let i = 0; i < numberOfSelectedItems; i++) {
      const name = mockedPokemonsListResponse.results[i].name;

      await waitFor(() => screen.getByTestId(`checkbox-${name}`));
      userEvent.click(screen.getByTestId(`checkbox-${name}`));
    }

    expect(screen.getByTestId("snackbar-compare-button")).toBeInTheDocument();
  });
});

test("display empty message when there is no pokemon", async () => {
  render(
    <TestAppProvider>
      <PokemonList pokemonsResource={[]} />
    </TestAppProvider>
  );

  expect(screen.getByTestId("no-result")).toBeInTheDocument();
});
