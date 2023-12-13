import './Style.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Index from './Components/Index';
import Header from './Components/Header';
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Header' element={<Header/>}/>
    </Routes>
  </Router>
  );
}

export default App;
