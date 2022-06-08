import '../Styles/FullMenu.css';
import { useEffect, useState } from 'react';
import Item from './ItemDish';

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
    <div id="menuAndOrderSection">
      { dishes?.map((dish) => <Item dish={dish} key={dish.id} />)}
    </div>
  );
}
