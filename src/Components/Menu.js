import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

export default function SignIn() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };
  return (
    <div>
      <h1>Menu</h1>
      <button type="button" id="breakfastB">Breakfast</button>
      <button type="button" id="dinnerB">Dinner</button>

      <button type="button" id="logOutB" onClick={handleLogout}>Log out</button>
    </div>

  );
}
