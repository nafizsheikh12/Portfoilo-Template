import React from 'react'
import './testimonial.css'


const TestimonialCard = () => {
  return (
    <>
         
         <div>
                          <div className='testimonial-inner'>
                               <div className='testimonial-card-info'>
                                    <div className='testimonial-card-thumbnail'>
                                        <img src='img/final-home--2nd.png'/>
                                    </div>
                                    <div className='testimonial-card-content'>
                                        <span className='testimonial-subtitle'>Bound - Trolola</span>
                                         <h3 className='testimonial-title'>John Leee</h3>
                                         <span className='testimonial-designation'>Designation</span>
                                    </div>
                               </div>
                               <div className='testimonial-card-description'>
                                     <div className='title-area'>
                                         <div className='testimonial-title-info'>
                                                <h3 class="testimonial-title">Web App Development</h3>
                                                <span class="testimonial-date">Upwork - Mar 4, 2016 - Aug 30, 2021</span>
                                         </div>
                                         <div className='testimonial-rating'>
                                             <img src="/img/rating.png" alt="rating-image"/>
                                             <img src="/img/rating.png" alt="rating-image"/>
                                             <img src="/img/rating.png" alt="rating-image"/>
                                             <img src="/img/rating.png" alt="rating-image"/>
                                             <img src="/img/rating.png" alt="rating-image"/>
                                         </div>
                                     </div>
                                     <div className='testimonial-separetor'></div>
                                     <p className='testimonial-description'>
                                            Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                            sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                            hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                            .
                                      </p>
                               </div>
                          </div>
        </div>

    </>
  )
}

export default TestimonialCard