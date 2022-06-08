import '../Styles/Breakfast.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import Logo from '../Assets/Logo/logotype-white.svg';
// import LogOut from '../Assets/Icons/logout.svg';

export default function HeaderBreakfast() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };
  return (
    <header>
      <img src={Logo} alt="Logo" className="imgLogo" />
      <h1 id="coffeeHeaderText">It´s coffee time!</h1>
      <input type="text" id="search" placeholder="Busca por producto..." />
      <button type="button" id="logOutB" onClick={handleLogout}>log out </button>
    </header>
  );
}
