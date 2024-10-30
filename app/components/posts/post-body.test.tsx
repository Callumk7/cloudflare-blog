import { render, screen } from "@testing-library/react";
import { PostBody } from "./post-body";

describe("Post Body Component", () => {
  test("renders the button with the correct label", () => {
    render(<PostBody content="Hello World" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
