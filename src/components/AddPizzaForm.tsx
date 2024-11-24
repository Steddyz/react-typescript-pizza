import { FC, useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";
import { Pizza } from "../models/Pizza";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

type InitTypeState = {
  title: string;
  price: string;
  img: string;
};

const initState: InitTypeState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<InitTypeState>(initState);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({ id: Date.now(), title, img, price: Number(price) });
    }

    setNewPizza(initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={newPizza.title}
        placeholder="Введите название товара"
        onChange={changeHandler}
      />
      <input
        type="number"
        name="price"
        value={newPizza.price}
        placeholder="Введите стоимость товара"
        onChange={changeHandler}
      />
      <input
        type="text"
        name="img"
        value={newPizza.img}
        placeholder="Вставьте изображение"
        onChange={changeHandler}
      />
      <button type="submit">Добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
