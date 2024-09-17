import Search from "./search";
import { render, screen } from "@testing-library/react";

describe("Search component", () => {
  it("should render Search component", () => {
    render(<Search />);

    screen.debug();

    expect(screen.getByTestId("search")).toBeInTheDocument();
  });
});
