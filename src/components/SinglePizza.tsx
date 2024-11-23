import React, { FC } from "react";
import { Pizza } from "../models/Pizza";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin2Fill } from "react-icons/ri";

interface SinglePizzaProps {
  pizza: Pizza;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} ₽</span>
      <div className="pizza-controls">
        <MdEdit />
        <RiDeleteBin2Fill />
      </div>
    </div>
  );
};

export default SinglePizza;
