import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resListMock.json";
import Body from "../src/components/Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Restaurants with restaurant as input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeClick = screen.getAllByTestId("resCard");
  expect(cardsBeforeClick.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "SEARCH" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Restaurant" } });
  fireEvent.click(searchBtn);
  const cardsAfterClick = screen.getAllByTestId("resCard");

  expect(cardsAfterClick.length).toBe(5);
});

it("Should filter out the top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cards=screen.getAllByTestId('resCard');
  expect(cards.length).toBe(20);
  const filterBtn=screen.getByRole('button',{name:"TOP RATED RESTAURANTS"})
  fireEvent.click(filterBtn);
  const filteredCards=screen.getAllByTestId("resCard");
  expect(filteredCards.length).toBe(5);
});
