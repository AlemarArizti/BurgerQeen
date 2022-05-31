import '../Estilos/Dinner.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import Logo from '../Assets/Logo/logotype-white.svg';

export default function HeaderDinner() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };
  return (
    <div>
      <header>
        <img src={Logo} alt="Logo" className="imgMenu" />
        <h1 id="coffeeHeaderText">It´s dinner time!</h1>
        <input type="text" id="search" placeholder="Busca por producto..." />
        <button type="button" id="logOutB" onClick={handleLogout}>Log out</button>
      </header>

    </div>
  );
}
