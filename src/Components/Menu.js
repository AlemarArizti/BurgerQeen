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
        <button type="button" className="menuButtons" id="breakfastB" onClick={handleMorningMenu}>Desayuno</button>
        <button type="button" className="menuButtons" id="dinnerB" onClick={handleDinnerMenu}>Almuerzo/Cena</button>
      </section>

      <section>
        <button type="button" className="menuButtons" id="all">Ver todo</button>
        <button type="button" className="menuButtons" id="burgers">Hamburguesas</button>
        <button type="button" className="menuButtons" id="snacks">Acompañamientos</button>
        <button type="button" className="menuButtons" id="drinnks">Para Tomar</button>
      </section>
      <FullMenu />
    </div>

  );
}
