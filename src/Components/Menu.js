import Order from './Order';
import HeaderBreakfast from './HeaderBreakfast';
import Breakfast from './Breakfast';
// import HeaderDinner from './HeaderDinner';
// import Dinner from './Dinner';

export default function SignIn() {
  return (
    <div>
      <HeaderBreakfast />

      <section id="buttonsMenuSec">
        <button type="button" className="menuButtons" id="breakfastB">Desayuno</button>
        <button type="button" className="menuButtons" id="dinnerB">Almuerzo/Cena</button>
      </section>

      <section id="menuAndOrderSection">
        <Breakfast />
        <Order />
      </section>
    </div>

  );
}
