import React from "react";
import ReactDOM from "react-dom";
import StyledComponent from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StyledComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
