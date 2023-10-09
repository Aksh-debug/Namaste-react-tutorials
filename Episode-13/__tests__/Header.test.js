import Header from "../src/components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

it("Should render Header Component with 0 Cart Items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn=screen.getByRole('button',{name:"Login"});
  fireEvent.click(loginBtn);
  const logoutBtn=screen.getByRole('button',{name:"Logout"});
  expect(logoutBtn).toBeInTheDocument();
});
