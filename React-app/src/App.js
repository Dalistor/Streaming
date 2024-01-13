import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './contents/auth/register/Register';
import Login from './contents/auth/login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/auth/register" element={<Register/>}/>
          <Route path="/auth/login" element={<Login/>}/>
        </Routes>
      </Router>
  );
}

export default App;