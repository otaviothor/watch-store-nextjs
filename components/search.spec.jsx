import Search from "./search";
import { fireEvent, render, screen } from "@testing-library/react";

const doSearch = jest.fn();

describe("Search component", () => {
  it("should render a form", () => {
    render(<Search doSearch={doSearch} />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("should call props.doSearch() when form is submmited", async () => {
    render(<Search doSearch={doSearch} />);
    const form = screen.getByRole("form");

    await fireEvent.submit(form);

    expect(doSearch).toHaveBeenCalledTimes(1);
  });
});
