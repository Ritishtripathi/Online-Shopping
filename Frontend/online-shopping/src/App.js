import './Style.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Index from './Components/Index';
import Header from './Components/Header';
import Items from './Components/Items';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Dashboard from './Components/Dashboard';
import AddProduct from './Components/AddProduct';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    
    
         <Route path='/Index' element={<Index/>}/>
         <Route path='/Shop' element={<Shop/>}/>
         <Route path='/Header' element={<Header/>}/>
         <Route path='/Items' element={<Items/>}/>
         <Route path='/Footer' element={<Footer/>}/>
         <Route path='/Dashboard' element={<Dashboard/>}/>
         <Route path='/AddProduct' element={<AddProduct/>}/>
      
    </Routes>
  </Router>
  );
}

export default App;
