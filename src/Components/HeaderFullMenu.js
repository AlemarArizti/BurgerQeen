import '../Styles/Dinner.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import Logo from '../Assets/Logo/logotype-white.svg';

export default function HeaderFullMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };
  return (
    <div>
      <header className="headerDinner">
        <img src={Logo} alt="Logo" className="imgLogo" />
        <h1 id="coffeeHeaderText">Welcome!</h1>
        <input type="text" id="search" placeholder="Busca por producto..." />
        <button type="button" id="logOutB" onClick={handleLogout}>Log out</button>
      </header>

    </div>
  );
}
