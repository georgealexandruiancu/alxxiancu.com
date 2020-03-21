/* global test, expect */
/* eslint no-undef: ["error", { "typeof": true }] */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/here for/i);
  expect(linkElement).toBeInTheDocument();
});
