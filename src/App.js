
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Footer from './component/Footer/Footer'
import men_banner from './component/Asset/banner_mens.png'
import women_banner from './component/Asset/banner_women.png'
import kid_banner from './component/Asset/banner_kids.png'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>

<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/mens' element={<ShopCategory   banner={men_banner}  category="men"/>}/>
  <Route path='/womens' element={<ShopCategory  banner={women_banner} category="women"/>}/>
  <Route path='/kids' element={<ShopCategory  banner={kid_banner}  category="kid"/>}/>
<Route path="product" element={<Product/>}>
<Route path=":productId" element={<Product/>}/>
</Route>


<Route path='/cart' element={<cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
</Routes>
<Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
