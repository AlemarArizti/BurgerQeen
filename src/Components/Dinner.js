// import { useNavigate } from 'react-router-dom';
import '../Styles/Dinner.css';
import '../Styles/Menu.css';
import { useNavigate } from 'react-router-dom';
import HeaderDinner from './HeaderDinner';
import Order from './Order';
import HamburguesaSencilla from '../Assets/HamburgesaSencilla.png';
import HamburgesaDoble from '../Assets/HamburgesaDoble.jpg';
import Papas from '../Assets/Papas.jpg';
import ArosCebolla from '../Assets/ArosCebolla.jpg';
import Agua from '../Assets/Agua.jpg';
import Agua750 from '../Assets/Agua700.jpg';
import soda500 from '../Assets/soda500.webp';
import soda750 from '../Assets/Soda750.jpg';

export default function Dinner() {
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
      <HeaderDinner />

      <section id="buttonsMenuSec">
        <button type="button" className="menuButtons" id="breakfastB" onClick={handleMorningMenu}>Desayuno</button>
        <button type="button" className="menuButtons" id="dinnerB" onClick={handleDinnerMenu}>Almuerzo/Cena</button>
      </section>

      <section id="dinnerSection">
        <section id="itemsDinnerMenu">

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
        <div className="orderContainer">
          <Order />
        </div>
      </section>
    </div>
  );
}
