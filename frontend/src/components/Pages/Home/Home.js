import './Home.css';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Trainding from './Trainding/Trainding';
import Trailer from './Trailer/Trailer';

function Home() {
  return (
    <div className="HomePage">
        <div style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'}} className='Trailer'>
      <div className='Content'>
          <Trailer/>
        </div>
        <div>
          <Trainding/>
        </div>
      </div>
    </div>
    );
}

export default Home;
