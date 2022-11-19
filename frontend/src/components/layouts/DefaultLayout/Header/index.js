import {NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
      <header className={styles.Wrapper}>
        <div className={styles.Content}>
            <div className={styles.Logo} >
                <NavLink to='/'> 
                    <img className={styles.LogoImg} src="https://anybooks.vn/uploads/1792221100_anybookssachhaynendocreviewsachanybookslogo.png" alt="Anybooks - Sách Hay Nên Đọc - Review Sách" title="Anybooks - Sách Hay Nên Đọc - Review Sách"/></NavLink>
                <NavLink/>
            </div>
            <div className={styles.Option}>
                <NavLink to='/thinhhanh'>
                    Thịnh Hành
                </NavLink>
                <NavLink to='/theloai'>
                    Thể Loại
                </NavLink>
                <NavLink to='/lienhe'>
                    Liên Hệ
                </NavLink>
            </div>
            <div className={styles.Search}>
                <input placeholder='Search' spellCheck={false} />
                <button className={styles.SearchBtn} >
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
            <div className={styles.Action}>
                <button className={styles.ActionUser}>
                    <FontAwesomeIcon icon={faUser}/>
                </button>
                <button className={styles.ActionCart}>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </button>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;