// import { useNavigate } from 'react-router-dom';
import '../Estilos/Breakfast.css';
import CafeAmericano from '../Assets/CafeAmericano.jpg';
import CafeLeche from '../Assets/CafeConLeche.jpg';
import Sandwich from '../Assets/Sandwich.jpg';
import Jugo from '../Assets/Jugo.jpeg';
import Order from './Order';

export default function Breakfast() {
  return (
    <div>
      <header>
        <h1 id="coffeeHeaderText">It´s coffee time!</h1>
        <input type="text" id="search" />
      </header>
      <section id="menuAndOrderSection">
        <section id="itemsBreakfastMenu">
          <section className="itemBreakfast">
            <img src={CafeAmericano} alt="coffe" className="imgMenu" />
            <h5>Café americano</h5>
            <p className="cost">$5</p>
            <button type="button" className="addButton">+</button>
          </section>
          <section className="itemBreakfast">
            <img src={CafeLeche} alt="coffe" className="imgMenu" />
            <h5>Café con leche</h5>
            <p className="cost">$7</p>
            <button type="button" className="addButton">+</button>
          </section>
          <section className="itemBreakfast">
            <img src={Sandwich} alt="coffe" className="imgMenu" />
            <h5>Sandwich de jamón y queso</h5>
            <p className="cost">$10</p>
            <button type="button" className="addButton">+</button>
          </section>
          <section className="itemBreakfast">
            <img src={Jugo} alt="coffe" className="imgMenu" />
            <h5>Jugo de frutas natural</h5>
            <p className="cost">$7</p>
            <button type="button" className="addButton">+</button>
          </section>
        </section>
      </section>
      <Order />
    </div>
  );
}
