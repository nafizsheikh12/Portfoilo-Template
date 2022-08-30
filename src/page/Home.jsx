import React from 'react'


//component
import './home.css'
import HomeSlide from '../component/HomeSlide/HomeSlide'
import Navbar from '../component/Navbar/Navbar';
import PortfoiloSection from '../component/Portfoilo/PortfoiloSection';
import Resume from '../component/resume/Resume';
import ServiceSection from '../component/service-section/ServiceSection';
import Testimonial from '../component/testimonial/Testimonial';
import BlogSec from '../component/blogsection/BlogSec'
import ClientSection from '../component/clientsection/ClientSection';
import PriceSection from '../component/priceingSection/PriceSection';
import Contractus from '../component/contractsection/Contractus';
import Footer from '../component/Footer/Footer';


const Home = () => {
  return (
    <>
       <Navbar/>
       <HomeSlide/> 
       <ServiceSection />
       <PortfoiloSection/>
       <Resume/>
       <Testimonial/>
       <ClientSection/>
       <PriceSection/>
       <BlogSec/>
       <Contractus/>
       <Footer/>
    </>
  )
}

export default Home