import React from "react";
import ReactDOM from "react-dom/client";
// JSX==>
const Title = () => {
  return (
    <h1 id="title" key="h2">
      Namasthe React
    </h1>
  );
};
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>This is react functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeaderComponent());
console.log("kkkkkkkkkkkkkk");
console.error("jjjjjjjjjjjjjjjjj");
