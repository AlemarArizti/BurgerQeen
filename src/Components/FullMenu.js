import '../Styles/FullMenu.css';
import { useEffect, useState } from 'react';
import Item from './ItemDish';
import Order from './Order';

export default function FullMenu() {
  const [dishes, setDishes] = useState([]);

  const getFullMenu = async () => {
    const urlFullMenu = 'http://localhost:3000/FullMenu';
    const fetchFullMenu = await fetch(urlFullMenu).then((response) => response.json());
    setDishes(fetchFullMenu);
  };

  useEffect(() => {
    getFullMenu();
  }, []);
  // console.log(dishes);
  return (
    <div className="menuAndOrderSection">
      <section id="itemsFullMenu">
        { dishes?.map((dish) => <Item dish={dish} key={dish.id} />)}
      </section>
      <Order />
    </div>
  );
}
