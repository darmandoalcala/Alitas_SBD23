import React from "react";
import { 
  RiCloseLine,
  RiDeleteBin6Fill
} from "react-icons/ri";
const Car = (props) => {
  const { showOrder, setShowOrder, cart, removeFromCart, total } = props;

  return (
    <div 
      className={`lg:col-span-2 bg-alitas_beige fixed top-0 w-full h-full lg:right-0 lg:w-96
      transition-all z-50 ${
      showOrder ? "right-0" : "-right-full"}`}
    >
    {/* Orders */}
    <div className="relative h-full pt-16 p-8 lg:pt-8 text-alitas_obs_red">
      <RiCloseLine
        onClick={() => setShowOrder(false)}
        className="lg:hidden absolute left-4 top-4 p-3 box-content text-alitas_red bg-alitas_obs_beige rounded-full text-2xl"
      />
      <h1 className="text-2xl mt-4">Orden #1</h1>
      { /* Client info */}
      <form className="flex items-center gap-2 flex-wrap mt-4 mb-8">
        <h1 className="text-xl text-alitas_obs_red">Cliente:</h1>
        <input
          type="text"
          className="bg-alitas_obs_beige w-full py-2 px-4 rounded-xl outline-none"
          placeholder="Nombre"
        />
        <input
          type="text"
          className="bg-alitas_obs_beige w-full py-2 px-4 rounded-xl outline-none"
          placeholder="Telefono"
          />
        <input
          type="text"
          className="bg-alitas_obs_beige w-full py-2 px-4 rounded-xl outline-none"
          placeholder="Direccion de entrega"
          />
      </form>
      { /* Order - Product List */}
      <div>
        <div className="grid grid-cols-6 mb-4 p-4">
          <h5 className="col-span-4">Producto</h5>
          <h5>Cant</h5>
          <h5>Precio</h5>
        </div>
        { /* Products */}
        <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-y-scroll">
          {/* Mapear sobre los productos en el carrito */}
          { /* Product */}
          {cart.map((product) => (
            <div key={product.id} className="bg-alitas_obs_beige p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Description of product */}
                <div className="col-span-4 flex items-center gap-2">
                  <img src={product.img} className="w-10 h-10 object-cover rounded-full" alt={product.description} />
                  <div>
                    <h5 className="text-sm">{product.description}</h5>
                    <p className="text-xs text-opacity-10">${product.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* Qty */}
                <div className="text-center">
                  <span>{product.quantity}</span>
                </div>
                {/* Total Price */}
                <div>
                  <span>${(product.price * product.quantity).toFixed(2)}</span>
                </div>
              </div>
              {/* Delete */}
              <div className="grid grid-cols-6 items-center gap-2">
                <div className="col-span-5"></div>
                <div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="border border-alitas_obs_red p-2 rounded-lg"
                  >
                    <RiDeleteBin6Fill className="text-alitas_obs_red" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Finish Order */}
      <div className="bg-alitas_beige absolute w-full bottom-0 left-0 p-4">
        <div className="flex items-center justify-between">
          <span className="text-alitas_obs_red text-lg">Total</span>
          <span className="text-alitas_red font-bold text-xl">${total.toFixed(2)}</span>
        </div>
        <button className="bg-alitas_obs_red text-white text-lg w-full py-3 pl-8 pr-4 mt-4 rounded-xl">
          Realizar pedido
        </button>
      </div>
    </div>
  </div>
  );
};

export default Car;