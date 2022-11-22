import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Sale.css';    

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function Sale() {
    return (
        <div className="Sale">
            <div className="Content_trainding">
                <h2>Khuyến Mãi</h2>
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
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="product_trainding">
                        <img src="image2.svg"></img>
                        <span className="price">99.000đ</span><span className="price_sale">99.000đ</span>  
                        <h4>Bắt Trẻ Đồng Xanh</h4>
                        <p>Holden Caulfield</p>
                        <button>Mua Ngay </button>
                        <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
