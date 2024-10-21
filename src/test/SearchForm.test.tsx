import { MemoryRouter, useSearchParams } from "react-router-dom";
import SearchForm from "../components/template/SearchField";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: jest.fn(),
}));

describe("SearchForm", () => {
  let mockSetSearchParams: jest.Mock;

  beforeEach(() => {
    mockSetSearchParams = jest.fn();
    (useSearchParams as jest.Mock).mockReturnValue([
      new URLSearchParams(),
      mockSetSearchParams,
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the search input fields", () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Search names...")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search last names...")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search phone...")).toBeInTheDocument();
  });

  it("updates input fields and triggers search", async () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    const nameInput = screen.getByPlaceholderText(
      "Search names..."
    ) as HTMLInputElement;
    const lastNameInput = screen.getByPlaceholderText(
      "Search last names..."
    ) as HTMLInputElement;
    const phoneInput = screen.getByPlaceholderText(
      "Search phone..."
    ) as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(phoneInput, { target: { value: "123456" } });

    // Wait for debounce effect (500ms delay in search)
    await waitFor(() => {
      expect(mockSetSearchParams).toHaveBeenCalledWith(
        new URLSearchParams({
          search: JSON.stringify({
            name: "John",
            lastName: "Doe",
            phone: "123456",
          }),
        })
      );
    });
  });

  it("clears input when clear button is clicked and removes search params if all inputs are empty", async () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    const nameInput = screen.getByPlaceholderText(
      "Search names..."
    ) as HTMLInputElement;

    // Simulate input change
    fireEvent.change(nameInput, { target: { value: "John" } });

    // Wait for debounce and search update
    await waitFor(() => {
      expect(mockSetSearchParams).toHaveBeenCalledWith(
        new URLSearchParams({
          search: JSON.stringify({
            name: "John",
            lastName: "",
            phone: "",
          }),
        })
      );
    });

    // Find the clear button (&times;) and click it
    const clearButton = screen.getByLabelText("Clear name");
    fireEvent.click(clearButton);

    await waitFor(() => {
      expect(nameInput.value).toBe("");
      expect(mockSetSearchParams).toHaveBeenCalledWith(
        new URLSearchParams() // No search param when all fields are cleared
      );
    });
  });

  it("removes search params when all inputs are empty", async () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    const nameInput = screen.getByPlaceholderText(
      "Search names..."
    ) as HTMLInputElement;
    const lastNameInput = screen.getByPlaceholderText(
      "Search last names..."
    ) as HTMLInputElement;
    const phoneInput = screen.getByPlaceholderText(
      "Search phone..."
    ) as HTMLInputElement;

    // Simulate input changes
    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(phoneInput, { target: { value: "123456" } });

    // Simulate clearing all inputs
    fireEvent.change(nameInput, { target: { value: "" } });
    fireEvent.change(lastNameInput, { target: { value: "" } });
    fireEvent.change(phoneInput, { target: { value: "" } });

    // Wait for debounce and search update
    await waitFor(() => {
      expect(mockSetSearchParams).toHaveBeenCalledWith(
        new URLSearchParams() // No search param when all fields are cleared
      );
    });
  });

  it("does not trigger search when all inputs are empty initially", async () => {
    render(
      <MemoryRouter>
        <SearchForm />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(mockSetSearchParams).not.toHaveBeenCalled();
    });
  });
});
