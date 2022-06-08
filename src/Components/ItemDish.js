/* eslint-disable react/prop-types */
import React from 'react';

function Item({ dish }) {
  console.log(dish);
  return (
    <div>
      <section id="itemsBreakfastMenu">
        <section className="itemBreakfast">
          <img src={dish.image} alt="coffe" className="imgMenu" />
          <h5>{dish.dishName}</h5>
          <p className="cost">{dish.price}</p>
        </section>
      </section>
    </div>
  );
}

export default Item;
