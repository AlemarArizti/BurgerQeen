import '../Estilos/Breakfast.css';
// import '../Estilos/Menu.css';

import Order from './Order';
import HeaderBreakfast from './HeaderBreakfast';
import Breakfast from './Breakfast';

export default function SignIn() {
  return (
    <div>
      <HeaderBreakfast />
      <section>
        <button type="button" id="breakfastB">Breakfast</button>
        <button type="button" id="dinnerB">Dinner</button>
      </section>

      <section id="menuAndOrderSection">
        <Breakfast />
        <Order />
      </section>
    </div>

  );
}
