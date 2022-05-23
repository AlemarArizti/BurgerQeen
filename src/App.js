import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LogIn from './Components/LogIn';
import SignIn from './Components/SignIn';
import Menu from './Components/Menu.js';
import { AuthProvider } from './Context/authContext';


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<LogIn/>} />
       <Route path="/SignIn" element={<SignIn/>} />
       <Route path="/Menu" element={<Menu/>} />
     </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
