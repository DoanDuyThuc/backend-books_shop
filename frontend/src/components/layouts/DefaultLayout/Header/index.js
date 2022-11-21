import {NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';

function Header() {

    const User = useSelector((state) => state.auth.login.currentUser);

    return (
      <header className={styles.Wrapper}>
        <div className='Content'>
            <div className={styles.Logo} >
                <NavLink to='/'> 
                    <img className={styles.LogoImg} src="https://anybooks.vn/uploads/1792221100_anybookssachhaynendocreviewsachanybookslogo.png" alt="Anybooks - Sách Hay Nên Đọc - Review Sách" title="Anybooks - Sách Hay Nên Đọc - Review Sách"/></NavLink>
                <NavLink/>
            </div>
            <div className={styles.Option}>
                <NavLink to='/sanpham'>
                    Sản Phẩm
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
                {User ? 
                <button className={styles.ActionUser}>
                    <FontAwesomeIcon icon={faUser}/>
                    <span>{User.staff.username}</span>
                </button>    
                :
                <div style={{paddingLeft: '36px'}} className={styles.ActionUser}>  
                    <NavLink style={{textDecoration: 'none',color:'black'}} to='/login' >Đăng Nhập</NavLink>
                </div>
                }
                <button className={styles.ActionCart}>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </button>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;