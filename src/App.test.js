import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders home page text", () => {
  render(
    <BrowserRouter basename="/debugging-api-ui">
      <App />
    </BrowserRouter>
  );
  
  const headingElement = screen.getByText(/Welcome to Debugging API UI/i);
  expect(headingElement).toBeInTheDocument();
});
