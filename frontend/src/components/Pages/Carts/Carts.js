import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import styles from './Carts.module.scss';

function Carts() {

    const [checkAll, setCheckAll] = useState(false);
    const [checkItem, setCheckItem] = useState(false);
    const [quality, setQuality] = useState(1);

    const handleMinus = () => {
        if(quality <= 0){
            return;
        }else {
            setQuality(Number(quality - 1))
        }
    }
  
  return (
    <div className='Content'>
      <div className={styles.Carts}>
        <div className={styles.CartsTitleHold}>
            <h1 className={styles.CartsTitle} >Giỏ Hàng</h1>
            <span>(1 sản phẩm)</span>
        </div>
        {/* Grid Carts */}
        <Grid style={{margin: '20px 0'}} container spacing={4} >
            <Grid xs={8} >
                <div className={styles.CartsGridHeader}>
                    <div className={styles.CartsCheckAll} style={{margin: '0'}} >
                        <div className={styles.CartsHeader} >
                            <input
                                type='checkbox'
                                value={checkAll}
                                onChange={()=> setCheckAll(!checkAll)}
                            />
                            <label>Chọn tất cả (1 sản phẩm)</label>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexBasis: '36%', justifyContent: 'space-around'}} >
                        <span>Số lượng</span>
                        <span style={{flexBasis: '42%'}} >Thành tiền</span>
                    </div>
                </div>

                <div className={styles.CartsGridFooter}>
                    <div className={styles.CartsCheckItem} style={{margin: '0'}} >
                        <div className={styles.CartsFooter} >
                            <input
                                type='checkbox'
                                value={checkItem}
                                onChange={()=> setCheckItem(!checkItem)}
                            />
                            <img className={styles.CardsFooterImage} src='https://vnibooks.com/wp-content/uploads/2022/08/thao-tung-tam-li.jpg.webp'/>
                        </div>

                        <div className={styles.CartsFooterTitle}>
                            <span>Thao Túng Tâm Lý – Nhận Diện, Thức Tỉnh Và Chữa Lành Những Tổn Thương Tiềm Ẩn</span>
                            <span>199.000đ</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexBasis: '55%', justifyContent: 'space-around', alignItems:'center'}} >
                        <div className={styles.quality}>
                            <div className={styles.qualityHold}>
                                <a onClick={handleMinus} className={styles.qualityBtn} >
                                    <FontAwesomeIcon icon={faMinus}/>
                                </a>
                                <input className={styles.qualityInput} type='text' maxvalue={999} minvalue={1} value={quality} />
                                <a onClick={()=> setQuality(Number(quality + 1))} className={styles.qualityBtn} >
                                    <FontAwesomeIcon icon={faPlus}/>
                                </a>
                            </div>
                        </div>
                        <span style={{color: '#C92127'}} >199.000đ</span>
                        <div className={styles.CartsFooterRemove} >
                            <FontAwesomeIcon icon={faTrash}/>
                        </div>
                    </div>
                </div>
                
            </Grid>
            <Grid xs={4}>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Carts;
