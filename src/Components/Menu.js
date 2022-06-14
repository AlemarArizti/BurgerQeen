import '../Styles/Menu.css';
import { useNavigate } from 'react-router-dom';
import HeaderFullMenu from './HeaderFullMenu';
import FullMenu from './FullMenu';
// import HeaderDinner from './HeaderDinner';
// import Dinner from './Dinner';

export default function SignIn() {
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
      <HeaderFullMenu />

      <section id="buttonsMenuSec">
        <button type="button" className="menuButtons" id="breakfastB" onClick={handleMorningMenu}>Breakfast</button>
        <button type="button" className="menuButtons" id="dinnerB" onClick={handleDinnerMenu}>Dinner</button>
      </section>

      <section className="filterButtons">
        <button type="button" className="menuButtons" id="all">See all</button>
        <button type="button" className="menuButtons" id="burgers">Meals</button>
        <button type="button" className="menuButtons" id="snacks">Side</button>
        <button type="button" className="menuButtons" id="drinnks">Drink</button>
      </section>
      <FullMenu />
    </div>

  );
}
