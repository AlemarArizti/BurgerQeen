import '../Styles/Menu.css';
import { useNavigate } from 'react-router-dom';
import HeaderBreakfast from './HeaderBreakfast';
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
    <body>
      <HeaderBreakfast />

      <section id="buttonsMenuSec">
        <button type="button" className="menuButtons" id="breakfastB" onClick={handleMorningMenu}>Desayuno</button>
        <button type="button" className="menuButtons" id="dinnerB" onClick={handleDinnerMenu}>Almuerzo/Cena</button>
      </section>

      <section id="menuAndOrderSection">
        <FullMenu />
      </section>
    </body>

  );
}
