import React, { FC, useState } from "react";
import AddPizzaForm from "./components/AddPizzaForm";
import { Pizza } from "./models/Pizza";
import "./App.css";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  console.log(pizzasList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Steddy Pizza Store</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList} />
      </div>
    </div>
  );
};

export default App;
