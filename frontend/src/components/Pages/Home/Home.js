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
            <div className='Trailer'>
                <Trailer></Trailer>
            </div>

            <div>
                <Trainding></Trainding>
            </div>
        </div>
    );
}

export default Home;
