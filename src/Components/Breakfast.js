import '../Styles/Breakfast.css';
import { useNavigate } from 'react-router-dom';
import Order from './Order';
import HeaderBreakfast from './HeaderBreakfast';
import CafeAmericano from '../Assets/CafeAmericano.jpg';
import CafeLeche from '../Assets/CafeConLeche.jpg';
import Sandwich from '../Assets/Sandwich.jpg';
import Jugo from '../Assets/Jugo.jpeg';

export default function Breakfast() {
  // NAVEGA
  const navigate = useNavigate();

  const handleMorningMenu = () => {
    navigate('/Breakfast');
  };

  const handleDinnerMenu = () => {
    navigate('/Dinner');
  };

  return (
    <div>
      <HeaderBreakfast />

      <section id="buttonsMenuSec">
        <button type="button" className="menuButtons" id="breakfastB" onClick={handleMorningMenu}>Desayuno</button>
        <button type="button" className="menuButtons" id="dinnerB" onClick={handleDinnerMenu}>Almuerzo/Cena</button>
      </section>
      <section id="menuAndOrderSection">
        <section id="itemsBreakfastMenu">
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
          <Order />
        </section>
      </section>
    </div>
  );
}
