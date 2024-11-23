import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasList {
  pizzasList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzasList> = ({ pizzasList }) => {
  return (
    <div>
      {pizzasList.map((pizza) => {
        return <SinglePizza key={pizza.id} pizza={pizza} />;
      })}
    </div>
  );
};

export default DisplayPizzas;
