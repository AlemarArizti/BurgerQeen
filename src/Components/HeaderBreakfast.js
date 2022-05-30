import '../Estilos/Breakfast.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

export default function HeaderBreakfast() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };
  return (
    <div>
      <header>
        <h1 id="coffeeHeaderText">It´s coffee time!</h1>
        <input type="text" id="search" />
        <button type="button" id="logOutB" onClick={handleLogout}>Log out</button>
      </header>

    </div>
  );
}
