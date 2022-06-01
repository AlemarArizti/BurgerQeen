import { useState } from 'react';
import '../Estilos/Order.css';

export default function Order() {
  const [client, setClient] = useState(true);

  return (
    <div>
      <section>

        {client ? (
          <section id="orderSec">
            <h1 id="orderTitle">Haz clic aquí para agregar una nueva orden</h1>
            <button type="button" className="newOrderButton" id="newOrder" onClick={() => setClient(!client)}>
              +
            </button>
          </section>

        ) : (
          <section id="orderSec">
            <form id="orderClient">
              <h1 id="orderTitle">Agrega el nombre del cliente</h1>
              <input
                type="text"
                placeholder="Ingresa aqui el nombre del cliente"
                className="placeClient"
                id="placeClient"
              />
              <input
                type="button"
                className="newClientButton"
                value="Continuar"
              />
            </form>
          </section>
        )}

      </section>
    </div>
  );
}
