import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/public/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [setReviews])

    console.log(reviews)

    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='text-center px-28'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className='mx-auto'
                            />
                            <p className='mt-4'>{review.details}</p>
                            <h2 className='text-xl text-yellow-600'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;