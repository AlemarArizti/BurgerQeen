// import { useNavigate } from 'react-router-dom';
import '../Estilos/Breakfast.css';

export default function Order() {
  return (
    <div>
      <section id="orderSec">
        <h3>Orden</h3>

        <section className="itemOrder">
          <button type="button" className="removeButton">-</button>
          <h3>1</h3>
          <h3>Hamburguesa</h3>
          <h3>$20</h3>
          <button type="button" className="addButton">+</button>
        </section>
      </section>
    </div>
  );
}
