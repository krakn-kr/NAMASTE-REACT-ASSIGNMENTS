import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Namasthe Everyone"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading 1"
);
const headin2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1, headin2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
console.log(heading);
