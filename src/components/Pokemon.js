import React from "react";

function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "Yes!" : "No, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities ({props.abilities.length}):</p>
      <ul>
        {props.abilities.map((ability) => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
}

export default Pokemon;

{
  /* <Pokemon
        name="Charizard"
        weight={90}
        awesome="yes"
        terrifying={null}
        abilities={["Blaze, ", "Solar power, ", "Tough claws, ", "Drought"]}
      />
      <Pokemon
        name="Bulbasaur"
        weight={6.9}
        awesome="yes"
        terrifying={null}
        abilities={["Overgrow, ", "Chlorophyll"]}
      />
      <Pokemon
        name="Mewtwo"
        weight={122}
        awesome="yes"
        terrifying="yes"
        abilities={["Pressure, ", "Unnerve, ", "Steadfast, ", "Insomnia"]}
      />
      <Pokemon
        name="Mega beedrill"
        weight="65"
        awesome={false}
        terrifying={true}
        abilities={["Intimidate, ", "Unnerve"]}
      /> */
}
