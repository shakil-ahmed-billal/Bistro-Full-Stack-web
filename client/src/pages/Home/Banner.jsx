import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider1 from '../../assets/home/01.jpg';
import slider2 from '../../assets/home/02.jpg';
import slider3 from '../../assets/home/03.png';
import slider4 from '../../assets/home/04.jpg';
import slider5 from '../../assets/home/05.png';
import slider6 from '../../assets/home/06.png';


const Banner = () => {
  return (
    <div className=''>
      <Carousel>
        <div className="">
            <img className='w-full' src={slider1} alt="" />
        </div>
        <div className="">
            <img src={slider2} alt="" />
        </div>
        <div className="">
            <img src={slider3} alt="" />
        </div>
        <div className="">
            <img src={slider4} alt="" />
        </div>
        <div className="">
            <img src={slider5} alt="" />
        </div>
        <div className="">
            <img src={slider6} alt="" />
        </div>

      </Carousel>
    </div>
  )
}

export default Banner
