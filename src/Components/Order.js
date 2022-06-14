import { useState } from 'react';
import OrderDetails from './OrderDetails';
import { createOrder } from '../lib/Fetching';
import '../Styles/Order.css';

export default function Order() {
  const [order, setOrder] = useState(true);
  const [details, setDetails] = useState(true);
  const [client, setClient] = useState('');
  // guardar cliente
  // mostrar la orden solo si el cliente se ha guardado en la api
  // si cliente ya se guardo, entonces muestrame los detalles de la orden
  const handleSaveClient = () => {
    createOrder(client);
  };

  return (
    <div>
      <section className="orderBackground">

        {order ? (
          <section id="orderSec">
            <h1 id="orderTitle">Haz clic aquí para agregar una nueva orden</h1>
            <button type="button" className="newOrderButton" id="newOrder" onClick={() => setOrder(!order)}>
              +
            </button>
          </section>

        ) : (
          <section id="orderSec">
            { details ? (
              <form id="orderClient">
                <h1 id="orderTitle">Agrega el nombre del cliente</h1>
                <input
                  type="text"
                  required
                  placeholder="Ingresa aqui el nombre del cliente"
                  className="placeClient"
                  id="placeClient"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                />
                <button
                  type="button"
                  className="newClientButton"
                  id="newOrder"
                  onClick={() => { setDetails(!details); handleSaveClient(); }}
                >
                  Continuar
                </button>
              </form>
            ) : (
              <OrderDetails />
            )}
          </section>
        )}

      </section>
    </div>
  );
}
