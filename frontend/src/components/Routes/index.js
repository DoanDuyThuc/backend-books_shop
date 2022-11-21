import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
<<<<<<< HEAD
=======
import Register from '../Pages/Register/Register';
>>>>>>> 7d581b225e717fae6906efdc70062b2b83722d9a

function Routers() {
    return (
      <div >
       {/*chứa các routes  */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
<<<<<<< HEAD
=======
            <Route path='/register' element={<Register/>} />
>>>>>>> 7d581b225e717fae6906efdc70062b2b83722d9a
        </Routes>
      </div>
    );
  }

  export default Routers;