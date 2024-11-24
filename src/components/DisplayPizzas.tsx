import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasList {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
}

const DisplayPizzas: FC<DisplayPizzasList> = ({ pizzasList, updatePizza }) => {
  return (
    <div>
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza updatePizza={updatePizza} key={pizza.id} pizza={pizza} />
        );
      })}
    </div>
  );
};

export default DisplayPizzas;
