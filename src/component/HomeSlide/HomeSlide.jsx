import React from 'react'
import "./HomeSlide.css"


const HomeSlide = () => {
  return (
    <>
       <div className='HomeSlide section-gap '>
           <div className='container'>
               <div className='row'>
                   <div className='col-lg-7 order-2 order-lg-1'>
                       <div className='HomeSlide-content'>
                            <div className='inner'>
                                 <span className='subtitleh'>wellcome to my world</span>
                                 <h1 className='titleh'>Hi, I'm <span>John Lee</span><br/><span className='header-caption'>a Developers</span></h1>
                                 <div>
                                    <p className='descriptionh'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.FIND WITH ME</p>
                                 </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='social-share'>
                                        <span className='titlee'>find with me</span>
                                        <ul className='social-sharee d-flex liststyle'>
                                            <li className='facebook'>
                                                <a href='#'><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li className='linkedin'>
                                                <a href='#'><i class="fa-brands fa-linkedin-in"></i></a>
                                            </li>
                                            <li className='instagram'>
                                                <a href='#'><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='skile-share'>
                                        <span className='titlee'>best skill on</span>
                                        <ul className='social-sharee d-flex liststyle'>
                                            <li className='skil-icon'>
                                                <a href='#'>
                                                    <img src='img/icons-02.png'/>
                                                </a>
                                            </li>
                                            <li className='skil-icon'>
                                                <a href='#'>
                                                    <img src='img/icons-03.png'/>
                                                </a>
                                            </li>
                                            <li className='skil-icon'>
                                                <a href='#'>
                                                    <img src='img/icons-01.png'/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       </div>
                   </div>
                   <div className='col-lg-5 order-1 order-lg-2'>
                       <div className='thumbnail'>
                          <div className='inner'>
                              <img src='img/thumbnail.png'/>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </>
  )
}

export default HomeSlide