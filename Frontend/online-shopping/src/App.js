import './Style.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Index from './Components/Index';
import Header from './Components/Header';
import Payment from './Components/Payment';
import Items from './Components/Items';
import Footer from './Components/Footer';
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/Index' element={<Index/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/Items' element={<Items/>}/>
      <Route path='/Footer' element={<Footer/>}/>
    </Routes>
  </Router>
  );
}

export default App;
