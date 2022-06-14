import '../Styles/Dinner.css';
import '../Styles/Menu.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderDinner from './HeaderDinner';
import Order from './Order';
import Item from './ItemDish';

export default function Dinner() {
  const [dinnerDishes, setDinnerDishes] = useState([]);

  const getDinnerMenu = async () => {
    const urlDinnerMenu = 'http://localhost:3000/FullMenu?menu=Dinner';
    const fetchDinnerMenu = await fetch(urlDinnerMenu).then((response) => response.json());
    setDinnerDishes(fetchDinnerMenu);
  };
  // NAVEGA
  const navigate = useNavigate();

  const handleMorningMenu = () => {
    navigate('/Breakfast');
  };

  const handleHome = () => {
    navigate('/Menu');
  };

  useEffect(() => {
    getDinnerMenu();
  }, []);

  return (
    <div>
      <HeaderDinner />

      <section id="buttonsMenuSec">
        <button type="button" className="menuButtons" id="dinnerB" onClick={handleHome}>Home</button>
        <button type="button" className="menuButtons" id="breakfastB" onClick={handleMorningMenu}>Breakfast</button>
      </section>

      <section id="dinnerSection">
        <section id="itemsDinnerMenu">
          { dinnerDishes?.map((dish) => <Item dish={dish} key={dish.menu} />)}
          <div className="orderContainer">
            <Order />
          </div>
        </section>
      </section>
    </div>
  );
}
