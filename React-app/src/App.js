import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './contents/auth/register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/auth/register" element={<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App;