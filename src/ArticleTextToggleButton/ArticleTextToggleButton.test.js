import React from "react";
import { fireEvent } from "@testing-library/react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {
    it("renders correctly after button is clicked", () => {
        const { container, getByText } = render(
          <ArticleTextToggleButton />
        );
        const button = getByText("Clicked me");
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
      });
});
