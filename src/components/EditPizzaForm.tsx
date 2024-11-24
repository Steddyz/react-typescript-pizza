import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";
import { Pizza } from "../models/Pizza";

interface EditPizzaFormProps {
  data: Pizza;
}

type InitTypeState = {
  title: string;
  price: string;
  img: string;
};

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEditPizza({ ...editPizza, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      console.log(editPizza);
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={editPizza.title}
        placeholder="Введите название товара"
        onChange={changeHandler}
      />
      <input
        type="text"
        name="price"
        value={editPizza.price}
        placeholder="Введите стоимость товара"
        onChange={changeHandler}
      />
      <input
        type="text"
        name="img"
        value={editPizza.img}
        placeholder="Вставьте изображение"
        onChange={changeHandler}
      />
      <button type="submit">Подтвердить в меню</button>
    </form>
  );
};

export default EditPizzaForm;
