import React from 'react';

// eslint-disable-next-line react/prop-types
function Item({ dish }) {
  console.log(dish);
  return (
    <div>
      <section className="itemBreakfast">
        <h5>Café americano</h5>
        {/* }<img src= alt="coffe" className="imgMenu" />
        <h5>Café americano</h5>
        <p className="cost">$5</p> */}
      </section>
    </div>
  );
}

export default Item;
