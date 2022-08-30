import React from 'react'
import "./priceSection.css"


const PriceSection = () => {
  return (
    <>
       <section id="priceSection">
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-4 col-xl-5 mb_md--40 mb_sm--40 small-margin-pricing'>
                     <div className='d-block d-lg-flex text-center d-lg-left section-flex flex-wrap align-content-start h-100'>
                         <div className='position-sticky sticky-top rbt-sticky-top-adjust'>
                            <div className='section-title text-left'>
                                  <span class="subtitle text-center text-lg-left">Pricing</span>
                                  <h2 class="title text-center text-lg-left">My Pricing</h2>
                            </div>
                         </div>
                     </div>
                  </div>
                  <div className='col-lg-8 col-xl-7'>
                      <div className='navigation-wrapper'>
                         <ul className='nav' id="myTab">
                             <li className='nav-item'>
                                 <a className="nav-style active">Static</a>
                             </li>
                             <li className='nav-item recommended'>
                                 <a class="nav-style itemactive" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Standard</a>
                             </li>
                             <li className='nav-item'>
                                  <a class="nav-style" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Premium</a>
                             </li>
                         </ul>
                         <div className='tab-content' id="myTabContent">
                             <div className='tab-pane fade  activeprice'>
                                 <div className='rn-pricing'>
                                      <div className='pricing-header'>
                                         <div className='priceheader-left'>
                                             <h2 class="title">Make Your Single Page</h2>
                                             <span>Elementor</span>
                                         </div>
                                         <div className='header-right'>
                                             <span>$30.00</span>
                                         </div>
                                      </div>
                                      <div className='pricing-body'>
                                            <p class="description">
                                                All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                                chunks as necessary
                                            </p>
                                            <div className='check-wrapper'>
                                                <div className='left-area'>
                                                   <div className='check d-flex'>
                                                        <i class="fa-solid fa-angle-right"></i><p>1 Page with Elementor</p>
                                                   </div>
                                                   <div className='check d-flex'>
                                                         <i class="fa-solid fa-angle-right"></i><p>1 Page with Elementor</p>
                                                   </div>
                                                   <div className='check d-flex'>
                                                        <i class="fa-solid fa-angle-right"></i><p>1 Page with Elementor</p>
                                                   </div>
                                                   <div className='check d-flex'>
                                                         <i class="fa-solid fa-angle-right"></i><p>1 Page with Elementor</p>
                                                   </div>
                                                </div>
                                                 <div className='right-area'>
                                                   <div className='check d-flex'>
                                                         <i class="fa-solid fa-angle-right"></i><p>1 Page with Elementor</p>
                                                   </div>
                                                   <div className='check d-flex'>
                                                         <i class="fa-solid fa-angle-right"></i><p>1 Page with Elementor</p>
                                                   </div>
                                                   <div className='check d-flex'>
                                                          <i class="fa-solid fa-angle-right"></i><p>1 Page with Elementor</p>
                                                   </div>
                                                   <div className='check d-flex'>
                                                        <i class="fa-solid fa-angle-right"></i><p>1 Page with Elementor</p>
                                                   </div>
                                                 </div>
                                            </div>
                                      </div>
                                      <div className='pricing-footer'>
                                           <a href='#' className='rn-btn d-block'><span>ORDER NOW</span></a>
                                           <div class="time-line">
                                                <div class="single-cmt d-flex">
                                                    <span>2 Days Delivery</span>
                                                </div>
                                                <div class="single-cmt d-flex">
                                            
                                                    <span>Unlimited Revission</span>
                                                </div>
                                            </div>
                                      </div>
                                 </div>
                             </div>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
       </section>
    </>
  )
}

export default PriceSection