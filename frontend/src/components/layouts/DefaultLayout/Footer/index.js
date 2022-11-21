<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import "./footer.css"
function Footer() {
    return (
      <div className="Footer">
            <div className="Logo">
            <img className="Logo" src="Logo.svg"></img>
            </div>
            
            <div className="Content-Book">
              <ul>
                <li><a>Nổi Tiếng</a></li>
                <li><a>Lập Trình</a></li>
                <li><a>Sách Cho Trẻ Em</a></li>
                <li><a>Tâm Lý</a></li>
                <li><a>Việc Kinh Doanh</a></li>
              </ul>
            </div>
            <div className="Content-Tranform">
              <ul>
                <li><a>Thông Tin</a></li>
                <li><a>Vận Chuyển</a></li>
                <li><a>Thanh Toán</a></li>
                <li><a>Về Cửa Hàng</a></li>
              </ul>
            </div>
            <div className="Content-Help">
              <ul>
                <li><a>Trợ Giúp</a></li>
                <li><a>Liên Lạc</a></li>
                <li><a>Mua Hàng & Trả Lại</a></li>
                <li><a>Trợ Giúp Cho Người Mua</a></li>
              </ul>
            </div>
            <div className="Content-hotPhone">
              <ul>
                <li><p>+0366 9311 95</p></li>
                <li><a>Đường dây nóng</a></li>
              </ul>
            </div>
            <div className="End-Page">
            Tất cả các quyền © 2003-2021 LIBRARY Điều khoản sử dụng | Chính sách bảo mật
            </div>
=======
import styles from './Footer.module.scss';

function Footer() {
    return (
      <div className={styles.Footer}>
        <div className='Content'>

            <h1>FOOTER</h1>
        </div>
>>>>>>> c7cb4d4a04f0adb71cc4a600b4d3065d318185b7
      </div>
    );
  }
  
  export default Footer;