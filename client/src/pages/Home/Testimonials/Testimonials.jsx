import { useEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../../components/Shared/SectionTitle";

// import react start 
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <div className="my-16">
            <SectionTitle
                heading="Testimonials"
                subHeading="What our customers say"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map((review) => <SwiperSlide key={review._id}>
                    <div className="w-7/12 mx-auto text-center">
                        <div className="flex justify-center my-5">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={3}
                                readOnly
                            />
                        </div>
                        <p className="text-center my-3">{review.details}</p>
                        <p className="text-3xl text-yellow-400 font-bold">{review.name}</p>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default Testimonials
