
import { useLocation } from "react-router-dom";
import Routers from './components/Routes';
import Header from './components/layouts/DefaultLayout/Header';
import Footer from './components/layouts/DefaultLayout/Footer';

function App() {

  const location = useLocation();

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
