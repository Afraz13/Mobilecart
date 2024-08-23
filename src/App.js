
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Home from './pages/Home';

import Cardsview from './pages/Cardsview';
import Like from './pages/Like';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cards' element={<Cardsview/>}/>
    <Route path='/like' element={<Like/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
