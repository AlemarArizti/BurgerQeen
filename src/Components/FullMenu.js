// import { useNavigate } from 'react-router-dom';
import '../Styles/FullMenu.css';
// import '../../db.json';
import { useEffect, useState } from 'react';
import Item from './ItemDish';
import CafeAmericano from '../Assets/CafeAmericano.jpg';
import CafeLeche from '../Assets/CafeConLeche.jpg';
import Sandwich from '../Assets/Sandwich.jpg';
import Jugo from '../Assets/Jugo.jpeg';
import HamburguesaSencilla from '../Assets/HamburgesaSencilla.png';
import HamburgesaDoble from '../Assets/HamburgesaDoble.jpg';
import Papas from '../Assets/Papas.jpg';
import ArosCebolla from '../Assets/ArosCebolla.jpg';
import Agua from '../Assets/Agua.jpg';
import Agua750 from '../Assets/Agua700.jpg';
import soda500 from '../Assets/soda500.webp';
import soda750 from '../Assets/Soda750.jpg';

export default function FullMenu() {
  const [dishes, setDishes] = useState([]);

  const getFullMenu = async () => {
    const urlFullMenu = 'http://localhost:3000/FullMenu';
    const fetchFullMenu = await fetch(urlFullMenu).then((response) => response.json());
    setDishes(fetchFullMenu);
  };

  useEffect(() => {
    getFullMenu();
  }, []);
  // console.log(dishes);
  return (
    <div>
      <section id="menuAndOrderSection">
        <section id="itemsBreakfastMenu">

          <div>
            <h1>Aqui se van a mostrar los alimentos</h1>
            { dishes?.map((dish) => <Item dish={dish} key={dish.name} />)}
          </div>

          <section className="itemBreakfast">
            <img src={CafeAmericano} alt="coffe" className="imgMenu" />
            <h5>Café americano</h5>
            <p className="cost">$5</p>
          </section>

          <section className="itemBreakfast">
            <img src={CafeLeche} alt="coffe" className="imgMenu" />
            <h5>Café con leche</h5>
            <p className="cost">$7</p>
          </section>

          <section className="itemBreakfast">
            <img src={Sandwich} alt="coffe" className="imgMenu" />
            <h5>Sandwich de jamón y queso</h5>
            <p className="cost">$10</p>
          </section>

          <section className="itemBreakfast">
            <img src={Jugo} alt="coffe" className="imgMenu" />
            <h5>Jugo de frutas natural</h5>
            <p className="cost">$7</p>
          </section>

          <section className="itemDinner">
            <img src={HamburguesaSencilla} alt="HamburgesaSencilla" className="imgMenu" />
            <h5>Hamburgesa Sencilla</h5>
            <p className="cost">$10</p>
          </section>

          <section className="itemDinner">
            <img src={HamburgesaDoble} alt="HamburgesaDoble" className="imgMenu" />
            <h5>Hamburgesa Doble</h5>
            <p className="cost">$15</p>
          </section>

          <section className="itemDinner">
            <img src={Papas} alt="Papas" className="imgMenu" />
            <h5>Papas fritas</h5>
            <p className="cost">$5</p>
          </section>

          <section className="itemDinner">
            <img src={ArosCebolla} alt="ArosCebolla" className="imgMenu" />
            <h5>Aros Cebolla</h5>
            <p className="cost">$5</p>
          </section>

          <section className="itemDinner">
            <img src={Agua} alt="Agua " className="imgMenu" />
            <h5>Agua 500ml</h5>
            <p className="cost">$5</p>
          </section>

          <section className="itemDinner">
            <img src={Agua750} alt="Agua750" className="imgMenu" />
            <h5>Agua 750ml</h5>
            <p className="cost">$7</p>
          </section>

          <section className="itemDinner">
            <img src={soda500} alt="soda500" className="imgMenu" />
            <h5>Soda 500ml</h5>
            <p className="cost">$7</p>
          </section>

          <section className="itemDinner">
            <img src={soda750} alt="soda750" className="imgMenu" />
            <h5>Soda 750ml</h5>
            <p className="cost">$10</p>
          </section>

        </section>
      </section>
    </div>
  );
}
