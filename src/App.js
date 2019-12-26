import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Ghaddafi",
      animal: "Dog",
      breed: "Alsatian"
    }),
    React.createElement(Pet, {
      name: "Doug",
      animal: "Horse",
      breed: "Stallion"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
