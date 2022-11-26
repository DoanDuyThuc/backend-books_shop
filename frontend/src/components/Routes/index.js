import { Routes, Route } from 'react-router-dom';
import Carts from '../Pages/Carts/Carts';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import ProductsItems from '../Pages/ProductsItem/ProductsItem';
import Register from '../Pages/Register/Register';

function Routers() {
    return (
      <div className='WrapBody'>
       {/*chứa các routes  */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sanpham' element={<Products/>} />
            <Route path='/sanpham/:id' element={<ProductsItems/>} />
            <Route path='/carts' element={<Carts/>} />
            <Route path='/lienhe' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    );
  }

  export default Routers;