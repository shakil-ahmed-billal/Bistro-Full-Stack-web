import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import swiper images 
import SectionTitle from '../../../components/Shared/SectionTitle';
import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'



const Category = () => {
  return (
    <div className='w-8/12 mx-auto mt-10 py-10'>
      <SectionTitle
        heading='Order Now'
        subHeading='form 11.00am to 9.00pm'>
      </SectionTitle>
      <Swiper
        width={800}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <p className='uppercase text-4xl font-bold text-white -mt-10 text-center'>Salads</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <p className='uppercase text-4xl font-bold text-white -mt-10 text-center'>Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <p className='uppercase text-4xl font-bold text-white -mt-10 text-center'>Soups</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <p className='uppercase text-4xl font-bold text-white -mt-10 text-center'>Desserts</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <p className='uppercase text-4xl font-bold text-white -mt-10 text-center'>Salads</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Category
