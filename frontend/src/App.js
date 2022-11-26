
import { useLocation } from "react-router-dom";
import Routers from './components/Routes';
import Header from './components/layouts/DefaultLayout/Header';
import Footer from './components/layouts/DefaultLayout/Footer';
import { useEffect } from "react";
import { getAllProducts } from "./redux/apiRequest";
import { useDispatch } from "react-redux";

function App() {

  const location = useLocation();
  const dispatch = useDispatch();

  // render all sản phẩm khi app được mouse
  useEffect(()=> {
    getAllProducts(dispatch);
  },[])

  return (
    <div className="App">
      {/* Default Header */}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Header/>}
      {/* Content */}
      <Routers/>
      {/* Default Footer */}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Footer/>}
    </div>
  );
}

export default App;
