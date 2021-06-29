import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GenerationsList } from "components/GenerationsList";
import mockedGenerationListResponse from "../../../__mock__/generationList.json";
import { TestAppProvider, pokemonService } from "../../../testUtils";

jest.mock("../../services/pokemonService");
let selectedGeneration = 0;

beforeEach(() => {
  pokemonService.getGenerations.mockResolvedValue(mockedGenerationListResponse);
  render(
    <TestAppProvider>
      <GenerationsList onChange={(value) => (selectedGeneration = value)} />
    </TestAppProvider>
  );
});

test("renders GenerationsList", async () => {
  for (let i = 0; i < mockedGenerationListResponse.results.length; i++) {
    const name = mockedGenerationListResponse.results[i].name;

    await waitFor(() => screen.getByTestId(name));
    expect(screen.getByTestId(name)).toBeInTheDocument();
  }
});

test("click on generation fire onChange with correct id", async () => {
  for (let i = 0; i < mockedGenerationListResponse.results.length; i++) {
    const name = mockedGenerationListResponse.results[i].name;
    await waitFor(() => screen.getByTestId(name));
    userEvent.click(screen.getByTestId(name));
    expect(selectedGeneration).toBe(i + 1);
  }
});
