
import Routers from './components/Routes';
import Header from './components/layouts/DefaultLayout/Header';
import Footer from './components/layouts/DefaultLayout/Footer';

function App() {
  return (
    <div className="App">
      {/* Default Header */}
      <Header/>
      {/* Content */}
      <Routers/>
      {/* Default Footer */}
      <Footer/>
    </div>
  );
}

export default App;
