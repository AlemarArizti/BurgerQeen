// import { useState } from 'react';
import check from '../Assets/Icons/check.svg';
import add from '../Assets/Icons/add.svg';
import remove from '../Assets/Icons/remove.svg';
import '../Styles/Order.css';

export default function OrderDetails() {
  return (
    <div>
      <section id="orderDetails">
        <h1 id="orderNumber">Orden #22</h1>
        <h4>Cliente: Juana D</h4>
        <table className="orderList" />
        <tbody>
          <tr>
            <td>
              <img src={remove} alt="delete" className="removeButton" />
            </td>
            <td>1</td>
            <td>Sandwich de jamon y queso</td>
            <td>$10</td>
            <td>
              <img src={add} alt="add" className="addButton" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={remove} alt="delete" className="removeButton" />
            </td>
            <td>2</td>
            <td>Jugo de frutas naturales</td>
            <td>$7</td>
            <td>
              <img src={add} alt="add" className="addButton" />
            </td>
          </tr>
          <tr>
            <td>
              <img src={remove} alt="delete" className="removeButton" />
            </td>
            <td>1</td>
            <td>Cafe americano</td>
            <td>$5</td>
            <td>
              <img src={add} alt="add" className="addButton" />
            </td>
          </tr>
        </tbody>
        <button type="button" className="newOrderButton" id="sendOrder">
          <img src={check} alt="sendOrder" className="checkImg" />
        </button>
      </section>
    </div>
  );
}
