import '../Styles/FullMenu.css';
import { useEffect, useState } from 'react';
import Item from './ItemDish';
import Order from './Order';
import { getFullMenu } from '../lib/Fetching';

export default function FullMenu() {
  const [dishes, setDishes] = useState([]);

  const fetchingMenu = () => {
    getFullMenu().then((data) => {
      setDishes(data);
    });
  };

  useEffect(() => {
    fetchingMenu();
  }, []);
  // console.log(dishes);
  return (
    <div className="menuAndOrderSection">
      <section id="itemsFullMenu">
        { dishes?.map((dish) => <Item dish={dish} key={dish.id} />)}
      </section>
      <div className="orderContainer">
        <Order />
      </div>
    </div>
  );
}
