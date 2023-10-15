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
const Logo = () => {
  return (
    <div className="left">
      <img className="logo" src={require("./assets/logo.png")} />
    </div>
  );
};
const SearchBar = () => {
  return (
    <div className="search center">
      <input placeholder="search samantha" />
      <img src={require("./assets/search.svg")} />
    </div>
  );
};
const User = () => {
  return (
    <div className="user right">
      <img src={require("./assets/person.svg")} />
    </div>
  );
};
const HeaderComponent = () => {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <User />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeaderComponent());
console.log("kkkkkkkkkkkkkk");
console.error("jjjjjjjjjjjjjjjjj");
