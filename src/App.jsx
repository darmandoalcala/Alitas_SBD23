import { useState } from "react";
import { 
  RiMenu3Fill,
  RiAddFill,
  RiFileList3Fill,
  RiCloseLine,
} from "react-icons/ri";
//Components
import Sidebar from './components/shared/Sidebar';
import Car from "./components/shared/Car";
import Card from "./components/shared/Card";
import Header from "./components/shared/Header";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [cart, setCart] = useState([]);

  const menu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  }
  const orders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  }

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const addToCart = (product) => {
    // Verificar si el producto ya está en el carrito
    const existingProduct = cart.find((p) => p.id === product.id);
  
    if (existingProduct) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      const updatedCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agregarlo con el mismo id
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    // Filtrar el producto del carrito
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className='bg-alitas_obs_beige w-full min-h-screen'>
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} cart={cart} removeFromCart={removeFromCart} total={calculateTotal()}/>
      {/* Mobile menu */}
      <nav className="bg-alitas_beige lg:hidden fixed w-full bottom-0 left-0 text-3xl text-alitas_obs_red p-4 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2"> 
          <RiCloseLine/>
        </button>
        <button className="p-2"> 
          <RiAddFill/>
        </button>
        <button onClick={orders} className="p-2"> 
          <RiFileList3Fill/>
        </button>
        <button onClick={menu} className="p-2"> 
          {showMenu ?< RiCloseLine/> : <RiMenu3Fill/>}
        </button>
      </nav>
      {/* Main */}
      <main className="lg:pl-32 lg:pr-96 pb-20">  
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title Menu */}
          <div className="flex item-center justify-between mb-16">
            <h2 className="text-xl font-Lilita_One text-alitas_obs_red">Inserte alimentos a la orden</h2>
          </div>
          { /* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            { /* Cards */ }
            { /* WINGS */ }
            <Card 
              img="redhot.JPG"
              description="Alitas Red Hot 8 pz"
              price="100"
              id="1"
              addToCart={addToCart}
            />
            <Card 
              img="bbq.JPG"
              description="Alitas BBQ 8 pz"
              price="100"
              id="2"
              addToCart={addToCart}
            />
            <Card 
              img="mangohabanero.JPG"
              description="Alitas Mango Habanero 8 pz"
              price="100"
              id="3"
              addToCart={addToCart}
            />
            <Card 
              img="ranch.JPG"
              description="Alitas Ranch 8 pz"
              price="100"
              id="4"
              addToCart={addToCart}
            />
            <Card 
              img="redhot.JPG"
              description="Alitas Red Hot 12 pz"
              price="130"
              id="5"
              addToCart={addToCart}
            />
            <Card 
              img="bbq.JPG"
              description="Alitas BBQ 12 pz"
              price="130"
              id="6"
              addToCart={addToCart}
            />
            <Card 
              img="mangohabanero.JPG"
              description="Alitas Mango Habanero 12 pz"
              price="130"
              id="7"
              addToCart={addToCart}
            />
            <Card 
              img="ranch.JPG"
              description="Alitas Ranch 12 pz"
              price="130"
              id="8"
              addToCart={addToCart}
            />
            {/* BONELESS */}
            <Card 
              img="bonelessredhot.JPG"
              description="Boneless Red Hot 10 pz"
              price="95"
              id="9"
              addToCart={addToCart}
            />
            <Card 
              img="bonelessmangohabanero.JPG"
              description="Boneless BBQ 10 pz"
              price="95"
              id="10"
              addToCart={addToCart}
            />
            <Card 
              img="bonelessredhot.JPG"
              description="Boneless Mango Habanero 10 pz"
              price="95"
              id="11"
              addToCart={addToCart}
            />
            <Card 
              img="bonelessmangohabanero.JPG"
              description="Boneless Ranch 10 pz"
              price="95"
              id="12"
              addToCart={addToCart}
            />
            {/* MORE */}
            <Card 
              img="papasfrancesa.JPG"
              description="Papas a la francesa 400 gr"
              price="55"
              id="13"
              addToCart={addToCart}
            />
            <Card 
              img="papasgajo.JPG"
              description="Papas Gajo 400 gr"
              price="55"
              id="14"
              addToCart={addToCart}
            />
            <Card 
              img="dedosqueso.JPG"
              description="Dedos De Queso 6 pz"
              price="65"
              id="15"
              addToCart={addToCart}
            />

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
