import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Trainding.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Trainding() {
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
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
        <SwiperSlide><div className="product_trainding">
                    <img src="image2.svg">
                    </img>
                    <span className="price">99.000đ</span>
                    <h4>Bắt Trẻ Đồng Xanh</h4>
                    <p>Holden Caulfield</p>
                    <button>Mua Ngay </button> 
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
            </div></SwiperSlide>
      </Swiper>
    </div>
  );
}
