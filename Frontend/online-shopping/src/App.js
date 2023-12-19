import './Style.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Index from './Components/Index';
import Header from './Components/Header';
import Items from './Components/Items';
import Footer from './Components/Footer';
import Rupay from './Components/Rupay';
import Shop from './Components/Shop';
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/Index' element={<Index/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/Items' element={<Items/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/Rupay' element={<Rupay/>}/>
      <Route path='/Shop' element={<Shop/>}/>

    </Routes>
  </Router>
  );
}

export default App;
