import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

function Routers() {
    return (
      <div >
       {/*chứa các routes  */}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    );
  }

  export default Routers;