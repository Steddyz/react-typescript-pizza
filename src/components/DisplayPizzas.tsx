import { FC } from "react";
import { Pizza } from "../models/Pizza";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasList {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasList> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div>
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            deletePizza={deletePizza}
            updatePizza={updatePizza}
            key={pizza.id}
            pizza={pizza}
          />
        );
      })}
    </div>
  );
};

export default DisplayPizzas;
