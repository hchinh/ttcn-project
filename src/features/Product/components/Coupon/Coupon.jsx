import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Carousel } from 'react-bootstrap';
import styles from './Coupon.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Coupon(props) {
    return (
    <div className={styles.sliderCoupon}>
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <img src="https://shop-redq.vercel.app/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png" alt="CouponImg" className={styles.imgCoupon}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src="https://shop-redq.vercel.app/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png" alt="CouponImg" className={styles.imgCoupon}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src="https://shop-redq.vercel.app/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png" alt="CouponImg" className={styles.imgCoupon}/>
      </SwiperSlide>
      <SwiperSlide>
          <img src="https://i.imgur.com/1Ky5cRH.jpg" alt="CouponImg" className={styles.imgCoupon}/>
      </SwiperSlide>
    </Swiper>
    
    </div>
  //   <div>
  //       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  //       <div class="carousel-indicators">
  //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  //         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  //       </div>
  //       <div class="carousel-inner">
  //       <div class="carousel-item active">
  //       <img src="https://shop-redq.vercel.app/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png" class="d-block w-100" alt="..."/>
  //   </div>
  //       <div class="carousel-item">
  //       <img src="https://shop-redq.vercel.app/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png" class="d-block w-100" alt="..."/>
  //       </div>
  //       <div class="carousel-item">
  //       <img src="https://shop-redq.vercel.app/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png" class="d-block w-100" alt="..."/>
  //       </div>
  //   </div>
  //       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  //   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  //   <span class="visually-hidden">Previous</span>
  // </button>
  // <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  //   <span class="carousel-control-next-icon" aria-hidden="true"></span>
  //   <span class="visually-hidden">Next</span>
  // </button>
  //       </div>
  //   </div>    
    );
}

export default Coupon;