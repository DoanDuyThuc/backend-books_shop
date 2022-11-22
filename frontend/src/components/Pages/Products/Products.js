import {Grid, FormControl, NativeSelect} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Products.module.scss';
import { getAllProducts, getProductsItem } from '../../../redux/apiRequest';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';

function Products() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.products.productsHold.allProducts)
  const productsPanigation = useSelector((state) => state.products.productsPagination);

  // handle getItemProducts
  const handleGetItem = (id) => {
      getProductsItem(dispatch, id,navigate)
      
  }


  useEffect(()=> {
    getAllProducts(dispatch);
  },[])

  const end = productsPanigation.itemPerPage * productsPanigation.currentPage
  const start = end - productsPanigation.itemPerPage
  const currentProducts = allProducts.filter((val) => {
      if(productsPanigation.EnterSearch === ""){
          return val
      }else if(val.bookName.toLowerCase().includes(productsPanigation.EnterSearch.toLowerCase())){
          return val
      }
      return 0;
  }).slice(start, end)

  return (
    <div className='Content'>
      <div className={styles.Products}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            đây là sideleft
          </Grid>
          <Grid className={styles.ProductsRight} item xs={9}>
            <div className={styles.ProductsRightHeader}>
              <span>Sắp Xếp Theo :</span>
              {/* bán chạy */}
              <FormControl className={styles.Sell} fullWidth>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>Bán Chạy Tuần</option>
                  <option value={20}>Bán Chạy Tháng</option>
                </NativeSelect>
              </FormControl>
            </div>  
            
            <div className={styles.GetAllProducts}>
              <Grid container spacing={2}>
                {currentProducts.map((allProduct,index) => (
                  <Grid key={index} item xs={3}>
                      <div onClick={()=>handleGetItem(allProduct._id)} className={styles.CardsItem}>
                          <div className={styles.CardsItemImg}>
                            <img className={styles.CardImg} src={allProduct.image} />
                          </div>
                          <div className={styles.CardTitle}>
                            <div className={styles.CardContent} >
                              <h2>
                                {allProduct.bookName}
                              </h2>
                            </div>
                            <div className={styles.CardPrice}>
                              <span>{allProduct.bookPrice}đ</span>
                            </div>
                            <div className={styles.CardRating}>
                              sao
                            </div>
                          </div>
                      </div>
                  </Grid>
                ))}
              </Grid>
            </div>

            {/* phân trang */}
            <Pagination/>
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
}

export default Products;
