import React from 'react'
import './navbar.css'
import { useEffect, useState } from "react";



const Navbar = () => {
    const [stickyClass, setStickyClass] = useState("");
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
        };
      }, []);
    
      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 500 ? setStickyClass('fixed-navbar ') : setStickyClass('');
        }
      };
  return (
    <>
       <header className={`${stickyClass}`}>
           <div className='header-container'>
              <div className='row'>
                 <div className='col-lg-2 col-6'>
                    <div className='header-left'>
                        <div className='logo'>
                           <a href='#'>
                             <img src='/img/logo.png'/>
                           </a>
                        </div>
                    </div>
                 </div>
                 <div className='col-lg-10 col-6'>
                    <div className='header-center'>
                     <nav id="sidenav" className='d-none d-xl-block'>
                        <ul className='primary-menu navbarlink'>
                           <li className='nav-item'>
                               <a  className="nav-link" href='#'>HOME</a>
                           </li>
                           <li className='nav-item'>
                               <a  className="nav-link" href='#'>FEATURES</a>
                           </li>
                           <li className='nav-item'>
                               <a  className="nav-link" href='#'>PORTFOILO</a>
                           </li>
                           <li className='nav-item'>
                               <a  className="nav-link" href='#'>RESUME</a>
                           </li>
                           <li className='nav-item'>
                               <a  className="nav-link" href='#'>CLIENTS</a>
                           </li> <li className='nav-item'>
                               <a  className="nav-link" href='#'>PRICING</a>
                           </li>
                           <li className='nav-item'>
                               <a  className="nav-link" href='#'>BLOG</a>
                           </li>
                           <li className='nav-item'>
                               <a  className="nav-link" href='#'>CONTACT</a>
                           </li>
                        </ul>
                     </nav>
                     <div className='header-right'>
                          <a href='#' className='headerrightbtn d-none d-xl-block'>Buy Now</a>
                          <a className='d-none d-xs-block homesbur'> <i class="fa-solid fa-bars homeburger"></i></a>
                     </div>
                     </div> 
                 </div>
              </div>  
           </div>
       </header>
    </>
  )
}

export default Navbar