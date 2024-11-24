import React, { FC, useState } from "react";
import { Pizza } from "../models/Pizza";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";
import EditPizzaForm from "./EditPizzaForm";

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} ₽</span>
      <div className="pizza-controls">
        <MdEdit onClick={handleToggleEdit} />
        <RiDeleteBin2Fill />
      </div>

      {edit ? (
        <EditPizzaForm
          handleToggleEdit={handleToggleEdit}
          updatePizza={updatePizza}
          data={pizza}
        />
      ) : null}
    </div>
  );
};

export default SinglePizza;
