const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
