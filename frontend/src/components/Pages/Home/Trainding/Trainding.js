import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Trainding.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function Trainding() {

    const AllProducts = useSelector((state) => state.products.productsHold.allProducts);

    return (
        <div className="Trainding">
            <div className="Content_trainding">
                <h3>Thịnh Hành</h3>
                <p>Giả tưởng và khoa học viễn tưởng</p>
                <p>Truyền cảm hứng</p>
                <p>Truyền ngắn</p>
                <p>Bí ẩn</p>
                <p>Tình cảm</p>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {AllProducts.map((AllProduct,index) => (
                    <SwiperSlide key={index} >
                        <div className="product_trainding">
                            <img src={AllProduct.image}></img>
                            <span className="price">{AllProduct.bookPrice}</span>
                            <h4 className='products_trainding-title' >{AllProduct.bookName}</h4>
                            <p>Holden Caulfield</p>
                            <button>Mua Ngay </button>
                            <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                        </div>
                    </SwiperSlide>
                ))}   
            </Swiper>
        </div>
    );
}
