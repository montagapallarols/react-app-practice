import React from "react";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div>
      <Title content="A Pokemon list" />

      {all_pokemon.map(function (pokemon) {
        const { name, weight, awesome, terrifying, abilities } = pokemon;
        return (
          <Pokemon
            name={name}
            weight={weight}
            awesome={awesome}
            terrifying={terrifying}
            abilities={abilities}
          />
        );
      })}
    </div>
  );
}

export default App;
