import React from "react";
import { 
  RiAddFill,
} from "react-icons/ri";

const Card = (props) => {
  const { img, description, price, id, addToCart } = props;

  const handleAddToCart = () => {
    // Crear un objeto que representa el producto
    const product = {
      id,
      img,
      description,
      price: parseFloat(price), // Convertir el precio a número
      quantity: 1, // Puedes ajustar la cantidad según sea necesario
    };

    // Llamar a la función addToCart del componente principal
    addToCart(product);
  };

  return (
    <div className="bg-alitas_beige p-8 rounded-xl flex flex-col gap-2 items-center text-center text-alitas_black_red">
      <img
        src={img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-3xl"
      />
      <p className="text-xl font-bold text-alitas_obs_red">{description}</p>
      <span className="text-alitas_black_red text-opacity-70">$ {price}</span>
      <button className="text-2xl" onClick={handleAddToCart}>
        <RiAddFill className="text-alitas_black_red border border-alitas_obs_red rounded-md" />
      </button>
    </div>
  );
};

export default Card;