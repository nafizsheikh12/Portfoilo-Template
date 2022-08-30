import React from 'react'
import './testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


//component
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section className='testimonialsection'>
         <div className='container'>
               <span className='subtitle'>WHAT CLIENTS SAY</span>
               <h2 className='title'>Testimonial</h2>
         </div>
         <div className='container'>
             <div className='testimonialSlider'>
                <Slider {...settings}>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                </Slider>
             </div>
         </div>
      </section>
    </>
  )
}

export default Testimonial