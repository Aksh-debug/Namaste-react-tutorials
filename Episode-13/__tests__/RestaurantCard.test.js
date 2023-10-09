import RestaurantCard, {
  withDiscountLabel,
} from "../src/components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { screen, render, getByLabelText } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Mittal Foods");
  expect(name).toBeInTheDocument();
});

it("Should render Restaurant Card component with the Discount Label", () => {
  const Component = withDiscountLabel(RestaurantCard);
  render(<Component resData={MOCK_DATA} />);
  const discountLabel = screen.getByText("40% OFF");
  expect(discountLabel).toBeInTheDocument();
});
