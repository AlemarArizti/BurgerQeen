import '../Styles/Breakfast.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Order from './Order';
import HeaderBreakfast from './HeaderBreakfast';
import Item from './ItemDish';

export default function Breakfast() {
  const [breakfastDishes, setBreakfastDishes] = useState([]);

  const getBreakfastMenu = async () => {
    const urlBreakfastMenu = 'http://localhost:3000/FullMenu?menu=Breakfast';
    const fetchBreakfastMenu = await fetch(urlBreakfastMenu).then((response) => response.json());
    setBreakfastDishes(fetchBreakfastMenu);
  };

  // NAVEGA
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/Menu');
  };

  const handleDinnerMenu = () => {
    navigate('/Dinner');
  };

  useEffect(() => {
    getBreakfastMenu();
  }, []);

  return (
    <div>
      <HeaderBreakfast />

      <section id="buttonsMenuSec">
        <button type="button" className="menuButtons" id="breakfastB" onClick={handleHome}>Home</button>
        <button type="button" className="menuButtons" id="dinnerB" onClick={handleDinnerMenu}>Dinner</button>
      </section>

      <section id="breakfastSection">
        <section id="itemsBreakfastMenu">
          { breakfastDishes?.map((dish) => <Item dish={dish} key={dish.menu} />)}
          <div className="orderContainer">
            <Order />
          </div>

        </section>
      </section>
    </div>
  );
}
