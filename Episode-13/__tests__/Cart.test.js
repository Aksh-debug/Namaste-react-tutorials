import { act } from "react-dom/test-utils";
import RestaurantMenu from "../src/components/RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Restaurant Menu component", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
      </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Take Home Happyness (5)");
  fireEvent.click(accordianHeader);
  const foodItems=screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(5);
  const addBtns=screen.getAllByRole("button",{name:"ADD+"})
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

});
