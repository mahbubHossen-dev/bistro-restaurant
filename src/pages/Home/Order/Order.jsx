import React from 'react';
import Heading from '../../shared/Heading/Heading';

import orderImg1 from '../../../assets/home/slide1.jpg'
import orderImg2 from '../../../assets/home/slide2.jpg'
import orderImg3 from '../../../assets/home/slide3.jpg'
import orderImg4 from '../../../assets/home/slide4.jpg'
import orderImg5 from '../../../assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Order = () => {
    return (
        <div className='text-center my-12'>
            <div>
                <Heading subHeading={'From 11:00am to 10:00pm'} heading={'Order Online'}/>
            </div>
            <div className='mt-6'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={orderImg1} alt="" />
                        <h3 className='text-2xl font-thin -mt-12 text-white'>Salad</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={orderImg2} alt="" />
                        <h3 className='text-2xl font-thin -mt-12 text-white'>Soup</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={orderImg3} alt="" />
                        <h3 className='text-2xl font-thin -mt-12 text-white'>Pizza</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={orderImg4} alt="" />
                        <h3 className='text-2xl font-thin -mt-12 text-white'>Dessert</h3>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <img src={orderImg5} alt="" />
                        <h3 className='text-2xl font-thin -mt-12 text-white'>Coffee</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Order;